import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '../../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteSubject = new BehaviorSubject<Cliente | null>(null);
  cliente$ = this.clienteSubject.asObservable();

  guardarCliente(cliente: Cliente) {
    this.clienteSubject.next(cliente);
  }

  obtenerCliente(): Cliente | null {
    return this.clienteSubject.value;
  }
}
