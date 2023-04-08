import { Component } from '@angular/core';
import { mockData } from '../../../mock/data';

@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.less'],
})
export class NewsIndexComponent {
  public newsList: any[] = mockData.news.tab[0].newsList;
  public newsTab: any[] = mockData.news.tab;
}
