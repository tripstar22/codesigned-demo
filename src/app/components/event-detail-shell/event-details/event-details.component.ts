import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'cd-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  items: FirebaseObjectObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.object('/items/0');
  }

  ngOnInit() {
  }

}
