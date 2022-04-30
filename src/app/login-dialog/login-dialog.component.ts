import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  email: string
  password: string
  constructor(private us: UsersService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.email || !this.password)
      return
    let login = this.us.login(this.email, this.password)
    location.reload()
  }


}
