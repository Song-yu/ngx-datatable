import { ElementRef } from '@angular/core';
export declare class DataTableSummaryRowComponent {
    scrollbarH: boolean;
    row: any;
    columns: any[];
    innerWidth: number;
    rowClass: any;
    offsetX: number;
    readonly headerWidth: string;
    rowHeight: any;
    readonly columnsTotalWidths: string;
    readonly cssClass: string;
    element: any;
    columnGroupWidths: any;
    columnsByPin: any;
    _row: any;
    _columns: any[];
    _innerWidth: number;
    constructor(element: ElementRef);
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
    stylesByGroup(group: string): any;
    recalculateColumns(val?: any[]): void;
    /**
     * Get the row height
     *
     * @param {*} row
     * @returns {number}
     *
     * @memberOf DataTableBodyComponent
     */
    getRowHeight(row: any): number;
}
