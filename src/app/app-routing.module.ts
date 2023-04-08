import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListComponent } from './pages/business-list/business-list.component';
import { ExhibitionComponent } from './pages/exhibition/exhibition.component';
import { LiveListComponent } from './pages/live-list/live-list.component';
import { MeetingListComponent } from './pages/meeting-list/meeting-list.component';
import { NewsIndexComponent } from './pages/news-index/news-index.component';
import { PersonalCerterComponent } from './pages/personal-certer/personal-certer.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/exhibition-component',
    pathMatch: 'full',
  },
  { path: 'exhibition-component', component: ExhibitionComponent },
  { path: 'business-list-component', component: BusinessListComponent },
  { path: 'live-list-component', component: LiveListComponent },
  { path: 'meeting-list-component', component: MeetingListComponent },
  { path: 'news-index-component', component: NewsIndexComponent },
  { path: 'personal-certer-component', component: PersonalCerterComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // <a  routerLink="/detail/{{id}}"> {{hero.name}} </a>
  // const id = Number(this.route.snapshot.paramMap.get('id'));
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
