import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './calculadora.component.html'
})
export class CalculadoraComponent {
  @Input() valorA!: number;
  @Input() valorB!: number;
  @Output() resultados = new EventEmitter<any>();

  ngOnChanges() {
    if (this.valorA !== undefined && this.valorB !== undefined) {
      this.calcular();
    }
  }

  calcular() {
    const resultados = {
      suma: this.valorA + this.valorB,
      resta: this.valorA - this.valorB,
      multiplicacion: this.valorA * this.valorB,
      division: this.valorB !== 0 ? this.valorA / this.valorB : '∞',
    };
    this.resultados.emit(resultados);
  }
}
