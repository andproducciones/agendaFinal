import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { PerfilService } from '../services/perfil/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false
})
export class PerfilPage implements OnInit {
  userData: any;


  constructor(
    private perfilService: PerfilService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    // Obtener los datos del usuario desde la navegación
    if (this.router.getCurrentNavigation()?.extras.state?.['userData']) {
      this.userData = this.router.getCurrentNavigation()?.extras.state?.['userData'];
    } else {
      // Intentar recuperar desde localStorage si no vienen en la navegación
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        this.userData = JSON.parse(storedUserData);
      }
    }
  }

  guardarCambios() {
    console.log(this.userData);
    this.perfilService.actualizarPerfil(this.userData).subscribe(async response => {
      if (response.data) {
        localStorage.setItem('userData', JSON.stringify(response.data));
        this.showAlert('Éxito', 'Tus datos han sido actualizados correctamente.');
      } else {
        this.showAlert('Error', 'No se pudo actualizar la información.');
      }
    }, error => {
      this.showAlert('Error', 'No se pudo conectar con el servidor.');
    });
  }

  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}