import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ImageModalPage } from '../../image-modal/image-modal.page'; // Ruta ajustada

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage {
  images: string[] = [
    'assets/img/galeria/1.jpg',
    'assets/img/galeria/2.jpg',
    'assets/img/galeria/3.jpg',
    'assets/img/galeria/4.jpg',
    'assets/img/galeria/5.jpg',
    'assets/img/galeria/6.jpg',
    'assets/img/galeria/7.jpg',
    'assets/img/galeria/8.jpg',
    'assets/img/galeria/9.jpg',
    'assets/img/galeria/10.jpg',
    'assets/img/galeria/11.jpg',
    'assets/img/galeria/12.jpg',
    'assets/img/galeria/13.jpg',
    'assets/img/galeria/14.jpg',
    'assets/img/galeria/15.jpg',
    'assets/img/galeria/16.jpg',
    'assets/img/galeria/17.jpg',
    'assets/img/galeria/18.jpg',
  
  ]; 

  constructor(private modalController: ModalController) {}

  async openImage(image: string) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: { image }, // Pasa la imagen seleccionada al modal
    });
    await modal.present();
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    if (image.dataUrl) {
      this.images.unshift(image.dataUrl); // Agrega la nueva imagen al inicio
    }
  }
}
