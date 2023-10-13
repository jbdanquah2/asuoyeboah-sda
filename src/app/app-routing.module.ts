import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {AdminComponent} from "./admin/admin.component";
import {AboutUsComponent} from "./about-us/about-us.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
