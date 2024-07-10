import { Component } from '@angular/core';
import { CarCardComponent } from '../car-card/car-card.component';
@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CarCardComponent],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent {

}
