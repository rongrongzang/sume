import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { mockData } from '../mock/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public screenWidth: any;
  headerObj = mockData.header;
  routeUrl?: String;
  constructor(private router: Router) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: object) {
    this.screenWidth = window.innerWidth;
  }
}
