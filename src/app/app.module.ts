import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductsListComponent} from './products/products-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertLineToSpaces} from './shared/convert-line-to-spaces';
import {StarComponent} from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsListComponent,
    StarComponent,
    ConvertLineToSpaces
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
