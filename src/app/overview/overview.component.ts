import { Component, OnInit } from '@angular/core';
import { BOXES } from '../boxes';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  boxes = BOXES;
  keys: string[];

  constructor() { }

  ngOnInit() {
    this.keys = Object.keys(this.boxes);
  }

}
