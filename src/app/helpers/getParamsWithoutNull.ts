import { HttpParams } from '@angular/common/http';

export function getParamsWithoutNull(params: any): HttpParams{

    let params_without_null = new HttpParams();


    for(let param in params)
        if(params[param] != "")
            params_without_null = params_without_null.append(param, params[param]);        
        
    return params_without_null;
}