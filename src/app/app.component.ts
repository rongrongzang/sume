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
  switchRoute(url: string, openType: number | null): void {
    this.routeUrl = url;
    if (openType === 1) {
      let _url =
        url
          .split('/')[2]
          .split('.')[0]
          .replace(/[A-Z]/g, (str) => {
            return '-' + str.toLowerCase();
          }) + '-component';
      this.router.navigate(['/' + _url]);
    } else if (openType === null) {
      window.open(url, '_blank');
    }
  }
}
