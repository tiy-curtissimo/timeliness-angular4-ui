import { Injectable } from '@angular/core';
import { RequestOptionsArgs, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Injectable()
export class ClientDataService {

  private options: RequestOptionsArgs = {
    withCredentials: true
  };
  private baseUrl = 'http://localhost:5000/api/clients';

  constructor(private http: Http) { }

  getAll(): Observable<Client[]> {
    return this.http
      .get(this.baseUrl, this.options)
      .map(response => response.json());
  }

  create(client: Client): Observable<Client[]> {
    return this.http
      .post(this.baseUrl, client, this.options)
      .map(response => response.json());
  }

  update(client: Client): Observable<Client> {
    return this.http
      .put(`${this.baseUrl}/${client.id}`, client, this.options)
      .map(response => response.json());
  }

  activate(client: Client): Observable<Client> {
    return this.http
      .post(`${this.baseUrl}/${client.id}/activations`, client, this.options)
      .map(response => response.json());
  }

  deactivate(client: Client): Observable<Client> {
    return this.http
      .post(`${this.baseUrl}/${client.id}/deactivations`, client, this.options)
      .map(response => response.json());
  }

}
