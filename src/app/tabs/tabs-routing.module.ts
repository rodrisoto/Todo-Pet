import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'centros-medicos',
        loadChildren: () => import('../tabs/centros-medicos/centros-medicos.module').then(m => m.CentrosMedicosPageModule)
      },
      {
        path: 'recetas',
        loadChildren: () => import('../tabs/recetas/recetas.module').then(m => m.RecetasPageModule)
      },
      {
        path: 'galeria',
        loadChildren: () => import('../tabs/galeria/galeria.module').then(m => m.GaleriaPageModule)
      },
      {
        path: 'adoptame', // Nueva ruta para la página "Adoptame"
        loadChildren: () => import('../adoptame/adoptame.module').then(m => m.AdoptamePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/centros-medicos',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
