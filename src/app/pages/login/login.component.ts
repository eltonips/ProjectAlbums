import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router:Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

  submit() {
    console.log(this.loginForm.value);
    if (this.loginForm.value.email && this.loginForm.value.password){
      localStorage.setItem('username', this.loginForm.value.email);
      localStorage.setItem('password', this.loginForm.value.password);
      alert('Login realizado com sucesso!');  
      this.router.navigate(['/principal']);
    } else {
      alert('Por favor preencha todos os campos!');  
    }
  }
}
