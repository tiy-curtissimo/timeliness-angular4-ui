import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AppComponent } from './app.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { RegistrationCtaComponent } from './registration-cta/registration-cta.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginCardComponent,
        RegistrationCtaComponent
      ],
      imports: [
        FormsModule,
        HttpModule
      ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
