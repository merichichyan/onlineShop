import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    { company: 'company1', name: 'name1', surname: 'surname1', age: 20, gender: 'male', email: 'admin1@gmail.com', password: 'password', role: 'admin', token: "token1" },
    { company: 'company2', name: 'name2', surname: 'surname2', age: 25, gender: 'female', email: 'user1@gmail.com', password: 'password', role: 'user', token: "token2" },
    { company: 'company3', name: 'name3', surname: 'surname3', age: 38, gender: 'male', email: 'admin2@gmail.com', password: 'password', role: 'admin', token: "token3" },
    { company: 'company4', name: 'name4', surname: 'surname4', age: 40, gender: 'male', email: 'user2@gmail.com', password: 'password', role: 'user', token: "token4" },
    { company: 'company5', name: 'name5', surname: 'surname5', age: 21, gender: 'male', email: 'admin3@gmail.com', password: 'password', role: 'admin', token: "token5" },
    { company: 'company6', name: 'name6', surname: 'surname6', age: 50, gender: 'female', email: 'user3@gmail.com', password: 'password', role: 'user', token: "token6" },
    { company: 'company7', name: 'name7', surname: 'surname7', age: 67, gender: 'male', email: 'admin4@gmail.com', password: 'password', role: 'admin', token: "token7" },
    { company: 'company8', name: 'name8', surname: 'surname8', age: 27, gender: 'female', email: 'user4@gmail.com', password: 'password', role: 'user', token: "token8" },
    { company: 'company9', name: 'name9', surname: 'surname9', age: 88, gender: 'female', email: 'admin5@gmail.com', password: 'password', role: 'admin', token: "token9" },
    { company: 'company10', name: 'name10', surname: 'surname10', age: 64, gender: 'male', email: 'user5@gmail.com', password: 'password', role: 'user', token: "token10" },
  ]
  constructor() { }


  login(email: string, password: string): boolean {
    let user = this.users.find(function (u) {
      return (u.email == email && u.password == password)
    })
    if (user) {
      localStorage.setItem("token", user.token)
      return true
    }
    return false
  }

  getUser(): any {
    let token = localStorage.getItem("token")
    if (token) {
      return this.users.find(function (u) {
        return u.token == token
      })
    }
    return false
  }

}
