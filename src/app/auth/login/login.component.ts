import {Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Credentials} from "../../models/credentials";

@Component({
  selector: 'app-connexion',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,

  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  loginForm = this.fb.group({
    nomUtil: ['', Validators.required],
    motPasse: ['', Validators.required]
  });

  parse(): Credentials{
    return <Credentials>{
      nomUtil: this.loginForm.value.nomUtil,
      motPasse: this.loginForm.value.motPasse
    }
  }

  login() {
    this.authService.login(this.parse()).subscribe(
      () => {
        if (this.authService.isAuthenticated()) {
          console.log('Login successful');
          this.router.navigate(['/']);
        }
      },
      () => {
        console.log('Login failed');
      }
    );
  }

  onSubmit() {
    this.login();
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }
}
