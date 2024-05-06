import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AllModule } from './home/all/all.module';
import { MusicModule } from './home/music/music.module';
import { PodcastsModule } from './home/podcasts/podcasts.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AllModule,
    MusicModule,
    PodcastsModule
  ]
})
export class HomeModule { }
