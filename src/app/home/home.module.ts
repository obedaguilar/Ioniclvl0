import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { StreamingVideoOptions, StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [StreamingMedia, VideoPlayer]
})
export class HomePageModule {}
