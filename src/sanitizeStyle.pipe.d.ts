import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
export declare class SanitizeStyle implements PipeTransform {
    private _sanitizer;
    constructor(_sanitizer: DomSanitizer);
    transform(v: string): SafeStyle;
}
