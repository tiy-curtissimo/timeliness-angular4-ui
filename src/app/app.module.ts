import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationCtaComponent } from './registration-cta/registration-cta.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { SignUpCardComponent } from './sign-up-card/sign-up-card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { LoggedInGuard } from './logged-in.guard';
import { AuthenticationService } from './authentication/authentication.service';
import { TimeEntriesComponent } from './time-entries/time-entries.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ReportComponent } from './report/report.component';
import { TimeEntriesDataService } from 'app/time-entries-data/time-entries-data.service';
import { ReportDataService } from 'app/report-data/report-data.service';
import { ClientDataService } from 'app/client-data/client-data.service';
import { FancyDropDownComponent } from './fancy-drop-down/fancy-drop-down.component';


const appRoutes: Routes = [
  { path: 'login',  component: LoginPageComponent },
  { path: 'signup', component: SignUpCardComponent },
  {
    path: 'main',
    component: MainScreenComponent,
    canActivate: [LoggedInGuard],
    children: [
      { path: 'clients', component: ClientsListComponent },
      { path: 'entries', component: TimeEntriesComponent },
      { path: 'report',  component: ReportComponent },
      { path: '', redirectTo: 'entries', pathMatch: 'full' }
    ]
  },
  { path: '',  redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationCtaComponent,
    LoginCardComponent,
    SignUpCardComponent,
    LoginPageComponent,
    MainScreenComponent,
    TimeEntriesComponent,
    ClientsListComponent,
    ReportComponent,
    FancyDropDownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoggedInGuard,
    AuthenticationService,
    ClientDataService,
    ReportDataService,
    TimeEntriesDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
