import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string): any {
    if (this.sanitizer) {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    } else {
      return value;
    }
  }
}
