import { client } from "./mqtt";
import { Zigbee2MqttEnum } from "./zigbee2mqtt.enum";
import { BehaviorSubject } from "rxjs";
import match from "mqtt-match";

class SmartHomeService {
  private deviceList$ = new BehaviorSubject<any[]>([]);
  private infoMap = new Map<string, any>();
  constructor() {
    client.on("connect", () => {
      client.subscribe(Zigbee2MqttEnum.DEVICES_LIST);
      client.subscribe(Zigbee2MqttEnum.DEVICE_INFO);
    });
    client.on("message", (topic, message) => {
      const message1 = JSON.parse(message.toString());

      if (match(Zigbee2MqttEnum.DEVICES_LIST, topic)) {
        this.deviceList$.next(JSON.parse(message.toString()) as any);
      }
      if (match(Zigbee2MqttEnum.DEVICE_INFO, topic)) {
        console.debug(topic, message1);
        this.infoMap.set(topic.split("/")[1], message1);
      }
    });
  }
  getDeviceList() {
    return this.deviceList$.getValue();
  }
  getDeviceInfo(name: string) {
    return this.infoMap.get(name);
  }
}

export const defaultSmartHomeService = new SmartHomeService();
