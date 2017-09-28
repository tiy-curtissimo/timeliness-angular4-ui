import { Client } from './client';
import { TimeWatcher } from './time-watcher';

export function entryFactory(entry: TimeEntry) {
  const newEntry = new TimeEntry();
  newEntry.id = entry.id;
  newEntry.watcher = entry.watcher;
  newEntry.client = entry.client;
  newEntry.fromTime = entry.fromTime;
  newEntry.toTime = entry.toTime;
  return newEntry;
}

export class TimeEntry {
  id: number;
  watcher: TimeWatcher;
  client: Client;
  fromTime: number;
  toTime: number;

  fromFormatted(): string {
    if (!this.fromTime) {
      return '';
    }
    return formatDate(new Date(this.fromTime));
  }

  toFormatted(): string {
    if (!this.toTime) {
      return '';
    }
    return formatDate(new Date(this.toTime));
  }
}

function formatDate(d) {
  const hours = d.getHours();
  const minutes = ('00' + d.getMinutes()).substr(-2);
  const indicator = hours > 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 ? hours % 12 : '12';
  return `${hours12}:${minutes} ${indicator}`;
}
