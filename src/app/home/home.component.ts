import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //username = '';

  constructor(
    private router: Router
  ) { }

  /* onChange(value) {
    this.username = value;
  } */

  /* submit() {
    this.githubService.getByUsername(this.username)
      .subscribe(
        () => this.router.navigateByUrl('/events'),
      );
      } */

}
