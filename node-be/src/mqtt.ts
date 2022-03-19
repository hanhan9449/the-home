import { connect } from "mqtt";
import { env } from "./utils/env";

export const client = connect(env.MQTT_BROKER_HOST as string);
