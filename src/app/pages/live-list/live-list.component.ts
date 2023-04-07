import { Component } from '@angular/core';
import { mockData } from '../../../mock/data';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.less'],
})
export class LiveListComponent {
  public tabList: any[] = mockData.tv.tabList; //参展商名录
  public selectedTab: number = 0;
  toDetail(platformRoomNo: string) {
    window.open(
      `https://sts.sumecdtx.com/pages/live.html?roomNo=${platformRoomNo}&uid=7AE5EBBBC2A146CFB41DC4452B58EC81`
    );
  }
}
