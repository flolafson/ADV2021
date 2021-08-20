import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, pipe, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private store: AngularFirestore) { }

  // All events
  getEvents() : Observable<any[]>
  {
    return this.store.collection('/events', ref => ref.orderBy("date"))
    .snapshotChanges()
      .pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() as {} }))
        )
      );
  }

  // Get all members
  getMembers() : Observable<any[]>
  {
    return this.store.collection('/members', ref => ref.orderBy("lastName"))
    .snapshotChanges()
      .pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() as {} }))
        )
    );
  }
}
