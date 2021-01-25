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
  nameQuery:string='';
  statusQuery:string='';

  constructor(private characterService: CharacterService) { }

  private fetchCharacters():void{
    this.characterService.getCharacters().subscribe(data =>{
      this.characters=<Array<Character>>data.results;
      this.isLoaded=true;
    })
  }

  ngOnInit(): void {
    this.fetchCharacters();
  }

  private fetchCharactersByQuery():void{
    this.characterService.getCharactersByQuery('?name='+this.nameQuery+'&status='+this.statusQuery).subscribe(data =>{
      this.characters=<Array<Character>>data.results;
      this.isLoaded=true;
    })
  }

  // todo implement filter by name and status
  onSearchNameChange(newValue:string):void{
    // if(newValue===''){
    //   this.fetchCharacters();
    //   return;
    // }
    this.nameQuery=newValue;
    this.fetchCharactersByQuery();
    console.log("search name changed"+newValue);
  }

  onStatusFilterChange(newValue:string):void{
    this.statusQuery=newValue;
    this.fetchCharactersByQuery();
    console.log("status filter changed"+newValue);
  }

}
