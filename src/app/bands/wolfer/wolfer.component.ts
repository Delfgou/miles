import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-wolfer',
  templateUrl: './wolfer.component.html',
  styleUrls: ['./wolfer.component.css']
})
export class WolferComponent implements OnInit {
  safeURL;
  videoURL = 'https://soundcloud.com/dadifreyr/think-about-things';
  // videoURL = 'https://www.youtube.com/watch?v=VFZNvj-HfBU';

  constructor(private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
 }

  ngOnInit(): void {
  }

}
