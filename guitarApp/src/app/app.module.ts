import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuitarComponent } from './components/guitar/guitar.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GuitarComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
