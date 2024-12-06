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
  ];

  showModal: boolean = false;
  selectedImage: string | null = null;

  constructor() {}

  openModal(image: string) {
    this.selectedImage = image;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedImage = null;
  }

  async takePhoto() {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 90,
      });

      if (photo?.dataUrl) {
        this.images.unshift(photo.dataUrl);
      }
    } catch (error) {
      console.error('Error al tomar la fotografía:', error);
    }
  }

  async uploadPhoto() {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
        quality: 90,
      });

      if (photo?.dataUrl) {
        this.images.unshift(photo.dataUrl);
      }
    } catch (error) {
      console.error('Error al subir la fotografía:', error);
    }
  }

  deleteImage(index: number) {
    this.images.splice(index, 1);
  }
}
