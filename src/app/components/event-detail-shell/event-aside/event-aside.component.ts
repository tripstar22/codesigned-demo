import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'cd-event-aside',
  templateUrl: './event-aside.component.html',
  styleUrls: ['./event-aside.component.scss']
})
export class EventAsideComponent implements OnInit, AfterViewChecked {

  items: FirebaseObjectObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.object('/items/0');
    var e = Event;
  }

  // asign dynamic height to aside
  asideDynamicHeight(e) {
    // get body
    const b = document.body;
    // get body height
    let height = b.offsetHeight;
    // get aside el
    const el = document.getElementById("asideEventDetail");
    // make aside height the height of body minus 90px for the main nav
    el.style.height = (height - 90) + "px";
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    const w = window;
    // run function only on desktop
    // use setTimeout to wait for content to be loaded
    if (w.innerWidth >= 1024) {
      var e = Event;
      this.asideDynamicHeight(e);
    }
  }

}
