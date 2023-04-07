import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { mockData } from '../../../mock/data';

enum ScreenSize {
  mini = 1000,
  small = 1200,
  medium = 1400,
}

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.less'],
})
export class ExhibitionComponent {
  public screenWidth: any;
  public headerObj = mockData.header;
  public storeList: any[] = [];
  public storeListM: any[] = [];
  public tvList = mockData.tvList;
  public hotProductsList: any[] = [];
  public brandList: any[] = [];
  public ulWidth: number = 0;

  constructor(private router: Router) {
    this.onResize();
    this.storeList = this.toArr(mockData.storeList, 17);
    this.storeListM = this.toArr(mockData.storeList, 34); //手机端数据
  }
  // brandList
  // ngOnInit() 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit()。这里是放置初始化逻辑的好地方。
  // ngOnInit(): void {}
  //详情
  toDetail(item: object): void {
    console.log(item);
  }
  // 查看更多
  toNext(url: string, key?: number): void {
    this.router.navigate([url], { queryParams: { key: key } });
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    let size = 6;
    if (window.innerWidth > ScreenSize.medium) {
      size = 8;
    } else if (window.innerWidth > ScreenSize.small) {
      size = 7;
    } else if (window.innerWidth > ScreenSize.mini) {
      size = 6;
    } else {
      size = 5;
    }
    let _size = size * 3;
    this.brandList = this.toArr(mockData.brandList, _size);
    this.ulWidth = window.innerWidth > 961 ? Number((1.85 * size).toFixed(2)) : Number((2.1 * size).toFixed(2));
    this.hotProductsList = window.innerWidth > 960 ? mockData.hotProductsList : mockData.hotProductsList.slice(0, 4);
  }
  // 转为二维数组
  toArr(list: any[], size: number) {
    const arrAll = [];
    for (let i = 0; i < list.length; i += size) {
      const arr = list.slice(i, i + size);
      arrAll.push(arr as any);
    }
    return arrAll;
  }

  // 防抖函数
  debounce(fn: Function, delay: number) {
    let timer: any = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    };
  }

  // 节流函数
  throttle(fn: Function, delay: number) {
    let flag = true;
    return () => {
      if (!flag) return;
      flag = false;
      setTimeout(() => {
        fn.apply(this, arguments);
        flag = true;
      }, delay);
    };
  }
}
