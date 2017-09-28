
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TimeEntry, entryFactory } from 'app/models/time-entry';

@Injectable()
export class TimeEntriesDataService {

  private options: RequestOptionsArgs = {
    withCredentials: true
  };
  private baseUrl = 'http://localhost:5000/api/entries';

  constructor(private http: Http) { }

  getAll() : Observable<TimeEntry[]> {
    return this.http
      .get(this.baseUrl, this.options)
      .map(response => response.json())
      .map(entries => entries.map(entryFactory));
  }

  complete(entry: TimeEntry) : Observable<TimeEntry> {
    const id = entry.id;
    return this.http
      .post(`${this.baseUrl}/completions`, { id }, this.options)
      .map(response => response.json())
      .map((entry: TimeEntry) => entryFactory(entry));
  }

  create(clientId): Observable<TimeEntry[]> {
    return this.http
      .post(this.baseUrl, { client: { id: clientId } }, this.options)
      .map(response => response.json())
      .map(entries => entries.map(entryFactory));
  }

}
