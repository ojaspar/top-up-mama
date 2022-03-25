import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading: boolean = false;
  hasSixCharacter: boolean = false;
  hasSpecial: boolean = false;
  hasUppercase: boolean = false;
  hasNumber: boolean = false;
  hasLowerCase: boolean = false;
  isEqual: boolean = false;
  msg: string = 'New Password is required';
  msg2: string = 'Confirm Password is required';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerFormMethod();
  }

  registerFormMethod() {
    this.registerForm = this.fb.group({
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
    let password = this.registerForm.value['password'],
      password2 = this.registerForm.value['confirmPassword'];
    if (password === password2) {
      this.isEqual = true;
    }
    if (password !== password2) {
      this.msg2 = 'Both Password does not match';
    }
  }
  passwordStrengthChecker() {
    let value = this.registerForm.value['password'];
    this.hasSixCharacter = value.length >= 6;
    this.hasNumber = /\d/.test(value);
    this.hasUppercase = /[A-Z]/.test(value);
    this.hasSpecial = /[!@#\\$%\\^\\&*\\)\\(+=._-]/.test(value);
    this.hasLowerCase = /[a-z]/.test(value);

    if (
      value ||
      !this.hasNumber ||
      !this.hasUppercase ||
      !this.hasSpecial ||
      !this.hasLowerCase
    )
      this.msg = 'The password should contain all characters listed below';
  }
  handleLogin(event: boolean) {}
}
