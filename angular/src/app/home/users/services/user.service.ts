import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { UserDetail } from '../mock/UserDetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private loggedInUser: UserModel | null = null;

  validate(username: string, password: string) : boolean {
    const user = UserDetail.find(u => u.username === username && u.password === password);

    if(user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  getLoggedInUser(): UserModel | null {
    return this.loggedInUser;
  }
}
