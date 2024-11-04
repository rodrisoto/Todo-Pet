import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-centros-medicos', // Cambiar el selector aquí
  templateUrl: './centros-medicos.page.html', // Cambiar el nombre aquí
  styleUrls: ['./centros-medicos.page.scss'] // Cambiar el nombre aquí
})
export class CentrosMedicosPage implements OnInit { // Cambiar el nombre aquí

  constructor(private menu: MenuController) { }

  centrosVeterinarios = [
    {
      nombre: 'Veterinaria El Bosque',
      direccion: 'Av. El Bosque 0123, Santiago, Chile',
      imagen: '/assets/img/veterinarias/veterinaria1.jpg'
    },
    {
      nombre: 'Clínica Veterinaria Santa Rosa',
      direccion: 'Av. Santa Rosa 456, Santiago, Chile',
      imagen: '/assets/img/veterinarias/veterinaria2.jpg'
    },
    {
      nombre: 'Centro Veterinario Los Ángeles',
      direccion: 'Calle Los Ángeles 789, Santiago, Chile',
      imagen: '/assets/img/veterinarias/veterinaria3.jpg'
    },
    {
      nombre: 'Veterinaria Animalia',
      direccion: 'Av. Italia 10, Santiago, Chile',
      imagen: '/assets/img/veterinarias/veterinaria4.jpg'
    },
    {
      nombre: 'Clínica Veterinaria La Esperanza',
      direccion: 'Av. La Esperanza 15, Santiago, Chile',
      imagen: '/assets/img/veterinarias/veterinaria5.jpg'
    },
    {
      nombre: 'Centro Veterinario PetCare',
      direccion: 'Calle Lira 5, Santiago, Chile',
      imagen: '/assets/img/veterinarias/veterinaria6.jpg'
    },
    {
      nombre: 'Veterinaria Huellas Felices',
      direccion: 'Av. Pedro de Valdivia 20, Santiago, Chile',
      imagen: '/assets/img/veterinarias/veterinaria7.jpg'
    },
    {
      nombre: 'Clínica Veterinaria Buen Amigos',
      direccion: 'Av. Los Libertadores 22, Santiago, Chile',
      imagen: '/assets/img/veterinarias/veterinaria8.jpg'
    }
  ];
  

  ngOnInit() {
    this.menu.close('mainMenu');
  }

}
