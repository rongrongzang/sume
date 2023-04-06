import { Component, Input } from '@angular/core';

interface Item {
  id: string;
  name: string;
  url: string;
  urlM: string;
}

@Component({
  selector: 'app-side-boxs',
  templateUrl: './side-boxs.component.html',
  styleUrls: ['./side-boxs.component.less'],
})
export class SideBoxsComponent {
  @Input() screenWidth = 0;
  public sideList: Item[] = [
    {
      id: '1',
      name: '发布需求',
      url: 'https://cdn.sumecdtx.com/dtx_exhibition/assets/public/requirements1.png',
      urlM: 'https://cdn.sumecdtx.com/dtx_exhibition/assets/public/mobileRequirements.png',
    },
    {
      id: '2',
      name: '贸易服务',
      url: 'https://cdn.sumecdtx.com/dtx_exhibition/assets/public/serviceLogo1.png',
      urlM: 'https://cdn.sumecdtx.com/dtx_exhibition/assets/public/mobile_serviceLogo.png',
    },
    {
      id: '3',
      name: '分享',
      url: 'https://cdn.sumecdtx.com/dtx_exhibition/assets/common/share.png',
      urlM: 'https://cdn.sumecdtx.com/dtx_exhibition/assets/common/share_mobile.png',
    },
  ];

  public switchSide(item: Item) {
    console.log(item);
  }
}
