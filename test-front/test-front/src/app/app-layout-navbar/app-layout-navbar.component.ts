import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-layout-navbar',
  templateUrl: './app-layout-navbar.component.html',
  styleUrls: ['./app-layout-navbar.component.css']
})
export class AppLayoutNavbarComponent {
  @Input() isPaginaPrincipal: boolean = false;
}
