import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private userName : String;
  private token    : String;
  private profiles : String;

  constructor() {     
    if(this.userName == null)    
        this.userName = sessionStorage.getItem("username");

    if(this.token == null)
        this.token = sessionStorage.getItem("token");
    
    if(this.profiles == null)
        this.profiles = sessionStorage.getItem("profiles");
  }

  getUserName() : String{
      return this.userName;
  }

  setUserName(userName : string) : void {
    this.userName = userName;
    sessionStorage.setItem("username", userName);
  }

  getToken() : String{
    return this.token;
  }

  setToken(token : string) : void {
    this.token = token;
    sessionStorage.setItem("token", token);
  }

  getprofiles() : String{
    return this.profiles;
  }

  setProfiles(profiles : string) : void {
    this.profiles = profiles;
    sessionStorage.setItem("profiles", profiles);
  }

  clear(){
    this.token = null;
    this.userName = null
    this.profiles = null
    sessionStorage.clear()
  }

  

}
