import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfintroComponent } from './profintro/profintro.component';
import { HovernameComponent } from './hovername/hovername.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GamezoneComponent } from './gamezone/gamezone.component';

// angular materials
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProfintroComponent,
    HovernameComponent,
    PortfolioComponent,
    GamezoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
