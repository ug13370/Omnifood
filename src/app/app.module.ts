import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HeaderComponent } from './components/header/header.component';
import { HowSectionComponent } from './components/how-section/how-section.component';
import { FeaturedSectionComponent } from './components/featured-section/featured-section.component';
import { MealsSectionComponent } from './components/meals-section/meals-section.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    HeaderComponent,
    HowSectionComponent,
    FeaturedSectionComponent,
    MealsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
