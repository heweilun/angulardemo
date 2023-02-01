/*
 * @Descripttion: 
 * @Author: heweilun weilun@ssc-hn.com
 * @Date: 2023-01-03
 * @LastEditors: heweilun weilun@ssc-hn.com
 * @LastEditTime: 2023-01-28
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollLableTabComponent } from './components/scroll-lable-tab/scroll-lable-tab.component'

@NgModule({
  declarations: [
    AppComponent,
    ScrollLableTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
