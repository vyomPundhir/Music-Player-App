import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all.component';
import {ArtistCardComponent} from 'src/app/cards/artist-card/artist-card.component';
import {AlbumCardComponent} from 'src/app/cards/album-card/album-card.component';

@NgModule({
  declarations: [
    AllComponent,
    ArtistCardComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AllModule { }
