import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-layout-alternate-navbar',
  templateUrl: './app-layout-alternate-navbar.component.html',
  styleUrls: ['./app-layout-alternate-navbar.component.css']
})
export class AppLayoutAlternateNavbarComponent {
  @Input() isPaginaPrincipal: boolean = true;
}
