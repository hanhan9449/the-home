import { Component } from '@angular/core';
import {RoutePathEnum} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe';
  routesList = RoutePathEnum
}
