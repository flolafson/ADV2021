import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderMainComponent } from './headers/header-main/header-main.component';
import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingComponent } from './bookings/booking/booking.component';
import { EventsComponent } from './events/events/events.component';
import { MembersComponent } from './members/members/members.component';
import { ProfileComponent } from './profils/profile/profile.component';
import { AdminComponent } from './admin/admin/admin.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MemberListComponent } from './members/member-list/member-list.component';
import { EventListComponent } from './events/event-list/event-list.component';

import { MatButtonModule } from '@angular/material/button';
import { from } from 'rxjs';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    BookingComponent,
    EventsComponent,
    MembersComponent,
    ProfileComponent,
    AdminComponent,
    MemberListComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatButtonModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'de' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
