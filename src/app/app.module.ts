import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HeaderComponent } from './components/header/header.component';
import { HowSectionComponent } from './components/how-section/how-section.component';
import { FeaturedSectionComponent } from './components/featured-section/featured-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    HeaderComponent,
    HowSectionComponent,
    FeaturedSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
