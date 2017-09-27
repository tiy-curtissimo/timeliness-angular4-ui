import { Client } from './client';
import { TimeWatcher } from './time-watcher';

export class TimeEntry {
  id: number;
  watcher: TimeWatcher;
  client: Client;
  fromTime: Date;
  toTime: Date;
}
