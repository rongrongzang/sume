import { Component, HostListener } from '@angular/core';
import { mockData } from '../../../mock/data';

enum ScreenSize {
  small = 1200,
  medium = 1400,
  large = 1600,
  mlarge = 2000,
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

  constructor() {
    this.onResize();
    this.storeList = this.toArr(mockData.storeList, 17);
    this.storeListM = this.toArr(mockData.storeList, 34); //手机端数据
    console.log(this.storeList);
  }
  // brandList
  // ngOnInit() 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit()。这里是放置初始化逻辑的好地方。
  ngOnInit(): void {}

  toNext(item: object): void {
    console.log(item);
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    let size = 6;
    if (window.innerWidth > ScreenSize.mlarge) {
      size = 10;
    } else if (window.innerWidth > ScreenSize.large) {
      size = 9;
    } else if (window.innerWidth > ScreenSize.medium) {
      size = 8;
    } else if (window.innerWidth > ScreenSize.small) {
      size = 7;
    }
    let _size = size * 3;
    this.brandList = this.toArr(mockData.brandList, _size);
    this.ulWidth = Number((1.85 * size).toFixed(2));
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
