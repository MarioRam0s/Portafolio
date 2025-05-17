import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'component-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');

      const scrollActive = () => {
        let current = '';

        sections.forEach((section) => {
          const el = section as HTMLElement;
          const sectionTop = el.offsetTop - 60; // Altura navbar fija
          const sectionHeight = el.offsetHeight;

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = el.getAttribute('id')!;
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove('bg-white', 'text-orange-700');
          link.classList.add('text-white');

          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('bg-white', 'text-orange-700');
            link.classList.remove('text-white');
          }
        });
      };

      // Ejecutar una vez al cargar la página
      scrollActive();

      // Agregar listener para scroll
      window.addEventListener('scroll', scrollActive);
    });
  }
}
