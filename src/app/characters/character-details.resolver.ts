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
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsResolver implements Resolve<Character> {
  constructor(private router:Router, private _characterService: CharacterService, private dialog: MatDialog ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character> {
    return this._characterService.getCharacter(parseInt(route.params.id)).pipe(map( (data:any) => {
      if (data.status==="Alive") {
          return data;
      } else {
          this.router.navigate(['/characters']);
          this.dialog.open(DialogComponent, {data:{title:"Interdimensional Error!", body:"Character status is 'unknown' or 'dead'!", confirmText:'What a pity!'}} )
      }
  }));
  }
}
