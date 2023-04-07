import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterDescriptionComponent } from './components/footer-description/footer-description.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuMobileComponent } from './components/header/components/menu-mobile/menu-mobile.component';
import { HeaderComponent } from './components/header/header.component';
import { IfLoginModalComponent } from './components/if-login-modal/if-login-modal.component';
import { SideBoxsComponent } from './components/side-boxs/side-boxs.component';
import { BusinessListComponent } from './pages/business-list/business-list.component';
import { ExhibitionComponent } from './pages/exhibition/exhibition.component';
import { LiveListComponent } from './pages/live-list/live-list.component';
import { MeetingListComponent } from './pages/meeting-list/meeting-list.component';
import { NewsIndexComponent } from './pages/news-index/news-index.component';
import { PersonalCerterComponent } from './pages/personal-certer/personal-certer.component';
import { TranslatePipe } from './pipes/translate.pipe';
registerLocaleData(zh);
// 配置 NgModule 的地方
// declarations: 用于规定哪些组件和指令属于它
// imports: 它使用了哪些其它模块
@NgModule({
  declarations: [
    AppComponent,
    ExhibitionComponent,
    BusinessListComponent,
    LiveListComponent,
    MeetingListComponent,
    NewsIndexComponent,
    PersonalCerterComponent,
    HeaderComponent,
    FooterComponent,
    SideBoxsComponent,
    TranslatePipe,
    MenuMobileComponent,
    FooterDescriptionComponent,
    IfLoginModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzCarouselModule,
    NzPaginationModule,
    NzDrawerModule,
    NzTabsModule,
    NzModalModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
