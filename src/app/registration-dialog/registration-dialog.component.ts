import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {

  user:User = new User
  roleTypes: string[] = ['admin', 'user'];
  genders: string[] = ['male', 'female']
  constructor() { }

  ngOnInit(): void {
  }

}
