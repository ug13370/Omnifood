import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HowSectionComponent } from './components/how-section/how-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { MealsSectionComponent } from './components/meals-section/meals-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { PricingSectionComponent } from './components/pricing-section/pricing-section.component';
import { FeaturedSectionComponent } from './components/featured-section/featured-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HowSectionComponent,
    HeroSectionComponent,
    FooterSectionComponent,
    MealsSectionComponent,
    PricingSectionComponent,
    FeaturedSectionComponent,
    TestimonialsSectionComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
