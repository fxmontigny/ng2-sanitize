import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeScript } from '@angular/platform-browser';
export declare class SanitizeScript implements PipeTransform {
    private _sanitizer;
    constructor(_sanitizer: DomSanitizer);
    transform(v: string): SafeScript;
}
