import { Component } from '@angular/core';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2/gst';
import { RUCKEN_SITE } from './data/rucken-site';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  site = RUCKEN_SITE;
  constructor(angulartics: Angulartics2GoogleGlobalSiteTag) {
    angulartics.startTracking();
  }
}
