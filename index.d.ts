import { PipeTransform } from '@angular/core';
import { DomSanitizationService, SafeHtml } from '@angular/platform-browser';
export declare class SanitizeHtml implements PipeTransform {
    private _sanitizer;
    constructor(_sanitizer: DomSanitizationService);
    transform(v: string): SafeHtml;
}
