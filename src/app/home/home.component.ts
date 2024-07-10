import { Component } from '@angular/core';
import { CarCardComponent } from '../car-card/car-card.component';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CarCardComponent]
})
export class HomeComponent {
}
