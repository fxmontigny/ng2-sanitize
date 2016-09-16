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
var SanitizeStyle = (function () {
    function SanitizeStyle(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeStyle.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustStyle(v);
    };
    SanitizeStyle = __decorate([
        core_1.Injectable(),
        core_1.Pipe({
            name: 'sanitizeStyle',
            pure: false // required to update the value when the promise is resolved
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], SanitizeStyle);
    return SanitizeStyle;
}());
exports.SanitizeStyle = SanitizeStyle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVTdHlsZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FuaXRpemVTdHlsZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFDOUQsaUNBQXNDLDJCQUEyQixDQUFDLENBQUE7QUFPbEU7SUFDSSx1QkFBb0IsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYztJQUFFLENBQUM7SUFFL0MsaUNBQVMsR0FBVCxVQUFVLENBQVM7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBVkw7UUFBQyxpQkFBVSxFQUFFO1FBQ1osV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLGVBQWU7WUFDckIsSUFBSSxFQUFFLEtBQUssQ0FBQyw0REFBNEQ7U0FDM0UsQ0FBQzs7cUJBQUE7SUFPRixvQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlkscUJBQWEsZ0JBTXpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGVUcmFuc2Zvcm0sIFBpcGUsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZVN0eWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3Nhbml0aXplU3R5bGUnLFxyXG4gICAgcHVyZTogZmFsc2UgLy8gcmVxdWlyZWQgdG8gdXBkYXRlIHRoZSB2YWx1ZSB3aGVuIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZVN0eWxlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcil7fVxyXG5cclxuICAgIHRyYW5zZm9ybSh2OiBzdHJpbmcpIDogU2FmZVN0eWxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2KTtcclxuICAgIH1cclxufVxyXG4iXX0=