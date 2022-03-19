import {Component, OnInit} from '@angular/core';
import {DeviceInfoService} from "../device-info.service";
import {Observable, timer} from "rxjs";
import {map, repeatWhen} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  deviceList$?: Observable<any[]> = new Observable<any[]>();

  constructor(private deviceInfoService: DeviceInfoService) {
  }

  ngOnInit(): void {
    const next$ = this.deviceInfoService.getDeviceList$()
    this.deviceList$ = next$.pipe(repeatWhen(() => timer(60 * 1000)),map((a) => a.filter(b => b?.type === 'EndDevice')))
  }

}
