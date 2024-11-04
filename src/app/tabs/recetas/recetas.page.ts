import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage   {

  constructor() { }

  recetas = [
    {
      nombre: 'Pollo y Arroz',
      descripcion: 'Ingredientes: 1 taza de pollo cocido y desmenuzado, 1/2 taza de arroz integral, 1/2 taza de zanahorias cocidas y picadas, 1/4 de taza de guisantes. Instrucciones: Cocina el arroz según las instrucciones del paquete. Mezcla el pollo desmenuzado, las zanahorias y los guisantes con el arroz. Deja enfriar antes de servir.',
      imagen: '/assets/img/recetas/receta1.jpg',
  },
  {
      nombre: 'Pavo y Verduras',
      descripcion: 'Ingredientes: 1 taza de pavo molido, 1/2 taza de calabaza cocida y picada, 1/4 de taza de judías verdes cocidas y picadas, 1/4 de taza de zanahorias cocidas y picadas. Instrucciones: Cocina el pavo en una sartén hasta que esté completamente cocido. Mezcla las verduras y cocina un poco más. Deja enfriar antes de servir.',
      imagen: '/assets/img/recetas/receta2.jpg',
  },
  {
      nombre: 'Guiso de Carne',
      descripcion: 'Ingredientes: 1 taza de carne molida (res o cordero), 1/2 taza de zanahorias picadas, 1/2 taza de patatas picadas, 1/4 de taza de guisantes, 1 taza de agua. Instrucciones: Cocina la carne en una olla grande. Añade las verduras y el agua, y cocina a fuego lento hasta que las verduras estén tiernas. Deja enfriar antes de servir.',
      imagen: '/assets/img/recetas/receta3.jpg',
  },
  {
      nombre: 'Tortas de Atún',
      descripcion: 'Ingredientes: 1 lata de atún en agua, escurrido, 1 huevo, 1/2 taza de harina integral, 1/4 de taza de zanahorias picadas. Instrucciones: Precalienta el horno a 180 °C. Mezcla todos los ingredientes en un tazón. Forma pequeñas tortas y colócalas en una bandeja para hornear. Hornea durante 15-20 minutos hasta que estén doradas.',
      imagen: '/assets/img/recetas/receta4.jpg',
  },
  {
      nombre: 'Pasta y Verduras',
      descripcion: 'Ingredientes: 1 taza de pasta integral cocida, 1/2 taza de pollo cocido y picado, 1/2 taza de espinacas cocidas y picadas, 1/4 de taza de calabacín cocido y picado. Instrucciones: Mezcla todos los ingredientes en un tazón. Deja enfriar antes de servir.',
      imagen: '/assets/img/recetas/receta5.jpg',
  },
  {
      nombre: 'Zanahorias y Manzanas',
      descripcion: 'Ingredientes: 2 zanahorias ralladas, 1 manzana sin semillas y picada, 1/4 de taza de avena, 1/2 taza de yogur natural (sin azúcar). Instrucciones: Mezcla todos los ingredientes en un tazón. Forma pequeñas bolas y refrigera durante una hora antes de servir.',
      imagen: '/assets/img/recetas/receta6.jpg',
  },
  {
      nombre: 'Galletas de Avena y Plátano',
      descripcion: 'Ingredientes: 1 plátano maduro triturado, 1/2 taza de avena, 1/4 de taza de mantequilla de maní natural. Instrucciones: Precalienta el horno a 175 °C. Mezcla todos los ingredientes en un tazón. Forma pequeñas galletas y colócalas en una bandeja para hornear. Hornea durante 15 minutos.',
      imagen: '/assets/img/recetas/receta7.jpg',
  },
  {
      nombre: 'Puré de Calabaza',
      descripcion: 'Ingredientes: 1 taza de calabaza cocida y hecha puré, 1/2 taza de yogur natural (sin azúcar), 1/4 de taza de caldo de pollo bajo en sodio. Instrucciones: Mezcla todos los ingredientes hasta obtener una consistencia suave. Sirve como un acompañamiento o como un aderezo para otras comidas.',
      imagen: '/assets/img/recetas/receta8.jpg',
  },
    // Agrega más recetas hasta llegar a 10
  ];

}
