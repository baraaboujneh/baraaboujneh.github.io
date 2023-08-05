import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class usersapiService {
    constructor (private HttpClient:HttpClient){}
    getusers():Observable<any>{
        return this.HttpClient.get("http://127.0.0.1:8000/api/list");
    }
}