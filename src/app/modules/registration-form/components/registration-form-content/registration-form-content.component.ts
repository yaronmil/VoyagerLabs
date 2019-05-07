import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration-form-content',
  templateUrl: './registration-form-content.component.html',
  styleUrls: ['./registration-form-content.component.css']
})
export class RegistrationFormContentComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    familyName: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    birthDate: new FormControl('', [Validators.required])
  })
  constructor() { }
  hasError(fieldName: string) {
    const errors = this.registrationForm.get(fieldName).errors;
    return errors && errors.required;
  }
  ngOnInit() {
    this.subscription = this.registrationForm.valueChanges.subscribe(_ => {

      if (this.registrationForm.valid) {
        alert();
      }
    });
  }
  ngOnDestroy() {
    // release the subscription to observable on component unload
    this.subscription.unsubscribe();
  }

}
