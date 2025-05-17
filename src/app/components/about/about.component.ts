import { Component } from '@angular/core';
@Component({
  selector: 'component-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  goToFacebook() {
    window.open('https://www.facebook.com/marior5891', '_blank');
  }

  goToLinkedlin() {
    window.open('https://www.linkedin.com/in/mario-ramos-mejia', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/MarioRam0s', '_blank');
  }

  goToTiktok() {
    window.open('https://www.tiktok.com/@l0rddev', '_blank');
  }

  goToEmail(): void {
    window.location.href =
      'mailto:marioramosmejia2243@gmail.com?subject=Hola&body=Quiero contactarte';
  }

  downloadPdf(): void {
    const link = document.createElement('a');
    link.href = 'assets/pdf/CV-MarioRamos.pdf';
    link.download = 'CV-MarioRamos.pdf';
    link.click();
  }
}
