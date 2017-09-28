import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { ReportEntry } from 'app/models/report-entry';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReportDataService {

  private options: RequestOptionsArgs = {
    withCredentials: true
  };
  baseUrl = 'http://localhost:5000/api/report'

  constructor(private http: Http) { }

  getReportData(clientId: number): Observable<ReportEntry> {
    return this.http
      .post(this.baseUrl, { id: clientId }, this.options)
      .map(response => response.json());
  }

}
