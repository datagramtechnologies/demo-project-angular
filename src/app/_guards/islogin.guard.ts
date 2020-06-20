import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class islogin implements CanActivate {

    constructor( private _router: Router) { }

    canActivate(): boolean {
        if (localStorage.getItem('_token')===undefined || localStorage.getItem('_token')===null) {
            this._router.navigate(['/login'])
            return false
        } else {
           // this._router.navigate(['/dashboard'])
            return true;
        }
    }
}