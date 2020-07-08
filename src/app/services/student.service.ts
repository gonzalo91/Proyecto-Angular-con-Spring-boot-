import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient : HttpClientService) { }

  getAll(){
    return this._httpClient.get("students/all");
  }

  getInscription(){
    return this._httpClient.get("students/inscription")
  }

  unsuscribe(id :Number ){
    return this._httpClient.post("students/unsubscribe_group", { id : id})
  }

  subscribe(id : Number){
    return this._httpClient.post("students/subscribe_group",{ id : id} )    
  }
}
