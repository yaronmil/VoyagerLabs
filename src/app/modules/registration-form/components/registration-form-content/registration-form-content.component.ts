import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

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
  constructor(private snackBar: MatSnackBar) { }
  hasError(fieldName: string) {
    const errors = this.registrationForm.get(fieldName).errors;
    return errors && errors.required;
  }
  ngOnInit() {
    this.subscription = this.registrationForm.valueChanges.subscribe(_ => {

      if (this.registrationForm.valid) {
        this.showMessage('All mandatory fields are valid');
      } else {
        this.snackBar.dismiss();
      }
    });
  }
  showMessage(message: string) {
    this.snackBar.open(message, 'success', {
      duration: 0,
    });
  }
  ngOnDestroy() {
    // release the subscription to observable on component unload
    this.subscription.unsubscribe();
  }

}
