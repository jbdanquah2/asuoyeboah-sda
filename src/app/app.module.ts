import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageCarouselComponent } from './landing-page-carousel/landing-page-carousel.component';
import { ProgramsSectionComponent } from './programs-section/programs-section.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HomeComponent } from './home/home.component';
import { BibleQuotesComponent } from './bible-quotes/bible-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    LandingPageCarouselComponent,
    ProgramsSectionComponent,
    UserInputComponent,
    HomeComponent,
    BibleQuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
