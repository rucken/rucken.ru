import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {}
