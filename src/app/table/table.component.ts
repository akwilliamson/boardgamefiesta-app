import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {bufferCount, filter, skipWhile, switchMap, take, takeUntil, windowCount} from 'rxjs/operators';
import {EventType, Options, PlayerStatus, Table, TablePlayer, TableStatus} from '../shared/model';
import {EventService} from '../event.service';
import {TableService} from '../table.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MessageDialogComponent} from '../shared/message-dialog/message-dialog.component';
import {fromPromise} from 'rxjs/internal-compatibility';
import {SelectUserComponent} from '../select-user/select-user.component';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AudioService} from '../audio.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy, OnChanges {

  private destroyed = new Subject();
  private left = new Subject();
  private leaving = false;

  table = new BehaviorSubject<Table>(undefined);
  state = new BehaviorSubject<any>(undefined);

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tableService: TableService,
              private eventService: EventService,
              private ngbModal: NgbModal,
              private title: Title,
              private translateService: TranslateService,
              private audioService: AudioService) {

  }

  ngOnInit(): void {
    this.refreshTable();

    this.table
      .pipe(filter(table => !!table), takeUntil(this.destroyed))
      .subscribe(table => {
        this.title.setTitle(this.translateService.instant('game.' + table.game + '.name'));

        if (table.status === TableStatus.STARTED || table.status === TableStatus.ENDED) {
          this.refreshState();
        }
      });

    this.table
      .pipe(bufferCount(2, 1))
      .subscribe(([previous, current]) => {
        if (current && previous) {
          if (current.turn && !previous.turn) {
            this.audioService.alert();
          }
        }
      });

    this.eventService.events
      .pipe(
        takeUntil(this.destroyed),
        takeUntil(this.left),
        skipWhile(() => this.leaving))
      // TODO Filter on current table
      .subscribe(event => {
        switch (event.type) {
          case EventType.ACCEPTED:
          case EventType.REJECTED:
          case EventType.STARTED:
          case EventType.ENDED:
          case EventType.INVITED:
          case EventType.UNINVITED:
          case EventType.OPTIONS_CHANGED:
          case EventType.PROPOSED_TO_LEAVE:
          case EventType.AGREED_TO_LEAVE:
            this.refreshTable();
            break;

          case EventType.LEFT:
          case EventType.ABANDONED:
          case EventType.KICKED:
            console.log('event: ', event);
            console.log('self: ', this.table.value.players[this.table.value.player].user.id);
            if (this.table.value && event.userId === this.table.value.players[this.table.value.player].user.id) {
              // We are no longer in this table
              console.log('no longer at table, redirecting');
              this.router.navigateByUrl('/');
            } else {
              console.log('refresh table');
              // We are still in this table
              this.refreshTable();
            }
            break;

          case EventType.STATE_CHANGED:
            console.log('event:', event);
            this.refreshTable();
            this.refreshState();
            break;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  private refreshTable() {
    this.route.params
      .pipe(switchMap(params => this.tableService.get(params.id)))
      .subscribe(table => this.table.next(table));
  }

  start(table: Table) {
    let confirm = of(true);

    if (this.hasInvitedPlayers(table)) {
      const ngbModalRef = this.ngbModal.open(MessageDialogComponent);
      const messageDialogComponent = ngbModalRef.componentInstance as MessageDialogComponent;
      messageDialogComponent.type = 'alert';
      messageDialogComponent.titleKey = 'confirmDialog';
      messageDialogComponent.messageKey = 'confirmStart';
      messageDialogComponent.confirmKey = 'start';
      messageDialogComponent.cancelKey = 'waitForPlayers';

      confirm = fromPromise(ngbModalRef.result);
    }

    confirm
      .pipe(
        switchMap(() => this.tableService.start(table.id)))
      .subscribe();
  }

  private hasInvitedPlayers(table: Table) {
    return table.players[table.player].status === PlayerStatus.INVITED
      || table.otherPlayers.some(name => table.players[name].status === PlayerStatus.INVITED);
  }

  perform(table: Table, action: any) {
    this.tableService.perform(table.id, action)
      .subscribe(() => {
        this.refreshState();
      });
  }

  skip(table: Table) {
    this.tableService.skip(table.id)
      .subscribe(() => {
        this.refreshState();
      });
  }

  endTurn(table: Table) {
    this.tableService.endTurn(table.id)
      .subscribe(() => this.refreshState());
  }

  private refreshState() {
    this.table.pipe(
      takeUntil(this.destroyed),
      takeUntil(this.left),
      skipWhile(() => this.leaving),
      take(1),
      switchMap(table => this.tableService.getState(table.id)))
      .subscribe(state => this.state.next(state));
  }

  abandon(table: Table) {
    this.leaving = true;
    this.tableService.abandon(table.id)
      .subscribe(
        () => {
          this.left.next(true);
          this.router.navigate(['/']);
        },
        () => {
          this.leaving = false;
          this.refreshTable();
        });
  }

  leave(table: Table) {
    this.leaving = true;

    this.tableService.leave(table.id)
      .subscribe(
        () => {
          this.left.next(true);
          this.router.navigate(['/']);
        }, () => {
          this.leaving = false;
          this.refreshTable();
        });
  }

  invite(table: Table) {
    const ngbModalRef = this.ngbModal.open(SelectUserComponent);
    fromPromise(ngbModalRef.result)
      .pipe(switchMap(user => this.tableService.invite(table.id, user.id)))
      .subscribe(() => this.refreshTable());
  }

  addComputer(table: Table) {
    this.tableService.addComputer(table.id)
      .subscribe(() => this.refreshTable());
  }

  kick(table: Table, player: TablePlayer) {
    this.tableService.kick(table.id, player.id)
      .subscribe(() => this.refreshTable());
  }

  accept(table: Table) {
    this.tableService.accept(table.id)
      .subscribe(() => this.refreshTable());
  }

  reject(table: Table) {
    this.tableService.reject(table.id)
      .subscribe(() => this.router.navigate(['/']));
  }

  changeOptions(table: Table, options: Options) {
    this.tableService.changeOptions(table.id, {options})
      .subscribe();
  }
}
