
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TimeEntry } from 'app/models/time-entry';

@Injectable()
export class TimeEntriesDataService {

  private options: RequestOptionsArgs = {
    withCredentials: true
  };
  baseUrl = 'http://localhost:5000/api/entries'

  constructor(private http: Http) { }

  getAll() : Observable<TimeEntry> {
    return this.http
      .get(this.baseUrl, this.options)
      .map(response => response.json());
  }

  complete(id) : Observable<TimeEntry> {
    return this.http
      .post(`${this.baseUrl}/completions`, { id }, this.options)
      .map(response => response.json());
  }

  create(clientId): Observable<TimeEntry> {
    return this.http
      .post(this.baseUrl, { client: { id: clientId } }, this.options)
      .map(response => response.json());
  }

}
