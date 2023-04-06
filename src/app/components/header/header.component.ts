import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { mockData } from '../../../mock/data';
import { I18n } from '../../i18n';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  @Input() screenWidth = 0;
  headerObj = mockData.header;
  searchKey?: String;
  routeUrl?: String;
  constructor(private router: Router) {}

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

  public changeLanguage() {
    I18n.setLanguage();
  }
}
