"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../../utils");
var DataTableSummaryRowComponent = /** @class */ (function () {
    function DataTableSummaryRowComponent(element) {
        this.element = element.nativeElement;
    }
    Object.defineProperty(DataTableSummaryRowComponent.prototype, "row", {
        get: function () {
            return this._row;
        },
        set: function (val) {
            console.log('Incoming Summary Row', val);
            this._row = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowComponent.prototype, "columns", {
        get: function () {
            console.log(this._columns);
            return this._columns;
        },
        set: function (val) {
            console.log('Incoming Summary Row Columns', val);
            this._columns = val;
            this.recalculateColumns(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowComponent.prototype, "innerWidth", {
        get: function () {
            return this._innerWidth;
        },
        set: function (val) {
            this._innerWidth = val;
            this.recalculateColumns();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowComponent.prototype, "headerWidth", {
        get: function () {
            if (this.scrollbarH) {
                return this.innerWidth + 'px';
            }
            return '100%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowComponent.prototype, "columnsTotalWidths", {
        get: function () {
            return this.columnGroupWidths.total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowComponent.prototype, "cssClass", {
        get: function () {
            var cls = 'datatable-summary-row';
            if (this.rowClass) {
                var res = this.rowClass(this.row);
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    var keys = Object.keys(res);
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var k = keys_1[_i];
                        if (res[k] === true)
                            cls += " " + k;
                    }
                }
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    DataTableSummaryRowComponent.prototype.trackByGroups = function (index, colGroup) {
        return colGroup.type;
    };
    DataTableSummaryRowComponent.prototype.columnTrackingFn = function (index, column) {
        console.log('Column', column);
        return column.$$id;
    };
    DataTableSummaryRowComponent.prototype.stylesByGroup = function (group) {
        var widths = this.columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'center') {
            utils_1.translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            var totalDiff = widths.total - this.innerWidth;
            var offset = totalDiff * -1;
            utils_1.translateXY(styles, offset, 0);
        }
        return styles;
    };
    DataTableSummaryRowComponent.prototype.recalculateColumns = function (val) {
        if (val === void 0) { val = this.columns; }
        var colsByPin = utils_1.columnsByPin(val);
        this.columnsByPin = utils_1.columnsByPinArr(val);
        console.log(this.columnsByPin);
        this.columnGroupWidths = utils_1.columnGroupWidths(colsByPin, val);
    };
    /**
     * Get the row height
     *
     * @param {*} row
     * @returns {number}
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableSummaryRowComponent.prototype.getRowHeight = function (row) {
        var rowHeight = this.rowHeight;
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            rowHeight = this.rowHeight(row);
        }
        return rowHeight;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableSummaryRowComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableSummaryRowComponent.prototype, "row", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataTableSummaryRowComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableSummaryRowComponent.prototype, "innerWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableSummaryRowComponent.prototype, "rowClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableSummaryRowComponent.prototype, "offsetX", void 0);
    __decorate([
        core_1.HostBinding('style.width'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], DataTableSummaryRowComponent.prototype, "headerWidth", null);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableSummaryRowComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.HostBinding('style.width.px'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], DataTableSummaryRowComponent.prototype, "columnsTotalWidths", null);
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DataTableSummaryRowComponent.prototype, "cssClass", null);
    DataTableSummaryRowComponent = __decorate([
        core_1.Component({
            selector: 'datatable-summary-row',
            template: "\n    <div *ngFor=\"let colGroup of columnsByPin; let i = index; trackBy: trackByGroups\"\n         [ngStyle]=\"stylesByGroup(colGroup.type)\">\n      <datatable-summary-row-cell\n        *ngFor=\"let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn\"\n        tabindex=\"-1\"\n        [row]=\"row\"\n        [column]=\"column\"\n        [rowHeight]=\"getRowHeight(rowHeight)\">\n      </datatable-summary-row-cell>\n    </div>\n  ",
            host: {
                class: 'datatable-summary-row'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], DataTableSummaryRowComponent);
    return DataTableSummaryRowComponent;
}());
exports.DataTableSummaryRowComponent = DataTableSummaryRowComponent;
//# sourceMappingURL=summary-row.component.js.map