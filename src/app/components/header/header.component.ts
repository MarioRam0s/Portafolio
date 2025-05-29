import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'component-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor() { }

  lastScrollTop = 0;
  hideHeader = false;

  @HostListener('window:scroll', [])
  protected onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    this.hideHeader = scrollTop > this.lastScrollTop;
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  @ViewChild('menuToggle', { static: false }) menuToggle!: ElementRef;

  @HostListener('document:click', ['$event'])
  protected handleClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    const menu = document.querySelector('nav');
    const isInsideMenu = menu?.contains(target);
    const isMenuButton = this.menuToggle?.nativeElement?.contains(target);

    // Si clic no es ni en menú ni en botón, cerrar menú
    if (!isInsideMenu && !isMenuButton) {
      const checkbox = this.menuToggle.nativeElement as HTMLInputElement;
      checkbox.checked = false;
    }
  }

  protected onMenuButtonClick(event: Event): void {
    // Evita que el evento se propague y se dispare el HostListener de clic fuera
    event.stopPropagation();
  }

  protected closeMenu(): void {
    const checkbox = this.menuToggle.nativeElement as HTMLInputElement;
    checkbox.checked = false;
  }
}
