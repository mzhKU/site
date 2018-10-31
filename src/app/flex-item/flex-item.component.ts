import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-item',
  templateUrl: './flex-item.component.html',
  styleUrls: ['./flex-item.component.css']
})
export class FlexItemComponent implements OnInit {

  i: string;

  constructor(
    private id: string
  ) { }

  ngOnInit() {
    this.i = this.id;
  }

}
