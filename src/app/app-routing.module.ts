import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './bookings/booking/booking.component';
import { MembersComponent } from './members/members/members.component';
import { EventsComponent } from './events/events/events.component';
import { ProfileComponent } from './profils/profile/profile.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  { path: 'bookings', component: BookingComponent },
  { path: 'members', component: MembersComponent },
  { path: 'events', component: EventsComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
