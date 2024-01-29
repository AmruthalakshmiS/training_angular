import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookProductsComponent } from './book-products/book-products.component';
import { BookRetailComponent } from './book-retail/book-retail.component';
import { BookProductsDirective } from './background-blue';




@NgModule({
  declarations: [
    AppComponent,
    BookProductsComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BookRetailComponent,
    BookProductsDirective
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
