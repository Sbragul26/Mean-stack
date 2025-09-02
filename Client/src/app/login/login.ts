import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service'; // Assume this service exists

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          // Handle successful login (e.g., navigate to dashboard)
        },
        error: (error) => {
          console.error('Login failed', error);
          // Handle login error (e.g., show error message)
        }
      });
    }
  }

  loginWithGoogle() {
    this.authService.googleSignIn().subscribe({
      next: (response) => {
        console.log('Google login successful', response);
        // Handle successful Google login
      },
      error: (error) => {
        console.error('Google login failed', error);
        // Handle Google login error
      }
    });
  }

  loginWithGithub() {
    this.authService.githubSignIn().subscribe({
      next: (response) => {
        console.log('GitHub login successful', response);
        // Handle successful GitHub login
      },
      error: (error) => {
        console.error('GitHub login failed', error);
        // Handle GitHub login error
      }
    });
  }
}