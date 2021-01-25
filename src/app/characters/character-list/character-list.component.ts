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

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(data =>{
      this.characters=<Array<Character>>data.results;
      this.isLoaded=true;
    })
  }
  // todo implement filter by name and status
  onSearchNameChange(newValue:string){
    console.log("search name changed"+newValue);
  }

  onStatusFilterChange(newValue:string){
    console.log("status filter changed"+newValue);
  }

}
