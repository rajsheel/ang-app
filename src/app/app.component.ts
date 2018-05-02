import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';

  featureRequested = 'recipe';

  featureLoaded(feature: string) {
  	this.featureRequested = feature;
  }
  
}
