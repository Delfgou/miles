import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {  
    this.matIconRegistry
      .addSvgIcon("menu-slanting", 
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/util/hamburger-menu-slanting.svg"));
  }
}
