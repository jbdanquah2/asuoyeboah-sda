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
import { PastoralMessageComponent } from './pastoral-message/pastoral-message.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LeadersComponent } from './leaders/leaders.component';
import { LeaderCardComponent } from './leader-card/leader-card.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { environment } from '../environment/environment';
import { AlbumComponent } from './album/album.component';
import {AuthService} from "./services/auth.service";
import {LoginComponent} from "./login/login.component";
import {LoadingComponent} from "./shared/loading/loading.component";
import {ViewerComponent} from "./viewer/viewer.component";
import {PopupModalComponent} from "./popup-modal/popup-modal.component";


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
    GalleryComponent,
    GalleryItemComponent,
    AdminComponent,
    AboutUsComponent,
    LeadersComponent,
    LeaderCardComponent,
    TextEditorComponent,
    AlbumComponent,
    LoginComponent,
    LoadingComponent,
    ViewerComponent,
    PopupModalComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      FormsModule,
      ReactiveFormsModule,
      NoopAnimationsModule,
      NgOptimizedImage,
      HttpClientModule,

    ],
  providers: [BibleQuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
