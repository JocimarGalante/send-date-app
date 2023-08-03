import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Info } from './info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  info = new Info();

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.info.date = new Date().toISOString()
  }

  send() {
    this.apiService.sendDate(this.info)
      .subscribe(data => {
        console.log(data)
      })
  }
}
