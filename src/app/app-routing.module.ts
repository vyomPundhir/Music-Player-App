import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AllComponent } from './home/home/all/all.component';
import { MusicComponent } from './home/home/music/music.component';
import { PodcastsComponent } from './home/home/podcasts/podcasts.component';
import { SearchComponent } from './search/search/search.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, children: [
    {
      path: '', redirectTo: 'all', pathMatch: 'full'
    },
    {
      path:'all', component: AllComponent
    },
    {
      path:'music', component: MusicComponent
    },
    {
      path: 'podcasts', component: PodcastsComponent
    }
  ]},
  {path: 'search', component: SearchComponent},
  {path:'', redirectTo: '/home/all', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
