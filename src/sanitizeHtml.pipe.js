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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var SanitizeHtml = (function () {
    function SanitizeHtml(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtml.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtml = __decorate([
        core_1.Injectable(),
        core_1.Pipe({
            name: 'sanitizeHtml',
            pure: false // required to update the value when the promise is resolved
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], SanitizeHtml);
    return SanitizeHtml;
}());
exports.SanitizeHtml = SanitizeHtml;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVIdG1sLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYW5pdGl6ZUh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELGlDQUFxQywyQkFBMkIsQ0FBQyxDQUFBO0FBT2pFO0lBQ0ksc0JBQW9CLFVBQXdCO1FBQXhCLGVBQVUsR0FBVixVQUFVLENBQWM7SUFBRSxDQUFDO0lBRS9DLGdDQUFTLEdBQVQsVUFBVSxDQUFTO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQVZMO1FBQUMsaUJBQVUsRUFBRTtRQUNaLFdBQUksQ0FBQztZQUNGLElBQUksRUFBRSxjQUFjO1lBQ3BCLElBQUksRUFBRSxLQUFLLENBQUMsNERBQTREO1NBQzNFLENBQUM7O29CQUFBO0lBT0YsbUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLG9CQUFZLGVBTXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGVUcmFuc2Zvcm0sIFBpcGUsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZUh0bWx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnc2FuaXRpemVIdG1sJyxcclxuICAgIHB1cmU6IGZhbHNlIC8vIHJlcXVpcmVkIHRvIHVwZGF0ZSB0aGUgdmFsdWUgd2hlbiB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FuaXRpemVIdG1sIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcil7fVxyXG5cclxuICAgIHRyYW5zZm9ybSh2OiBzdHJpbmcpIDogU2FmZUh0bWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodik7XHJcbiAgICB9XHJcbn1cclxuIl19