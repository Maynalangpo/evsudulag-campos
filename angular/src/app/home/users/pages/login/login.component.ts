import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm: FormGroup;

constructor(private fb: FormBuilder, private userService: UserService, private router: Router){
  this.loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })
}

get username(){
  return this.loginForm.get('username');
}
get password(){
  return this.loginForm.get('password');
}
loginError: string = '';
onLogin() {

  if (this.loginForm.invalid) {
    this.loginError = 'Please enter valid credentials.';
    return;
  }

  this.userService.userLogin(this.loginForm.value).subscribe({
    next: (data) => {
      if (data?.user) {
        this.router.navigate(['/home/dashboard']);
        this.loginError = '';
      }
    },
    error: (err) => {
      if (err.status === 401) {
        this.loginError = 'Invalid username or password.';
      } else {
        this.loginError = 'Something went wrong. Please try again.';
      }
    }
  });

  // const { username, password } = this.loginForm.value;
  // if(this.userService.validate(username, password))
  // {
  //   this.router.navigate(['/home/profile']);
  // } else {
  //   console.log('error');
  // }
}

}
