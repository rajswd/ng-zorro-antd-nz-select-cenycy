import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    NgZorroAntdModule.forRoot() 
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
