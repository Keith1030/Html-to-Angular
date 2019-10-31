import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() outputData: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchData') searchData: ElementRef;
  sentData = '123';

  constructor(private http: HttpClient) {  }

  ngOnInit() {
  }

  search() {
    // const test = this.searchData.nativeElement.value;
    // console.log('ViewChild : ' + test);
    // console.log('ngModle : ' + this.sentData);
    this.http.post('http://localhost:3000/post', {}).subscribe(
      (value) => {
        console.log(value);
        this.outputData.emit(value['body']['dataList']);
      }, (err) => {
        console.log(err);
      }, () => {
        console.log('complate');
      }
      );
  }
}
