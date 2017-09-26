import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../../services/app-http.service';

@Component({
  selector: 'cd-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
  providers: [AppHttpService]
})
export class CommentsSectionComponent implements OnInit {

  items: any;

  constructor(private _appHttpService: AppHttpService) {
    this.callHttpService();
  }

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
