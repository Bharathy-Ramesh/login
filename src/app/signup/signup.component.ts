import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup} from '@angular/forms';
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
      'password': new FormControl()
    });
   }

  ngOnInit(): void {
  }

}
