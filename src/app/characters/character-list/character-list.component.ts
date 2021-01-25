import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters:Character[]= [];
  isLoaded:boolean=false;
  nextPageLoading:boolean=false;
  nameQuery:string='';
  statusQuery:string='';
  nextUrl:string='';

  constructor(private characterService: CharacterService) { }

  private setInfo(data:any):void{
    this.characters=<Array<Character>>data.results;
    this.nextUrl=<string>data.info.next;
    this.nextPageLoading=false;
  }

  private fetchCharacters():void{
      this.nextPageLoading=true;
      this.characterService.getCharacters().subscribe(data =>{
      this.setInfo(data);
    })
  }

  ngOnInit(): void {
    this.fetchCharacters();
    this.isLoaded=true;
  }

  private fetchCharactersByQuery():void{
    this.nextPageLoading=true;
    this.characterService.getCharactersByQuery('?name='+this.nameQuery+'&status='+this.statusQuery).subscribe(data =>{
      this.setInfo(data);
    })
  }

  onSearchNameChange(newValue:string):void{
    this.nameQuery=newValue;
    this.fetchCharactersByQuery();
  }

  onStatusFilterChange(newValue:string):void{
    this.statusQuery=newValue;
    this.fetchCharactersByQuery();
  }

  onScroll():void{
    if(!this.nextUrl){
      return;
    }
    this.nextPageLoading=true;
    this.characterService.getNextCharacters(this.nextUrl).subscribe(data =>{
      this.setInfo(data);
    });
  }

}
