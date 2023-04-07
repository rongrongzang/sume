import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute) {
    this.selectedTab = this.route.snapshot.queryParams['key'];
  }
  toDetail(exhibitorNo: string, storeNo: string) {
    window.open(
      `https://expo.sumecdtx.com/pages/businessDetail.html?exhibitionMeetNo=${exhibitorNo}&storeNo=${storeNo}`
    );
  }
}
