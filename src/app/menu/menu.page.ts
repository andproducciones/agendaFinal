import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // ✅ Importamos el módulo completo de Ionic
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true, // ✅ Define el componente como standalone
  imports: [IonicModule, CommonModule, FormsModule] // ✅ Se importa IonicModule en lugar de componentes individuales
})
export class MenuPage implements OnInit {
  nombreUsuario: string = 'Usuario'; // Nombre por defecto

  constructor(private router: Router) {}

  ngOnInit() {
    // Obtener datos del usuario desde el localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const usuario = JSON.parse(userData);
      this.nombreUsuario = usuario.nombre || 'Usuario';
    }
  }

  irPerfil() {
    this.router.navigate(['/perfil']); // Navegar a la página de perfil
  }

  cerrarSesion() {
    localStorage.removeItem('userData'); // Eliminar datos de sesión
    this.router.navigate(['/login']); // Redirigir al login
  }
}
