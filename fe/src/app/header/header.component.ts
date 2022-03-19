import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoutePathEnum} from "../app-routing.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() triggerSidebar = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

}
