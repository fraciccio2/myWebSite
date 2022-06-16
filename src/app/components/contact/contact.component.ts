import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public formControlNameUser = 'name';
  private formControlUser = new FormControl('', Validators.required);
  public formControlNameMail = 'mail';
  private formControlMail = new FormControl('', Validators.required);
  public formControlNameMessage = 'message';
  private formControlMessage = new FormControl('', Validators.required);
  formGroup = new FormGroup({
    [this.formControlNameUser]: this.formControlUser,
    [this.formControlNameMail]: this.formControlMail,
    [this.formControlNameMessage]: this.formControlMessage
  });

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
  }

  onSubmit(input: Record<string, string>) {
    this.contactService.postMessage(input).subscribe(response => {
        location.href = 'https://mailthis.to/confirm';
      },
      error => {
        console.warn(error.responseText);
        console.log({error});
      });
  }

}
