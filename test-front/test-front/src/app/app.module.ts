import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaEspecificaComponent } from './components/pagina-especifica/pagina-especifica.component';
import { AppLayoutNavbarComponent } from './app-layout-navbar/app-layout-navbar.component';
import { AppLayoutAlternateNavbarComponent } from './app-layout-alternate-navbar/app-layout-alternate-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    LoginComponent,
    PaginaPrincipalComponent,
    PaginaEspecificaComponent,
    AppLayoutNavbarComponent,
    AppLayoutAlternateNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
