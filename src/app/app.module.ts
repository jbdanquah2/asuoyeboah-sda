import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramComponent } from './program/program.component';
import { ProgramCardComponent } from './program-card/program-card.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HomeComponent } from './home/home.component';
import { BibleQuotesComponent } from './bible-quotes/bible-quotes.component';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {BibleQuotesService} from "./services/bible-quotes.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environment/environment";
import {SymbolLoaderService} from "./services/google-symbols-loader.service";
import { PastoralMessageComponent } from './pastoral-message/pastoral-message.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    ProgramComponent,
    ProgramCardComponent,
    UserInputComponent,
    HomeComponent,
    BibleQuotesComponent,
    PastoralMessageComponent,
    GalleryComponent
  ],
    imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AppRoutingModule,
      NgOptimizedImage,
      HttpClientModule
    ],
  providers: [BibleQuotesService, SymbolLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
