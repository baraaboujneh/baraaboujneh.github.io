import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';
import { TripsComponent } from './trips/trips.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { NavoutComponent } from './navout/navout.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [

{path: 'home', component : HomeComponent},
{path: 'login', component : LoginComponent},
{path: 'review', component : ReviewComponent},
{path: 'trips', component : TripsComponent},
{path: 'checkout', component : CheckoutComponent},
{path: 'cart', component : CartComponent},
{path: 'navbar', component : NavbarComponent},
{path: 'navout', component : NavoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
