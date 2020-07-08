import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResource } from '../constants';
import { Toast } from '../helpers/toast';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userName : String;
  private token    : String;
  private profiles : String;

  private corsHeaders : HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': ApiResource.url
  });

  constructor(private http: HttpClient, private storageService : StorageService, private router: Router) { 
    
    
  }

  async logIn (user :String, password : String) : Promise<Boolean>{

    try{
      let token : any = await this.http.post(ApiResource.url + "token/generate-token", {
        "username" : user,
        "password" : password
      } , {
        headers : this.corsHeaders
      }).toPromise();
      
      if(this.corsHeaders.has("Authorization"))
          this.corsHeaders = this.corsHeaders.delete("Authorization");

      this.corsHeaders = this.corsHeaders.append("Authorization", "Bearer " + token.token );      
      
      if(token.token){        
        
        
        let userResponse : any = await this.http
        .get(ApiResource.url+"users/current", { headers : this.corsHeaders })
        .toPromise()

        this.storageService.setToken(token.token)
        this.storageService.setUserName(userResponse.name);
        let roles : string[] = userResponse.roles.map( rol => rol.name );
        this.storageService.setProfiles(roles.join(","));
                
        return true;
      }
            
      
    }catch(exception ){
        return false;
    }    
           
  }

  isAuthenticated() : Boolean{
    return this.storageService.getToken() != null;
  }

  hasProfiles(profiles : String[]) : Boolean{

    let user_profiles = this.storageService.getprofiles();

    user_profiles.split(",");

    for(let profile of profiles){
      
      if(user_profiles.includes(profile.toString()))
        return true;
    }

    return false;
  }

  logOut(){
    this.token = null;
    this.storageService.clear();
  }

  redirectHomeIfNotAuthorized(profiles : String[]){
    if(! this.hasProfiles(profiles))
      this.router.navigate(["/"]);
  }

}
