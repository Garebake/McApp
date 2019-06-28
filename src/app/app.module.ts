import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AboutUsComponent } from './about-us/about-us.component';
=======
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TesterComponent } from './tester/tester.component';
>>>>>>> bd155fb8af69ae40a5a03f79624210ad14fe3cbe

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AboutUsComponent
=======
    HomeComponent,
    NavComponent,
    TesterComponent
>>>>>>> bd155fb8af69ae40a5a03f79624210ad14fe3cbe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
