import { Component, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {
  @Input() inputData: string;
  showData: string;

  constructor(private route: ActivatedRoute) { console.log('constructor'); }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log('inputData = ' + this.inputData);
    this.showData = 'Child ' + this.inputData;
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.route.snapshot.params['id']);
  }

}
