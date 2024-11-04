import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrosMedicosPage } from './centros-medicos.page'; // Cambiar el nombre aquí

const routes: Routes = [
  {
    path: '',
    component: CentrosMedicosPage // Cambiar el nombre aquí
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentrosMedicosPageRoutingModule {} // Cambiar el nombre aquí
