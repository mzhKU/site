import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  boxes = ['Ueber das Sitehaus',
           'Im Angebot',
           'Verwendete Technik'];

  constructor() { }

  ngOnInit() {
  }

}
