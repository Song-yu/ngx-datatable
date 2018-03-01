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
var DataTableSummaryRowCellComponent = /** @class */ (function () {
    function DataTableSummaryRowCellComponent(element) {
        this.element = element.nativeElement;
    }
    Object.defineProperty(DataTableSummaryRowCellComponent.prototype, "columnCssClasses", {
        get: function () {
            var cls = 'datatable-summary-row-cell';
            if (this.column.cellClass) {
                if (typeof this.column.cellClass === 'string') {
                    cls += ' ' + this.column.cellClass;
                }
                else if (typeof this.column.cellClass === 'function') {
                    var res = this.column.cellClass({
                        row: this.row,
                        column: this.column,
                        value: this.value
                    });
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
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowCellComponent.prototype, "width", {
        get: function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowCellComponent.prototype, "height", {
        get: function () {
            var height = this.rowHeight;
            if (isNaN(height))
                return height;
            return height + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowCellComponent.prototype, "title", {
        get: function () {
            var title = '';
            var label = this.label;
            if (label !== '') {
                title += this.label + ' ';
            }
            title += this.value;
            return title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowCellComponent.prototype, "innerHtml", {
        get: function () {
            var innerHtml = '';
            var label = this.label;
            if (label !== '') {
                innerHtml += '<span class="datatable-summary-row-cell-label-title">';
                innerHtml += this.label;
                innerHtml += '</span> ';
            }
            innerHtml += this.value;
            return innerHtml;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowCellComponent.prototype, "label", {
        get: function () {
            if (!this.row || !this.column)
                return '';
            var val = this.column.$$valueGetter(this.row, this.column.prop);
            if (val.label !== undefined && val.label !== '') {
                return val.label;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSummaryRowCellComponent.prototype, "value", {
        get: function () {
            if (!this.row || !this.column)
                return '';
            var val = this.column.$$valueGetter(this.row, this.column.prop);
            var userPipe = this.column.pipe;
            if (val.value !== undefined) {
                val = val.value;
            }
            if (userPipe)
                return userPipe.transform(val);
            if (val !== undefined)
                return val;
            return '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableSummaryRowCellComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableSummaryRowCellComponent.prototype, "column", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableSummaryRowCellComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DataTableSummaryRowCellComponent.prototype, "columnCssClasses", null);
    __decorate([
        core_1.HostBinding('style.width.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableSummaryRowCellComponent.prototype, "width", null);
    __decorate([
        core_1.HostBinding('style.height'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DataTableSummaryRowCellComponent.prototype, "height", null);
    DataTableSummaryRowCellComponent = __decorate([
        core_1.Component({
            selector: 'datatable-summary-row-cell',
            template: "\n        <div class=\"datatable-summary-row-cell-label\">\n            <span [title]=\"title\"\n                  [innerHTML]=\"innerHtml\">\n            </span>\n        </div>\n    ",
            host: {
                class: 'datatable-summary-row-cell'
            }
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], DataTableSummaryRowCellComponent);
    return DataTableSummaryRowCellComponent;
}());
exports.DataTableSummaryRowCellComponent = DataTableSummaryRowCellComponent;
//# sourceMappingURL=summary-row-cell.component.js.map