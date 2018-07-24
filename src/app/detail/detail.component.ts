import { Component, OnInit } from '@angular/core';
import { boxes } from '../boxes';

console.log(boxes[0]);

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  box = boxes[0];

  test = 'Detail Component';

  constructor() { }

  ngOnInit() {
  }

}
