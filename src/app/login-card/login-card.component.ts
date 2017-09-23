import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

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

  submitCredentials() {
    this.auth
      .login(this.username, this.password)
      .subscribe(
        loggedIn => {
          if (loggedIn) {
            this.error = '';
            this.router.navigate(['/main']);
          } else {
            this.error = 'Could not log in with those credentials';
          }
        }
      );
  }

}
