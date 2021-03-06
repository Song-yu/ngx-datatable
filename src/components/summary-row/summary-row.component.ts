import {
  Component, Output, EventEmitter, ChangeDetectionStrategy, Input, ElementRef, HostBinding
} from '@angular/core';

import {
  columnsByPin, columnGroupWidths, columnsByPinArr, translateXY, Keys
} from '../../utils';

@Component({
  selector: 'datatable-summary-row',
  template: `
    <div *ngFor="let colGroup of columnsByPin; trackBy: trackByGroups"
         [ngStyle]="stylesByGroup(colGroup.type)">
      <datatable-summary-row-cell
        *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [column]="column"
        [rowHeight]="getRowHeight(rowHeight)">
      </datatable-summary-row-cell>
    </div>
  `,
  host: {
    class: 'datatable-summary-row'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableSummaryRowComponent {
  @Input() scrollbarH: boolean;

  @Input() set row(val: any) {
    this._row = val;
  }

  get row(): any {
    return this._row;
  }

  @Input() set columns(val: any[]) {
    console.debug('Incoming Summary Row Columns', val);
    this._columns = val;
    this.recalculateColumns(val);
  }

  get columns(): any[] {
    return this._columns;
  }

  @Input() set innerWidth(val: number) {
    this._innerWidth = val;
    this.recalculateColumns();
  }

  get innerWidth(): number {
    return this._innerWidth;
  }

  @Input() rowClass: any;
  @Input() offsetX: number;

  @HostBinding('style.width')
  get headerWidth(): string {
    if (this.scrollbarH) {
      return this.innerWidth + 'px';
    }

    return '100%';
  }

  @HostBinding('style.height.px')
  @Input() rowHeight: any;

  @HostBinding('style.width.px')
  get columnsTotalWidths(): string {
    return this.columnGroupWidths.total;
  }

  @HostBinding('class')
  get cssClass() {
    let cls = 'datatable-summary-row';

    if (this.rowClass) {
      const res = this.rowClass(this.row);
      if (typeof res === 'string') {
        cls += res;
      } else if (typeof res === 'object') {
        const keys = Object.keys(res);
        for (const k of keys) {
          if (res[k] === true) cls += ` ${k}`;
        }
      }
    }

    return cls;
  }

  element: any;
  columnGroupWidths: any;
  columnsByPin: any;
  _row: any;
  _columns: any[];
  _innerWidth: number;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  trackByGroups(index: number, colGroup: any): any {
    return colGroup.type;
  }

  columnTrackingFn(index: number, column: any): any {
    return column.$$id;
  }

  stylesByGroup(group: string): any {
    const widths = this.columnGroupWidths;
    const offsetX = this.offsetX;

    const styles = {
      width: `${widths[group]}px`
    };

    if (group === 'center') {
      translateXY(styles, offsetX * -1, 0);
    } else if (group === 'right') {
      const totalDiff = widths.total - this.innerWidth;
      const offset = totalDiff * -1;
      translateXY(styles, offset, 0);
    }

    return styles;
  }

  recalculateColumns(val: any[] = this.columns): void {
    const colsByPin = columnsByPin(val);
    this.columnsByPin = columnsByPinArr(val);
    this.columnGroupWidths = columnGroupWidths(colsByPin, val);
  }

  /**
   * Get the row height
   *
   * @param {*} row
   * @returns {number}
   *
   * @memberOf DataTableBodyComponent
   */
  getRowHeight(row: any): number {
    let rowHeight = this.rowHeight;

    // if its a function return it
    if (typeof this.rowHeight === 'function') {
      rowHeight = this.rowHeight(row);
    }

    return rowHeight;
  }
}
