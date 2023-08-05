import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navout',
  templateUrl: './navout.component.html',
  styleUrls: ['./navout.component.css']
})
export class NavoutComponent {
  constructor(private router:Router){}
gotoPage(path:string){
this.router.navigate([path]);

}
}
