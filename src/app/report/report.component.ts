import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'app/client-data/client-data.service';
import { Client } from 'app/models/client';
import { ReportDataService } from 'app/report-data/report-data.service';
import { ReportEntry } from 'app/models/report-entry';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  private clients: Client[];
  private selectedClientId: number;
  private entries: ReportEntry[];

  constructor(
    private clientData: ClientDataService,
    private reportData: ReportDataService
  ) {}

  ngOnInit() {
    this.clientData
      .getAll()
      .subscribe(clients => this.clients = clients);
  }

  generate() {
    this.reportData
      .getReportData(this.selectedClientId)
      .subscribe(data => this.entries = data);
  }

}
