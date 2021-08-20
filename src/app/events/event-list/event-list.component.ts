import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Observable<any[]>;

  constructor(private store:FirebaseService) 
  {
    this.events = store.getEvents();
  }

  ngOnInit(): void 
  {
    
  }

  navigateToCreateEvent()
  {
    //this.router.navigate(['event/create']);
    console.log("CREATE EVENT");
  }

  navigateToEvent(key:string)
  {
    //this.router.navigate(['event/book/'+key]);
    console.log("OPEN EVENT");
  }

}
