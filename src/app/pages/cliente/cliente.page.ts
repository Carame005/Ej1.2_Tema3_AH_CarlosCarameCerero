import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
})
export class ClientePage {
  clienteForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    nacionalidad: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  guardar() {
    if (this.clienteForm.invalid) {
      this.clienteForm.markAllAsTouched();
      return;
    }
    const { nombre, apellido, email, nacionalidad } = this.clienteForm.value;
    const cliente: Cliente = {
      nombre: nombre!,
      apellido: apellido!,
      email: email!,
      nacionalidad: nacionalidad!
    };
    this.clienteService.guardarCliente(cliente);
    // Navegar a DatosCliente (o mostrar similar a Perfil)
    this.router.navigate(['/datos-cliente']);
  }
}
