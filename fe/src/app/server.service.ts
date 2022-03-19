import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {retry} from "rxjs/operators";

// 用来存储后端服务地址，以及侦测当前是在本地环境还是远程环境
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  readonly defaultLocalServerPath = 'http://localhost:12388'
  readonly defaultRemoteServerPath = 'http://10.0.0.9:12388'
  private serverPath = this.defaultLocalServerPath

  constructor(private httpClient: HttpClient) {
  }

  setCustomServerUrl(str: string) {
    this.serverPath = str
  }


  detectEnvironment() {
    const res$ = this.httpClient.get(this.geneServerUrl('hi'))
    res$.pipe(retry(2)).subscribe(() => {
      console.info('server 使用本地环境成功')
    }, () => {
      console.error('server 侦测到非本地环境，使用远程环境')
      this.serverPath = this.defaultRemoteServerPath
    })
  }

  geneServerUrl(...strs: string[]) {
    return [this.serverPath, ...strs].join('/')
  }


}
