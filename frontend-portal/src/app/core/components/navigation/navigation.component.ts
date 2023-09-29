import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { user$ } from '../../stores/user.repository';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  
  user$ = user$;
  
  @Input() isCollapsed = false;
  isDrawerVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  drawerClose() {

  }

  logout() {

  }

}

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    // Angular Dependencies
    CommonModule,
    RouterModule,

    // UI Dependencies
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzDrawerModule,
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }