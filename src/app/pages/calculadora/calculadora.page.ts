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
    const a = Number(this.valorA);
    const b = Number(this.valorB);
    this.resultados = {
      suma: !isNaN(a) && !isNaN(b) ? a + b : null,
      resta: !isNaN(a) && !isNaN(b) ? a - b : null,
      multiplicacion: !isNaN(a) && !isNaN(b) ? a * b : null,
      division: !isNaN(a) && !isNaN(b) && b !== 0 ? a / b : null
    };
  }
}
