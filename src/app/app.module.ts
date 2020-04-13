import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductsListComponent} from './products/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
