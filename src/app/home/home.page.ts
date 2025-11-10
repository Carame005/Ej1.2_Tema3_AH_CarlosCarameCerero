import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
// ...existing code...
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
  IonContent, IonItem, IonLabel, IonInput, IonRouterOutlet, IonFooter
} from '@ionic/angular/standalone';
import { CounterComponent } from '../components/counter/counter.component';
import { CalculadoraComponent } from '../components/calculadora/calculadora.component';

interface Resultados {
  [key: string]: any;
}

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonRouterOutlet,
    IonFooter,
  CounterComponent,
  CalculadoraComponent
  // ...existing code...
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  // Contador
  parentCount = 0;
  milestoneMsg = '';

  // Calculadora
  valorA: number | null = null;
  valorB: number | null = null;
  resultados?: Resultados;

  @ViewChild('calc') calculadora: any;

  // Visibilidad de la calculadora en el footer
showCalculadora = false;

// Método para alternar visibilidad
toggleCalculadora() {
  this.showCalculadora = !this.showCalculadora;
}

  // Incrementa el contador
  incrementFromParent() {
    this.parentCount++;
  }

  // Recibe el número del evento del contador
  onMilestoneReached(n: number) {
    this.milestoneMsg = `Ha llegado al ${n}`;
    setTimeout(() => this.milestoneMsg = '', 3000);
  }

  // ...existing code...

  // Recibe los resultados del hijo (calculadora)
  onResultados(res: Resultados) {
    this.resultados = res;
  }

  // Llama al método calcular() del hijo
  calcularDesdePadre() {
    if (this.calculadora && this.calculadora.calcular) {
      this.calculadora.calcular();
    }
  }
}
