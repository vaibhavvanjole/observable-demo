import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './shared/services/data.service';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    HeaderComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
