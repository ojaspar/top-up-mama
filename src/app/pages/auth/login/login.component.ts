import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerFormMethod();
  }

  registerFormMethod(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            `^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$%?#!_\`!^&*+={}|[\\]\\/\\\\';:,<.>~"?])[a-zA-Z0-9@$%?#!_\`!^&*()+={}|[\\]\\/\\\\\\';:,<.>~"?]{8,}$`
          ),
        ]),
      ],
    });
  }

  handleLogin(event: boolean) {}
}
