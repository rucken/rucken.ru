import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NavbarComponent } from './navbar.component';
@NgModule({
    imports: [CommonModule, RouterModule, CollapseModule.forRoot(), Angulartics2Module],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
})
export class NavbarModule {}
