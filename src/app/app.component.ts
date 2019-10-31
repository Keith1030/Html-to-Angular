import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = 'HtmlToAngular';
  dataDetail = [];

  getData(data: any) {
    console.log(data);
    this.data = data;
    this.dataDetail = data;
  }
  trackByFn(index, item) {
    return item.id;
  }
}
