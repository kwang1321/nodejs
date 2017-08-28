import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // depending on which style is loaded afterward.
  // styles is loaded after styleUrls, so the color will be red.
  styleUrls: ['./app.component.css'],
  styles: [`
  h3{
    color: red;
  }
  `],
})
export class AppComponent {
  title = 'GQQ AngularJS';
  name = '...';
}
