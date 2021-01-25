import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Character } from './shared/character.model';
import { CharacterService } from './shared/character.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsResolver implements Resolve<Character> {
  constructor(private router:Router, private _characterService: CharacterService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character> {
    return this._characterService.getCharacter(parseInt(route.params.id)).pipe(map( (data:any) => {
      if (data.status==="Alive") {
          return data;
      } else {
          this.router.navigate(['/characters']);
          alert("Character status is 'unknown' or 'dead'!")
          return null
      }
  }));
  }
}
