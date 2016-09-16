System.registerDynamic("src/sanitizeHtml.pipe", ["@angular/core", "@angular/platform-browser"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var platform_browser_1 = $__require("@angular/platform-browser");
    var SanitizeHtml = function () {
        function SanitizeHtml(_sanitizer) {
            this._sanitizer = _sanitizer;
        }
        SanitizeHtml.prototype.transform = function (v) {
            return this._sanitizer.bypassSecurityTrustHtml(v);
        };
        SanitizeHtml = __decorate([core_1.Injectable(), core_1.Pipe({
            name: 'sanitizeHtml',
            pure: false // required to update the value when the promise is resolved
        }), __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])], SanitizeHtml);
        return SanitizeHtml;
    }();
    exports.SanitizeHtml = SanitizeHtml;
    return module.exports;
});
System.registerDynamic("src/sanitizeResourceUrl.pipe", ["@angular/core", "@angular/platform-browser"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var platform_browser_1 = $__require("@angular/platform-browser");
    var SanitizeResourceUrl = function () {
        function SanitizeResourceUrl(_sanitizer) {
            this._sanitizer = _sanitizer;
        }
        SanitizeResourceUrl.prototype.transform = function (v) {
            return this._sanitizer.bypassSecurityTrustResourceUrl(v);
        };
        SanitizeResourceUrl = __decorate([core_1.Injectable(), core_1.Pipe({
            name: 'sanitizeResourceUrl',
            pure: false // required to update the value when the promise is resolved
        }), __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])], SanitizeResourceUrl);
        return SanitizeResourceUrl;
    }();
    exports.SanitizeResourceUrl = SanitizeResourceUrl;
    return module.exports;
});
System.registerDynamic("src/sanitizeScript.pipe", ["@angular/core", "@angular/platform-browser"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var platform_browser_1 = $__require("@angular/platform-browser");
    var SanitizeScript = function () {
        function SanitizeScript(_sanitizer) {
            this._sanitizer = _sanitizer;
        }
        SanitizeScript.prototype.transform = function (v) {
            return this._sanitizer.bypassSecurityTrustScript(v);
        };
        SanitizeScript = __decorate([core_1.Injectable(), core_1.Pipe({
            name: 'sanitizeScript',
            pure: false // required to update the value when the promise is resolved
        }), __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])], SanitizeScript);
        return SanitizeScript;
    }();
    exports.SanitizeScript = SanitizeScript;
    return module.exports;
});
System.registerDynamic("src/sanitizeStyle.pipe", ["@angular/core", "@angular/platform-browser"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var platform_browser_1 = $__require("@angular/platform-browser");
    var SanitizeStyle = function () {
        function SanitizeStyle(_sanitizer) {
            this._sanitizer = _sanitizer;
        }
        SanitizeStyle.prototype.transform = function (v) {
            return this._sanitizer.bypassSecurityTrustStyle(v);
        };
        SanitizeStyle = __decorate([core_1.Injectable(), core_1.Pipe({
            name: 'sanitizeStyle',
            pure: false // required to update the value when the promise is resolved
        }), __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])], SanitizeStyle);
        return SanitizeStyle;
    }();
    exports.SanitizeStyle = SanitizeStyle;
    return module.exports;
});
System.registerDynamic("src/sanitizeUrl.pipe", ["@angular/core", "@angular/platform-browser"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var platform_browser_1 = $__require("@angular/platform-browser");
    var SanitizeUrl = function () {
        function SanitizeUrl(_sanitizer) {
            this._sanitizer = _sanitizer;
        }
        SanitizeUrl.prototype.transform = function (v) {
            return this._sanitizer.bypassSecurityTrustUrl(v);
        };
        SanitizeUrl = __decorate([core_1.Injectable(), core_1.Pipe({
            name: 'sanitizeUrl',
            pure: false // required to update the value when the promise is resolved
        }), __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])], SanitizeUrl);
        return SanitizeUrl;
    }();
    exports.SanitizeUrl = SanitizeUrl;
    return module.exports;
});
System.registerDynamic("ng2-sanitize", ["./src/sanitizeHtml.pipe", "./src/sanitizeResourceUrl.pipe", "./src/sanitizeScript.pipe", "./src/sanitizeStyle.pipe", "./src/sanitizeUrl.pipe"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var sanitizeHtml_pipe_1 = $__require("./src/sanitizeHtml.pipe");
  exports.SanitizeHtml = sanitizeHtml_pipe_1.SanitizeHtml;
  var sanitizeResourceUrl_pipe_1 = $__require("./src/sanitizeResourceUrl.pipe");
  exports.SanitizeResourceUrl = sanitizeResourceUrl_pipe_1.SanitizeResourceUrl;
  var sanitizeScript_pipe_1 = $__require("./src/sanitizeScript.pipe");
  exports.SanitizeScript = sanitizeScript_pipe_1.SanitizeScript;
  var sanitizeStyle_pipe_1 = $__require("./src/sanitizeStyle.pipe");
  exports.SanitizeStyle = sanitizeStyle_pipe_1.SanitizeStyle;
  var sanitizeUrl_pipe_1 = $__require("./src/sanitizeUrl.pipe");
  exports.SanitizeUrl = sanitizeUrl_pipe_1.SanitizeUrl;
  return module.exports;
});