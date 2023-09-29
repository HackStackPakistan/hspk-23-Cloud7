import { Component, OnInit } from '@angular/core';
import { auth$ } from 'src/app/core/stores/auth.repository';
import { user$ } from 'src/app/core/stores/user.repository';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  user$ = auth$;

  constructor() { }

  ngOnInit(): void {
  }

}
