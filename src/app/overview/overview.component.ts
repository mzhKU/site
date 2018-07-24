import { Component, OnInit } from '@angular/core';
import { boxes } from '../boxes';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  boxes = boxes;

  constructor() { }

  ngOnInit() {
  }

}
