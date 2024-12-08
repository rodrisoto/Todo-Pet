import { Component, OnInit } from '@angular/core';
import { AdopcionService } from '../services/adopcion.service';

@Component({
  selector: 'app-adoptame',
  templateUrl: './adoptame.page.html',
  styleUrls: ['./adoptame.page.scss'],
})
export class AdoptamePage implements OnInit {
  mascotas: any[] = []; // Almacén de datos de la API
  loading: boolean = true;

  constructor(private adopcionService: AdopcionService) {}

  ngOnInit() {
    // Carga inicial de animales
    this.cargarAnimales('Región Metropolitana', 'Santiago');
  }

  cargarAnimales(region: string, comuna: string) {
    this.loading = true;
    this.adopcionService.getAnimales(region, comuna).subscribe(
      (data) => {
        this.mascotas = data.data || []; // Procesa los datos de la API
        console.log('Datos obtenidos:', this.mascotas); // Debugging
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar datos:', error);
        this.loading = false;
      }
    );
  }
}
