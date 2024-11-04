import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CentrosMedicosPageRoutingModule } from './centros-medicos-routing.module'; // Cambiar el nombre aquí
import { CentrosMedicosPage } from './centros-medicos.page'; // Cambiar el nombre aquí
import { ConvertirMonedaPipe } from '../../pipes/convertir-moneda.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosMedicosPageRoutingModule // Cambiar el nombre aquí
  ],
  declarations: [CentrosMedicosPage, ConvertirMonedaPipe] // Cambiar el nombre aquí
})
export class CentrosMedicosPageModule {} // Cambiar el nombre aquí
