import { Component, OnInit } from '@angular/core';
import { FlexItemComponent } from '../flex-item/flex-item.component';

@Component({
  selector: 'app-flex-area',
  templateUrl: './flex-area.component.html',
  styleUrls: ['./flex-area.component.css']
})
export class FlexAreaComponent implements OnInit {

  constructor() { }

  items: FlexItemComponent[];

  ngOnInit() {
    const items = 3;
    for (let i = 0; i < items; i++) {
      this.items.push(new FlexItemComponent('Item' + i));
    }
  }

}
