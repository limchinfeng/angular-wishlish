import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createInvaslidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvaslidDomainValidator(['gmail.com','yahoo.com']);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(5)])
  });


  submitForm() {

    console.log(this.contactForm.valid)
  //   if (this.senderNameControl.dirty) {
  //     alert('you changed the name field');
  //   }
  }
}
