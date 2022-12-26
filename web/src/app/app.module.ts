import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { CoffeeClubComponent } from './coffee-club/coffee-club.component';
import { MomentModule } from 'ngx-moment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AboutUsCardComponent } from './about-us-card/about-us-card.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { EventComponent } from './event/event.component';
import { EventsPageComponent } from './events-page/events-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactsComponent,
    ImageCarouselComponent,
    CoffeeClubComponent,
    PageNotFoundComponent,
    HomePageComponent,
    GalleryPageComponent,
    AboutUsCardComponent,
    UpcomingEventsComponent,
    EventComponent,
    EventsPageComponent
  ],
  imports: [
    NgbModule,
    MomentModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
