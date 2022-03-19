import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {DeviceInfoService} from "../device-info.service";
import {ServerService} from "../server.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  ]
})
export class HomeModule { }
