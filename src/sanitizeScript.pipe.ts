import {PipeTransform, Pipe, Injectable} from '@angular/core';
import {DomSanitizer, SafeScript} from '@angular/platform-browser';

@Injectable()
@Pipe({
    name: 'sanitizeScript',
    pure: false // required to update the value when the promise is resolved
})
export class SanitizeScript implements PipeTransform {
    constructor(private _sanitizer: DomSanitizer){}

    transform(v: string) : SafeScript {
        return this._sanitizer.bypassSecurityTrustScript(v);
    }
}
