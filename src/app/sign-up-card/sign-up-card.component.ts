import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-sign-up-card',
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.css']
})
export class SignUpCardComponent implements OnInit {

  private username = '';
  private password = '';
  private error: string;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  get disableButton() {
    return this.username.length === 0 ||
           this.password.length === 0;
  }

  submitSignup() {
    this.auth
      .register(this.username, this.password)
      .subscribe(signedUp => {
        if (signedUp) {
          this.error = '';
          this.router.navigate(['/main']);
        } else {
          this.error = 'Could not sign up with those credentials';
        }
      });
  }

}
