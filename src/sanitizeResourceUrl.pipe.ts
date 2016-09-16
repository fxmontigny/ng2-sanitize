import {PipeTransform, Pipe, Injectable} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Injectable()
@Pipe({
    name: 'sanitizeResourceUrl',
    pure: false // required to update the value when the promise is resolved
})
export class SanitizeResourceUrl implements PipeTransform {
    constructor(private _sanitizer: DomSanitizer){}

    transform(v: string) : SafeResourceUrl {
        return this._sanitizer.bypassSecurityTrustResourceUrl(v);
    }
}
