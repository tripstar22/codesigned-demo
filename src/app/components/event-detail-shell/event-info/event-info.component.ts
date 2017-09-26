import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'cd-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {

  // get objects from firebase
  items: FirebaseObjectObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    // navigate to correct object
    this.items = db.object('/items/0');
    var e = Event;
  }

  // width of element containing line
  // primary breadcrumbs nav
  dynamicLineStyles(e) {
    // get elements needed
    // .crumbsPrimary wrapper, .crumbsPrimary, line element
    const wrapCrumbs = document.getElementById("crumbsNavWrap");
    const crumbs = document.getElementById("crumbsNav");
    const line = document.getElementById("lineDynamic");
    // get percentage width of .crumbsPrimary
    let difference = (100 / wrapCrumbs.offsetWidth) * crumbs.offsetWidth;
    // make line rest of percentage width minus a little room for spacing
    line.style.width = (90 - difference) + "%";
  }

  ngOnInit() {
    var e = Event;
    this.dynamicLineStyles(e);
  }

}
