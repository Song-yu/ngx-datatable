import { ElementRef } from '@angular/core';
import { TableColumn } from '../../types/table-column.type';
export declare class DataTableSummaryRowCellComponent {
    row: any;
    column: TableColumn;
    rowHeight: number;
    readonly columnCssClasses: any;
    readonly width: number;
    readonly height: string | number;
    readonly title: any;
    readonly innerHtml: any;
    readonly label: any;
    readonly value: any;
    element: any;
    constructor(element: ElementRef);
}
