import {Injectable} from '@angular/core';
import {GameProvider, Options} from "../shared/api";
import {TranslateService} from "@ngx-translate/core";
import {LogEntry, Table, TablePlayer, User} from "../shared/model";
import {LayoutType} from "./model";

@Injectable({
  providedIn: 'root'
})
export class IstanbulProvider implements GameProvider {

  options: Options = {
    layoutType: {
      values: [LayoutType.SHORT_PATHS, LayoutType.LONG_PATHS, LayoutType.IN_ORDER, LayoutType.RANDOM],
      defaultValue: LayoutType.RANDOM
    }
  };

  constructor(private translateService: TranslateService) {
  }

  translate(logEntry: LogEntry, table: Table): string {
    return this.translateService.instant('istanbul.log.' + logEntry.parameters[0]);
  }

}
