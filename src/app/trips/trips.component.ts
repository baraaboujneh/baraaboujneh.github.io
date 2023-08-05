import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  constructor(private router:Router){}
  gotoPage(path:string){
  this.router.navigate([path]);
}

}
