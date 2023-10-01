import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { ProgramsSectionComponent } from './programs-section/programs-section.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HomeComponent } from './home/home.component';
import { BibleQuotesComponent } from './bible-quotes/bible-quotes.component';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {BibleQuotesService} from "./services/bible-quotes.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environment/environment";

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    ProgrammesComponent,
    ProgramsSectionComponent,
    UserInputComponent,
    HomeComponent,
    BibleQuotesComponent
  ],
    imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AppRoutingModule,
      NgOptimizedImage,
      HttpClientModule
    ],
  providers: [BibleQuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
