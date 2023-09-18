import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { AppLayoutNavbarComponent } from './app-layout-navbar/app-layout-navbar.component';
import { AppLayoutAlternateNavbarComponent } from './app-layout-alternate-navbar/app-layout-alternate-navbar.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutNavbarComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent }
    ],
  },
  {
    path: '',
    component: AppLayoutAlternateNavbarComponent,
    children: [
      { path: 'pagina-principal', component: PaginaPrincipalComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
