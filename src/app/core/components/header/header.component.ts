import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { UserLogged as User } from '../../model/User.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUserInfo();
  }
  logout() {
    this.userService.logout();
  }
}
