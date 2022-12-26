import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventsPageComponent } from './events-page/events-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
