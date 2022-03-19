const prefix = "zigbee2mqtt";
function j(...str: string[]) {
  return str.join("/");
}
export const Zigbee2MqttEnum = {
  DEVICES_LIST: j(prefix, "bridge/devices"),
  PERMIT_JOIN: j(prefix, "bridge/request/permit_join"),
  DEVICE_INFO: j(prefix, "+"),
  RESTART: j(prefix, "bridge/request/restart"),
  REMOVE: j(prefix, "bridge/request/device/remove"),
  RENAME: j(prefix, "bridge/request/device/rename"),
};
