import { Component, OnInit } from '@angular/core';
import { FlexAreaComponent } from '../flex-area/flex-area.component';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

  flexText = 'Flexbox Property Area';

  constructor() { }

  ngOnInit() {
  }

}
