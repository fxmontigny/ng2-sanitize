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
var SanitizeUrl = (function () {
    function SanitizeUrl(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeUrl.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustUrl(v);
    };
    SanitizeUrl = __decorate([
        core_1.Injectable(),
        core_1.Pipe({
            name: 'sanitizeUrl',
            pure: false // required to update the value when the promise is resolved
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], SanitizeUrl);
    return SanitizeUrl;
}());
exports.SanitizeUrl = SanitizeUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVVcmwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbml0aXplVXJsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QyxlQUFlLENBQUMsQ0FBQTtBQUM5RCxpQ0FBb0MsMkJBQTJCLENBQUMsQ0FBQTtBQU9oRTtJQUNJLHFCQUFvQixVQUF3QjtRQUF4QixlQUFVLEdBQVYsVUFBVSxDQUFjO0lBQUUsQ0FBQztJQUUvQywrQkFBUyxHQUFULFVBQVUsQ0FBUztRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFWTDtRQUFDLGlCQUFVLEVBQUU7UUFDWixXQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsYUFBYTtZQUNuQixJQUFJLEVBQUUsS0FBSyxDQUFDLDREQUE0RDtTQUMzRSxDQUFDOzttQkFBQTtJQU9GLGtCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxtQkFBVyxjQU12QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlVHJhbnNmb3JtLCBQaXBlLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXIsIFNhZmVVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnc2FuaXRpemVVcmwnLFxyXG4gICAgcHVyZTogZmFsc2UgLy8gcmVxdWlyZWQgdG8gdXBkYXRlIHRoZSB2YWx1ZSB3aGVuIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZVVybCBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpe31cclxuXHJcbiAgICB0cmFuc2Zvcm0odjogc3RyaW5nKSA6IFNhZmVVcmwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh2KTtcclxuICAgIH1cclxufVxyXG4iXX0=