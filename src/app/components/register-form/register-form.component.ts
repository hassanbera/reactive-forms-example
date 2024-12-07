import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb : FormBuilder) {
    // Reactive Formu Oluştur
    this.registerForm = this.fb.group({
      name: ['', Validators.required], // İsim zorunlu
      email: ['', [Validators.required, Validators.email]], // Email zorunlu ve format kontrolü
      password: ['', [Validators.required, Validators.minLength(6)]] // Şifre zorunlu ve minimum 6 karakter
    });
    
  }

  // Formu Gönder
  onSubmit() {
   if(this.registerForm.valid) {
    console.log('Form Data: ',this.registerForm.value);
  }
  else{
    console.log('Form is invalid');
  }
}
}
