import { Component } from '@angular/core';
@Component({
  selector: 'component-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected goToFacebook(): void {
    window.open('https://www.facebook.com/marior5891', '_blank');
  }

  protected goToLinkedlin(): void {
    window.open('https://www.linkedin.com/in/mario-ramos-mejia', '_blank');
  }

  protected goToGithub(): void {
    window.open('https://github.com/MarioRam0s', '_blank');
  }

  protected goToTiktok(): void {
    window.open('https://www.tiktok.com/@l0rddev', '_blank');
  }

  protected goToEmail(): void {
    window.location.href =
      'mailto:marioramosmejia2243@gmail.com?subject=Hola&body=Quiero contactarte';
  }

  protected downloadPdf(): void {
    const link = document.createElement('a');
    link.href = 'assets/pdf/CV-MarioRamos.pdf';
    link.download = 'CV-MarioRamos.pdf';
    link.click();
  }

  protected copyText(): void {
    const text = document.getElementById('first_name')?.textContent ?? '';
    navigator.clipboard.writeText(text);
  }
}
