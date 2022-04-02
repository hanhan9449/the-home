import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DeviceInfoService } from '../device-info.service';
import { ServerService } from '../server.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { DeviceListDiaLog } from './device-list.dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { HumanDetectDiaLog } from './human-detect.dialog.component';

@NgModule({
  declarations: [HomeComponent, DeviceListDiaLog, HumanDetectDiaLog],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
  ],
  providers: [],
})
export class HomeModule {}
