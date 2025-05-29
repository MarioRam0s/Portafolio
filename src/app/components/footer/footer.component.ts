import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'component-footer',
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  date: string = Date();

}
