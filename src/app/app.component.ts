import { Component } from '@angular/core';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MenuBarComponent, RouterModule]
})
export class AppComponent {
  title = 'angular-blog';
}
