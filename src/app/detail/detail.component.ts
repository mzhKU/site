import { Component, OnInit } from '@angular/core';
import { BOXES } from '../boxes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Box } from '../box';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  box: Box;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBox();
  }

  // Tour of heroes part 5, navigating to hero details:
  // The route.snapshot is a static image of the route
  // information shortly after the component was created.
  // The paramMap is a dictionary of route parameter
  // values extracted from the URL. The "id" key returns
  // the id of the hero to fetch.
  // Route parameters are always strings. The JavaScript
  // (+) operator converts the string to a number, which
  // is what a hero id should be.
  getBox(): void {
    const page = this.route.snapshot.params.page;
    this.box = BOXES[page];
  }
  // 'page' is defined as parameter in routing module Routes
  //
  // See also:
  // https://scotch.io/tutorials/handling-route-parameters-in-angular-v2


  goBack(): void {
    this.location.back();
  }

}
