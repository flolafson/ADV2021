import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent implements OnInit {

  headerTitle:string = "ADV";
  navbarOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {

    console.log("title: "+this.headerTitle);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  navigateToEvents() {
    this.router.navigate(['events']);
  }

  navigateToMembers() {
    this.router.navigate(['members']);
  }

  navigateToAdmin() {
    this.router.navigate(['admin']);
  }

  navigateToAccount() {
    this.router.navigate(['profiles']);
  }

  navigateToBooking(){
    this.router.navigate(['bookings']);
  }

}
