import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ToastModule,
    CommonModule
  ],
  providers: [MessageService],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: FormGroup;
  isLoading = false;
  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.isLoading=true;
      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        time: new Date().toLocaleString(),
      };

      emailjs
        .send(
          'service_g2iez3f',
          'template_5xfexa1',
          templateParams,
          '9E40dpnfNKAYCFBY8'
        )
        .then(() => {
            this.messageService.add({
              key: 't',
              severity: 'success',
              summary: 'Message Sent',
              detail: 'Your message has been sent successfully!',
            });
            this.isLoading=false;
            this.contactForm.reset();
          },
          (error) => {
            console.error('EmailJS Error:', error);
            this.messageService.add({
              key: 't',
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to send message. Please try again later.',
            });
            this.isLoading=false;
          }
        );
    } else {
      this.messageService.add({
        key: 't',
        severity: 'warn',
        summary: 'Incomplete Form',
        detail: 'Please fill all fields correctly.',
      });
      this.isLoading=false;
    }
  }
}
