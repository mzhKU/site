import { Component, OnInit } from '@angular/core';
import { boxes } from '../boxes';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

  constructor() { }

  boxes = boxes;

  ngOnInit() {
  }


}
