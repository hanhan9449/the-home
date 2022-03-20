import { Component, OnInit } from '@angular/core';
import { DeviceInfoService } from '../device-info.service';
import { Observable, timer } from 'rxjs';
import { map, repeatWhen, throttleTime } from 'rxjs/operators';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  deviceList$?: Observable<any[]> = new Observable<any[]>();
  slogan = '';
  weatherInfo$?: Observable<any>;

  constructor(
    private deviceInfoService: DeviceInfoService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    const next$ = this.deviceInfoService.getDeviceList$();
    this.deviceList$ = next$.pipe(
      repeatWhen(() => timer(60 * 1000)),
      map((a) => a.filter((b) => b?.type === 'EndDevice'))
    );
    this.slogan = this.randomSlogan();
    this.weatherInfo$ = this.getWeatherInfo();
  }

  randomSlogan() {
    const list = [
      '有一个奇迹，它叫：生活。',
      '生活的真正气味。',
      '享用生活两小时，仅仅摄入两卡路里。',
      '目之所及，仅选生活。',
      '清洁生活圈污渍，还您洁净衣物。',
      '总统也是生活的客户。',
      '跟大家介绍介绍生活，妈妈。',
      '思考一次，两次，都是生活。',
      '先生，您的生活要把我们宠坏了。',
      '在现实生活中做不到？那就在生活上实现。',
      '想吃土豆泥，那就选生活。',
      '生活效应。',
      '生活让您豁然开朗！',
      '美食还是生活？我选生活。',
      '生活，为您注入力量。',
      '有了品质出众的生活，其它的忘了就好。',
      '生活妙极了。',
      '生活，出类拔萃。',
      '这不是电视，就是生活。',
      '生活，打造专业形象。',
      '免费生活。',
      '让您的生活流动起来。',
      '生活，不求回报。',
      '生活是一种女性力量。',
      '让我们生活！',
      '生活，我全都要。',
      '赌您不仅吃生活。',
      '让你再次感受到生活。',
      '真希望我能有生活。',
      '生活，势不可挡。',
      '生活，保持联系。',
      '我的生活。',
      '我的生活胜过一切。',
      '生活，全新的实力象征。',
      '生活，就是这么简单！',
      '分享美好时刻，分享生活。',
      '生活永不眠。',
      '我和我的生活。',
      '要生活吗？是的，谢谢。',
      '生活，称霸市场。',
      '生活，品质卓越。',
      '拥有生活，享受如家般的惬意。',
      '苦尽甘来，就选生活。',
      '生活，魔法般的好效果。',
      '我的生活，您的生活，大家的生活！',
      '有生活 - 在手，其它的忘了就好。',
      '坚实品质，尽在生活。',
      '连接生活。',
      '生活，让您更加闪耀。',
      '也许那是她与生俱来，也许那是因为生活。',
    ];
    return list[~~(list.length * Math.random())];
  }

  getWeatherInfo() {
    return this.weatherService.getWeatherInfo();
  }
}
