import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private http = inject(HttpClient);

  sendEmailToFormSpree(formData: FormData) {
    return this.http.post('https://formspree.io/f/mldelokn', formData);
  }
}
