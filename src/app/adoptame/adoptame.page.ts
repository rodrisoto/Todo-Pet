import { Component, OnInit } from '@angular/core';
import { AdopcionService } from '../services/adopcion.service';

// Define la interfaz Mascota
export interface Mascota {
  id: number;
  nombre: string;
  tipo: string;
  edad: string;
  desc_fisica: string;
  imagen: string;
  url?: string; // Opcional si puede generarse dinámicamente
}

@Component({
  selector: 'app-adoptame',
  templateUrl: './adoptame.page.html',
  styleUrls: ['./adoptame.page.scss'],
})
export class AdoptamePage implements OnInit {
  mascotas: Mascota[] = []; // Ahora usamos la interfaz definida
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
        // Procesa los datos y añade la URL dinámica si no existe
        this.mascotas = (data.data || []).map((mascota: Mascota) => ({
          ...mascota,
          url: mascota.url || `https://huachitos.cl/animal/${mascota.id}-${mascota.nombre.toLowerCase().replace(/ /g, '-')}`,
        }));
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
