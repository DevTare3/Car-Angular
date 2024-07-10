import { Component,Input} from '@angular/core';
import { RouterLink } from '@angular/router';
export interface Car {
  name: string;
  model: string;
  year: number;
  color: string;
  img: string;
  price: number;
  fuel: string;
  description:string;
}

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})

export class CarCardComponent {
  cars: Car[] = [
    {name:'Mercedes-Benz', model: 'E-class', year: 2022, color:'black', img:'../../assets/mercedes.jpg', price: 30000, fuel:'diesel',description: 'a black color car closeup'},
    {name:'Audi', model: 'R8', year: 2022, color:'grey', img:'../../assets/audi.jpg', price: 150000, fuel:'petrol',description: 'a grey color car closeup'},
    {name:'BMW', model: '7 Series', year: 2022, color:'copper', img:'../../assets/bmw.jpg', price: 35000, fuel:'diesel-hybrid', description: 'a copper color car closeup'},
  ];
}
