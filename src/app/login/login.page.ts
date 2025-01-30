import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  cedula: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    if (!this.cedula || !this.password) {
      this.showAlert('Error', 'Ingrese su cédula y contraseña.');
      return;
    }

    this.loginService.login(this.cedula, this.password).subscribe(async response => {
      if (response.respuesta.estado) {
        localStorage.setItem('userData', JSON.stringify(response.data));
        this.router.navigate(['/home']); // Redirigir al Home después del login
      } else {
        this.showAlert('Error', 'Credenciales incorrectas.');
      }
    }, error => {
      this.showAlert('Error', 'No se pudo conectar con el servidor.');
    });
  }

  crearCuenta() {
    this.router.navigate(['/register']); // Redirige a la página de registro
  }

  recuperarPassword() {
    this.router.navigate(['/recuperar-password']); // Redirige a la recuperación de contraseña
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