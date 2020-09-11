import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component'; 
import { RestuarantsService } from './service/restuarants.service';

import{ FormsModule } from '@angular/forms';
import { FiltersearchPipe } from './components/home/filtersearch.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    FiltersearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,FormsModule,
    MatSidenavModule,BrowserAnimationsModule,
    MatIconModule,
    MatListModule
  ],
  providers: [RestuarantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
