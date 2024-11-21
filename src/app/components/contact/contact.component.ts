import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from './contact.service';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgbTooltip],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private contactService = inject(ContactService);
  private toastrService = inject(ToastrService);

  formControlNameNome = 'name';
  formControlNameEmail = 'email';
  formControlNameMessage = 'message';
  contactForm = new FormGroup({
    [this.formControlNameNome]: new FormControl('', Validators.required),
    [this.formControlNameEmail]: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    [this.formControlNameMessage]: new FormControl('', Validators.required),
  });

  sendMessage() {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append(
        'name',
        this.contactForm.get(this.formControlNameNome)?.value
      );
      formData.append(
        'email',
        this.contactForm.get(this.formControlNameEmail)?.value
      );
      formData.append(
        'message',
        this.contactForm.get(this.formControlNameMessage)?.value
      );
      this.contactService.sendEmailToFormSpree(formData).subscribe({
        next: () => {
          this.contactForm.patchValue({
            [this.formControlNameMessage]: '',
            [this.formControlNameEmail]: '',
            [this.formControlNameNome]: '',
          });
          this.toastrService.success('Message Sent Successfully');
        },
        error: (error) => {
          this.toastrService.error('Error While Sending');
          console.error(error);
        },
      });
    }
  }
}
