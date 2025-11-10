import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-calculadora-page',
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './calculadora.page.html',
})
export class CalculadoraPage {
  valorA: number = 0;
  valorB: number = 0;

  resultados: { [key: string]: number | null } = {};

  calcular() {
    this.resultados = {
      suma: this.valorA + this.valorB,
      resta: this.valorA - this.valorB,
      multiplicacion: this.valorA * this.valorB,
      division: this.valorB !== 0 ? this.valorA / this.valorB : null
    };
  }
}
