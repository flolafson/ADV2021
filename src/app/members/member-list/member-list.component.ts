import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../../services/firebase.service';
import { Observable, from } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members:Observable<any[]>;
  membersList = [];


  constructor(public firebaseService: FirebaseService, private store: AngularFirestore) 
  {
    this.members = this.firebaseService.getMembers();
    console.log(this.members);
  }

  ngOnInit(): void 
  {    
    //this.store.collection('members').valueChanges()
    //.subscribe(val => console.log(val));
  }

}
