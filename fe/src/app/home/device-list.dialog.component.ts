import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface DialogData {
  deviceList$: Observable<Array<any>>;
}

@Component({
  selector: 'device-list-dialog',
  templateUrl: 'device-list.dialog.component.html',
})
export class DeviceListDiaLog implements OnInit {
  deviceList$?: Observable<Array<any>>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  ngOnInit(): void {
    this.deviceList$ = this.data.deviceList$.pipe(
      map((a) => a.filter((b) => b.type !== 'Coordinator'))
    );
  }
}
