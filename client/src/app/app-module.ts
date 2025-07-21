import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Home } from './home/home';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from "./components/product/product";
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { EditPopupComponent } from "./components/edit-popup/edit-popup.component";
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    App,
    Home,
    Header,
    Footer
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: Home }]), // Add your routes here
    PaginatorModule,
    ProductComponent,
    EditPopupComponent,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule
],
  exports: [App],
  bootstrap: [App]
})
export class AppModule { }
