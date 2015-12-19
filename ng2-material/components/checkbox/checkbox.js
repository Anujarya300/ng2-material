var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var lang_1 = require('angular2/src/facade/lang');
var key_codes_1 = require('../../core/key_codes');
var lang_2 = require('angular2/src/facade/lang');
var core_2 = require('angular2/core');
var MdCheckbox = (function () {
    function MdCheckbox(tabindex) {
        this.checkedChange = new core_2.EventEmitter();
        this.checked = false;
        this.tabindex = lang_1.isPresent(tabindex) ? lang_2.NumberWrapper.parseInt(tabindex, 10) : 0;
        this.disabled_ = false;
    }
    Object.defineProperty(MdCheckbox.prototype, "disabled", {
        get: function () {
            return this.disabled_;
        },
        set: function (value) {
            this.disabled_ = lang_1.isPresent(value) && value !== false;
        },
        enumerable: true,
        configurable: true
    });
    MdCheckbox.prototype.onKeydown = function (event) {
        if (event.keyCode === key_codes_1.KeyCodes.SPACE) {
            event.preventDefault();
            this.toggle(event);
        }
    };
    MdCheckbox.prototype.toggle = function (event) {
        if (this.disabled) {
            event.stopPropagation();
            return;
        }
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    };
    __decorate([
        core_2.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], MdCheckbox.prototype, "checkedChange", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdCheckbox.prototype, "checked", void 0);
    __decorate([
        core_2.Input('disabled'), 
        __metadata('design:type', Boolean)
    ], MdCheckbox.prototype, "disabled_", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Number)
    ], MdCheckbox.prototype, "tabindex", void 0);
    MdCheckbox = __decorate([
        core_1.Component({
            selector: 'md-checkbox',
            inputs: ['checked', 'disabled'],
            host: {
                'role': 'checkbox',
                '[attr.aria-checked]': 'checked',
                '[attr.aria-disabled]': 'disabled',
                '[tabindex]': 'tabindex',
                '(keydown)': 'onKeydown($event)',
            }
        }),
        core_1.View({
            templateUrl: 'ng2-material/components/checkbox/checkbox.html',
            directives: [],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Attribute('tabindex')), 
        __metadata('design:paramtypes', [String])
    ], MdCheckbox);
    return MdCheckbox;
})();
exports.MdCheckbox = MdCheckbox;
//# sourceMappingURL=checkbox.js.map