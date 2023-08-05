import { Component } from '@angular/core';
import { usersapiService } from '../services/usersapi.service';
import{hotels}from '../classes/hotels';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchText!: string;
  listusers: hotels[] =[]
  constructor(private _usersapiService: usersapiService){}
 
ngOnInit(){
  this._usersapiService.getusers().subscribe(
    data=>
    {
      this.listusers = data;
    }
  );
}



}
