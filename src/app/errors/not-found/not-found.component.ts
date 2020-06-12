import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  timeRedirect = 15;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.timeRedirectOut();
    }, 1000);
  }

  timeRedirectOut(): void {
    !this.timeRedirect ? this.goToHome() : (this.timeRedirect -= 1);
  }

  goToHome(): void {
    this.router.navigate(['/photos']);
  }
}
