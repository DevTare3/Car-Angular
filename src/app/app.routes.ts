import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { CarDetailsComponent } from './car-details/car-details.component';
export const routes: Routes = [
    { path: 'about', component: AboutComponent},
    { path: 'home', component: HomeComponent},
    { path: 'location', component: LocationComponent},
    { path: 'car', component: CarDetailsComponent}
];
