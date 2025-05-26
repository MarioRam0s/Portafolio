import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'component-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  protected certificados: string[] = [
    'assets/images/certificados/transactsql.webp',
    'assets/images/certificados/flutterLegacy.webp',
  ];

  protected currentIndex = signal<number>(0);

  protected next(): void {
    this.currentIndex.update((i) => (i + 1) % this.certificados.length);
  }

  protected prev(): void {
    this.currentIndex.update((i) => (i - 1 + this.certificados.length) % this.certificados.length);
  }
}
