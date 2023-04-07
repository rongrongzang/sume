import { Component, ViewChild } from '@angular/core';
import { mockData } from '../../../mock/data';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.less'],
})
export class MeetingListComponent {
  public selectedTab: number = 0;
  public tabList: any[] = mockData.meeting.tabList; //参展商名录
  @ViewChild('loginModal') loginModal: any;
  toLogin(): void {
    this.loginModal.showModal();
  }
}
