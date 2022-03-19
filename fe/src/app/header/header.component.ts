import { Component, OnInit } from '@angular/core';
import {RoutePathEnum} from "../app-routing.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routesList = RoutePathEnum

  constructor() { }

  ngOnInit(): void {
  }

}
