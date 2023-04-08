import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { mockData } from '../../../mock/data';
import { I18n } from '../../i18n';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @Input() screenWidth = 0;
  public lang?: string = I18n.lang;
  public visible: boolean = false;
  headerObj = mockData.header;
  searchKey?: String;
  routeUrl?: String;
  constructor(private router: Router, private message: NzMessageService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeUrl = event.url === '/' ? '/exhibition-component' : event.url.split('?')[0];
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
  toLogin() {
    this.message.create('error', `抱歉，登录页面建设中...`);
  }
  // visible控制菜单的显示与隐藏 - 数据双向绑定@input\@output
  switchMenu() {
    this.visible = !this.visible;
  }
  public changeLanguage() {
    I18n.setLanguage();
  }
}
