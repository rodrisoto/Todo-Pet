import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage {
  images: string[] = [
    '/assets/img/galeria/1.jpg',
    '/assets/img/galeria/2.jpg',
    '/assets/img/galeria/3.jpg',
    '/assets/img/galeria/4.jpg',
    '/assets/img/galeria/5.jpg',
    '/assets/img/galeria/6.jpg',
    '/assets/img/galeria/7.jpg',
    '/assets/img/galeria/8.jpg',
    '/assets/img/galeria/9.jpg',
    '/assets/img/galeria/10.jpg',
    '/assets/img/galeria/11.jpg',
    '/assets/img/galeria/12.jpg',
    '/assets/img/galeria/13.jpg',
    '/assets/img/galeria/14.jpg',
    '/assets/img/galeria/15.jpg',
    '/assets/img/galeria/16.jpg',
    '/assets/img/galeria/17.jpg',
    '/assets/img/galeria/18.jpg',
    // Agrega más imágenes aquí
  ];

  constructor() {}

  async takePhoto() {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl, // Devuelve la imagen como DataURL
        source: CameraSource.Camera,         // Usa la cámara del dispositivo
        quality: 90                          // Calidad de la imagen
      });

      if (photo?.dataUrl) {
        this.images.unshift(photo.dataUrl); // Agrega la nueva foto al inicio de la galería
      }
    } catch (error) {
      console.error('Error al tomar la fotografía:', error);
    }
  }
}
