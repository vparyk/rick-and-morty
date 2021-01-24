import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character.model';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  //todo refactor to be accessible in the whole libery
  baseApiUrl="https://rickandmortyapi.com/api"

  constructor(private http: HttpClient) { }

  // todo handle pagination
  getCharacters(): Observable<any>{
    return this.http.get(this.baseApiUrl+'/character')
  }
}
