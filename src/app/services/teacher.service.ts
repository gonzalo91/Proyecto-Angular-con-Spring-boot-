import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { getParamsWithoutNull } from '../helpers/getParamsWithoutNull';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _httpClient : HttpClientService) {     
  }


  getAll(){
    return this._httpClient.get("teacher/all");
  }

  getById(id : Number){
    return this._httpClient.get("teacher/findById/" + id);
  }

  create(body : any){
    return this._httpClient.post("teacher/create", body);
  }

  update(body : any){
    return this._httpClient.post("teacher/update/" + body.user.id , body);
  }

  filter(params : any){
    let params_without_null = getParamsWithoutNull(params);
      

    return this._httpClient.get("teacher/search", { params : params_without_null});
  }

  delete(id : Number){
    return this._httpClient.delete("teacher/delete/" + id);
  }
}
