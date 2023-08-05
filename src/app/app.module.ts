import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { usersapiService } from './services/usersapi.service';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';
import { TripsComponent } from './trips/trips.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { NavoutComponent } from './navout/navout.component';
import { FilterPipe } from './home/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    ReviewComponent,
    TripsComponent,
    CheckoutComponent,
    CartComponent,
    NavoutComponent,
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [usersapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
