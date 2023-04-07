import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { mockData } from '../../../mock/data';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.less'],
})
export class BusinessListComponent {
  public hotProductsList: any[] = mockData.hotProductsList;
  public storeList: any[] = mockData.business.storeList; //品牌名录
  public brandList: any[] = mockData.business.brandList; //参展商名录
  public current: number = 1;
  public total: number = 338;
  public selectedTab: number = 0;
  constructor(private route: ActivatedRoute, private message: NzMessageService) {
    this.selectedTab = this.route.snapshot.queryParams['key'];
  }
  toMore() {
    this.message.create('error', `抱歉，数据建设中...`);
    // window.open(
    //   `https://expo.sumecdtx.com/pages/businessDetail.html?exhibitionMeetNo=${exhibitorNo}&storeNo=${storeNo}`
    // );
  }
  toDetail(brandName: string) {
    this.message.create('error', `抱歉，“${brandName}”详情页,建设中...`);
    // window.open(
    //   `https://expo.sumecdtx.com/pages/businessDetail.html?exhibitionMeetNo=${exhibitorNo}&storeNo=${storeNo}`
    // );
  }
}
