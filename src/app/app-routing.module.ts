import { ListaRepositorioComponent } from './lista-repositorio/lista-repositorio.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'repositorios', component: ListaRepositorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
