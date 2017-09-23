import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCardComponent } from './login-card.component';

describe('LoginCardComponent', () => {
  let component: LoginCardComponent;
  let fixture: ComponentFixture<LoginCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCardComponent ],
      imports: [ FormsModule, HttpModule ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
