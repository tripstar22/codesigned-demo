import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { EventDetailShellComponent } from './components/event-detail-shell/event-detail-shell.component';
import { EventInfoComponent } from './components/event-detail-shell/event-info/event-info.component';
import { EventDetailsComponent } from './components/event-detail-shell/event-details/event-details.component';
import { EventAsideComponent } from './components/event-detail-shell/event-aside/event-aside.component';
import { CommentsSectionComponent } from './components/comments-section/comments-section.component';
import { EventActionsComponent } from './components/event-detail-shell/event-actions/event-actions.component';

// http service
import { AppHttpService } from './services/app-http.service';

// angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    EventInfoComponent,
    EventDetailsComponent,
    EventAsideComponent,
    CommentsSectionComponent,
    EventDetailShellComponent,
    EventActionsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpModule
  ],
  providers: [
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
