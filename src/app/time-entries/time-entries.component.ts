import { Component, OnInit } from '@angular/core';
import { TimeEntriesDataService } from 'app/time-entries-data/time-entries-data.service';
import { ClientDataService } from 'app/client-data/client-data.service';
import { TimeEntry } from 'app/models/time-entry';
import { Client } from 'app/models/client';

@Component({
  selector: 'app-time-entries',
  templateUrl: './time-entries.component.html',
  styleUrls: ['./time-entries.component.css']
})
export class TimeEntriesComponent implements OnInit {

  private clients: Client[];
  private entries: TimeEntry[];
  private selectedClientId: number;

  constructor(
    private entriesData: TimeEntriesDataService,
    private clientData: ClientDataService
  ) { }

  ngOnInit() {
    this.clientData
      .getAll()
      .subscribe(clients => this.clients = clients);
    this.entriesData
      .getAll()
      .subscribe(entries => this.entries = entries);
  }

  finish(entry: TimeEntry) {
    this.entriesData
      .complete(entry)
      .subscribe(finis => {
        entry.toTime = finis.toTime;
      });
  }

  create() {
    this.entriesData
      .create(this.selectedClientId)
      .subscribe(entries => this.entries = entries);
  }

}
