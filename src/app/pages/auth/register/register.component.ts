import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;
  hasSixCharacter: boolean = false;
  hasSpecial: boolean = false;
  hasUppercase: boolean = false;
  hasNumber: boolean = false;
  hasLowerCase: boolean = false;
  isEqual: boolean = false;
  msg: string = 'New Password is required';
  msg2: string = 'Confirm Password is required';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  loginFormMethod() {
    this.loginForm = this.fb.group({
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            `^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$%?#!_\`!^&*+={}|[\\]\\/\\\\';:,<.>~"?])[a-zA-Z0-9@$%?#!_\`!^&*()+={}|[\\]\\/\\\\\\';:,<.>~"?]{8,}$`
          ),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      confirmPassword: ['', Validators.required],
    });
  }

  compareBothPasswords() {
    let password = this.loginForm.value['password1'],
      password2 = this.loginForm.value['password2'];
    if (password === password2) {
      this.isEqual = true;
    }
    if (password !== password2) {
      this.msg2 = 'Both Password does not match';
    }
  }
}
