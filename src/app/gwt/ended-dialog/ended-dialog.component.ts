import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Player, Table, TablePlayer} from '../../shared/model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ScoreCategory, State} from '../model';

interface Column {
  player: TablePlayer;
  winner: boolean;
  total: number;
}

interface Row {
  category: ScoreCategory;
  scores: number[];
}

@Component({
  selector: 'app-ended-dialog',
  templateUrl: './ended-dialog.component.html',
  styleUrls: ['./ended-dialog.component.scss']
})
export class EndedDialogComponent implements OnInit, OnChanges {

  @Input() table: Table;
  @Input() state: State;

  constructor(public ngbActiveModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  get rows(): Row[] {
    return Object.keys(ScoreCategory)
      .map(category => ({
        category: category as ScoreCategory,
        scores: [this.state.player, ...this.state.otherPlayers]
          .map(player => player.score.categories[category] || 0)
      }));
  }

  get columns(): Column[] {
    return [this.state.player, ...this.state.otherPlayers]
      .map(playerState => ({
        player: this.table.players[playerState.player.name],
        winner: playerState.winner,
        total: playerState.score.total
      }));
  }

}