import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../../services/app-http.service';

@Component({
  selector: 'cd-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss'],
  providers: [AppHttpService]
})
export class NavMainComponent implements OnInit {

  items: any;
  
  constructor(private _appHttpService: AppHttpService) {
    this.callHttpService();
  }
  
  // call service that holds user data
  callHttpService() {
    this._appHttpService.requestData('./assets/data/user-data.json')
    .subscribe(
      data => {this.items = data},
      error => console.log(error),
      () => console.log('subscribe complete')
    );
  }

  ngOnInit() {
  }

}
