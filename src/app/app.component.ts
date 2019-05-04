import { Component } from '@angular/core';
import { RUCKEN_SITE } from './data/rucken-site';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  site = RUCKEN_SITE;
}
