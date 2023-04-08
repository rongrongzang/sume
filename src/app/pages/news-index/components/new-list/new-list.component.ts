import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.less'],
})
export class NewListComponent implements OnInit {
  @Input() list?: any[] = [];
  @Input() width?: string = ''; //3等份，左右外间距0.1rem*2
  @Input() showDetail?: Boolean = false;
  constructor(private message: NzMessageService) {}
  ngOnInit() {}
  toDetail(newsNo: string) {
    this.message.create('error', `抱歉，详情页,建设中...请稍后`);
  }
}
