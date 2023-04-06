import { mockData } from '@/mock/data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.less'],
})
export class MenuMobileComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  public headerObj = mockData.header;
  public routeUrl?: String;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeUrl = event.url === '/' ? '/exhibition-component' : event.url;
        console.log(this.routeUrl);
      }
    });
  }
  ngOnInit(): void {}
  switchRoute(url: string, openType: number | null): void {
    if (openType === 1) {
      this.router.navigate([url]);
    } else if (openType === null) {
      window.open(url, '_blank');
    }
  }
  switchMenu(visible: boolean) {
    this.visibleChange.emit(visible);
  }
}
