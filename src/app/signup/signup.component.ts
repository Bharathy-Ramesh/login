import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signform:FormGroup;
  hide:boolean = true;
  constructor() {
    this.signform = new FormGroup({
      'name': new FormControl(),
      'password': new FormControl(),
      'cpassword': new FormControl(),
      'email': new FormControl('', [Validators.required, Validators.email])     
    });
   }
   getErrorMessage() {
     if (this.signform.controls.email.hasError('required')) {
       return 'You must enter a value';
     }
 
     return this.signform.controls.email.hasError('email') ? 'Not a valid email' : '';
   }
  ngOnInit(): void {
    console.log(this.signform);
  }
  SignUP(value:any){
    console.log("check",value);
  }

}
