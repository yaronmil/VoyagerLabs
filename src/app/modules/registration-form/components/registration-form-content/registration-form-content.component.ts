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

// will hold a referance to an observable
  subscription: Subscription;

  // the registration form object
  registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    familyName: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    birthDate: new FormControl('', [Validators.required])
  });

  // the snack bar will show a success message
  constructor(private snackBar: MatSnackBar) { }

  // function for checking if a field is valid
  hasError(fieldName: string) {
    const errors = this.registrationForm.get(fieldName).errors;
    return errors && errors.required;
  }
  ngOnInit() {

    // register to on value change on the form object
    this.subscription = this.registrationForm.valueChanges.subscribe(_ => {
      if (this.registrationForm.valid) {
        this.showMessage('All mandatory fields are valid');
      } else {
        this.snackBar.dismiss();
      }
    });
  }

  // this will be calld when all mandatory fileds are valid
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
