import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character.model';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  //todo refactor to be accessible in the whole library
  baseApiUrl="https://rickandmortyapi.com/api"

  constructor(private http: HttpClient) { }

  // todo handle pagination
  getCharacters(): Observable<any>{
    return this.http.get(this.baseApiUrl+'/character')
  }

  getCharacter(id:number): Observable<Character>{
    return this.http.get<Character>(this.baseApiUrl+'/character/'+id)
  }

}
