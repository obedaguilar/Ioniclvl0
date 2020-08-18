import { Component } from '@angular/core';
import { StreamingVideoOptions, StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private streamingMedia: StreamingMedia, private videoPlayer: VideoPlayer) {}

  PlayVideo(){
   const options: StreamingVideoOptions = {
    successCallback: () => console.log('Video played'),
    errorCallback: (e) => console.log('Error streaming'),
    orientation: 'landscape',
    shouldAutoClose: false,
    controls: true

   };
   this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/proyectovideoio.appspot.com/o/theweeknd.mp4?alt=media&token=9aac20ba-b1db-4594-b5ec-36f1e349ff14', options);
}
PlayVideo2(){
  // Pling a video.
this.videoPlayer.play('https://firebasestorage.googleapis.com/v0/b/proyectovideoio.appspot.com/o/theweeknd.mp4?alt=media&token=9aac20ba-b1db-4594-b5ec-36f1e349ff14').then(() => {
  console.log('video completed');
 }).catch(err => {
  console.log(err);
 });
}
}
