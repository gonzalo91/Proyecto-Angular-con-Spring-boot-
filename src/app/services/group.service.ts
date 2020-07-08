import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private _httpClient : HttpClientService) { }

  getAll(){
    return this._httpClient.get("group/all");
  }
}
