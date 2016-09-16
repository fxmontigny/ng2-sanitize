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
var SanitizeScript = (function () {
    function SanitizeScript(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeScript.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustScript(v);
    };
    SanitizeScript = __decorate([
        core_1.Injectable(),
        core_1.Pipe({
            name: 'sanitizeScript',
            pure: false // required to update the value when the promise is resolved
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], SanitizeScript);
    return SanitizeScript;
}());
exports.SanitizeScript = SanitizeScript;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVTY3JpcHQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbml0aXplU2NyaXB0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QyxlQUFlLENBQUMsQ0FBQTtBQUM5RCxpQ0FBdUMsMkJBQTJCLENBQUMsQ0FBQTtBQU9uRTtJQUNJLHdCQUFvQixVQUF3QjtRQUF4QixlQUFVLEdBQVYsVUFBVSxDQUFjO0lBQUUsQ0FBQztJQUUvQyxrQ0FBUyxHQUFULFVBQVUsQ0FBUztRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFWTDtRQUFDLGlCQUFVLEVBQUU7UUFDWixXQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLElBQUksRUFBRSxLQUFLLENBQUMsNERBQTREO1NBQzNFLENBQUM7O3NCQUFBO0lBT0YscUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLHNCQUFjLGlCQU0xQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlVHJhbnNmb3JtLCBQaXBlLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXIsIFNhZmVTY3JpcHR9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnc2FuaXRpemVTY3JpcHQnLFxyXG4gICAgcHVyZTogZmFsc2UgLy8gcmVxdWlyZWQgdG8gdXBkYXRlIHRoZSB2YWx1ZSB3aGVuIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZVNjcmlwdCBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpe31cclxuXHJcbiAgICB0cmFuc2Zvcm0odjogc3RyaW5nKSA6IFNhZmVTY3JpcHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFNjcmlwdCh2KTtcclxuICAgIH1cclxufVxyXG4iXX0=