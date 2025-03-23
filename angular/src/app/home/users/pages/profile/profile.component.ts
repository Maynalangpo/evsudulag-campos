import { Component } from '@angular/core';
import { UserModel } from '../../model/UserModel';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // user: UserModel | null;

  // constructor(private userService: UserService) {
  //   this.user = this.userService.getLoggedInUser();
  // }
}
