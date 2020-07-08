import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { ApiResource } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private headers : HttpHeaders;

  constructor(private http : HttpClient, private storageService : StorageService) { 
    let token = storageService.getToken().toString();

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': ApiResource.url,
      "Authorization" : "Bearer " + token
    });

  }

  get(url, options = {}) {
    
    return this.http.get(ApiResource.url + url, {
      headers: this.headers,
      ...options,
    });
  }

  post(url, data = {}) {
    
    return this.http.post(ApiResource.url+ url, data, {
      headers: this.headers
    });
  }

  delete(url, data = {}) {
    
    return this.http.delete(ApiResource.url+ url,{
      ...data,
      headers: this.headers      
    });

  }
}
