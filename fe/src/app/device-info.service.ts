import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  constructor(
    private serverService: ServerService,
    private httpClient: HttpClient
  ) {}

  getDeviceList$() {
    const url = this.serverService.geneServerUrl('devices');
    const res$ = this.httpClient.get<any[]>(url);
    return res$;
  }

  getDeviceInfo$(name: string) {
    const url = this.serverService.geneServerUrl('devices', name);
    const res$ = this.httpClient.get<Record<string, any>>(url);
    return res$;
  }
}
