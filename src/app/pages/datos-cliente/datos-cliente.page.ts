import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente/cliente.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DatosClientePage {
  cliente = this.clienteService.obtenerCliente();

  constructor(private clienteService: ClienteService) {
    // Si quieres suscribirte en lugar de obtener valor inmediato:
    // this.clienteService.cliente$.subscribe(c => this.cliente = c);
  }
}
