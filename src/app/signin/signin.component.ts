import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userForm:FormGroup;
  hide:boolean = true;
  constructor() {
    this.userForm = new FormGroup({
      'username': new FormControl(),
      'password': new FormControl()
    });
   }
  ngOnInit(): void {
  }

}
