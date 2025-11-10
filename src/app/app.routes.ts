import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  { path: '', redirectTo: 'list/servicios', pathMatch: 'full' },

  {
    path: 'list',
    loadComponent: () => import('./home/home.page').then(m => HomePage),
    children: [
      { path: 'perfil', loadComponent: () => import('./pages/perfil.page').then(m => m.PerfilPage) },
      { path: 'datos', loadComponent: () => import('./pages/datos.page').then(m => m.DatosPage) },

      // 🧩 Nueva ruta Cliente
      { path: 'cliente', loadComponent: () => import('./pages/cliente/cliente.page').then(m => m.ClientePage) },
      // 🧩 Nueva ruta DatosCliente
      { path: 'datos-cliente', loadComponent: () => import('./pages/datos-cliente/datos-cliente.page').then(m => m.DatosClientePage) },

      {
  path: 'list/calculadora',
  loadComponent: () => import('./pages/calculadora/calculadora.page').then(m => m.CalculadoraPage)
}
,
      // Mantén las categorías dinámicas
      { path: ':cat', loadComponent: () => import('./pages/cards-list.page').then(m => m.CardsListPage) },

      { path: '', redirectTo: 'servicios', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'list/servicios' }
];
