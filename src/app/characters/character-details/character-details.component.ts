import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  // todo angular is set to strict, and want me to initialize variables. "character:Character" throw an error. todo find better solution
  character:Character=<Character>{};
  id=null;
  isLoaded:boolean=false;

  constructor(
    private characterService: CharacterService,
    private route:ActivatedRoute,
    private _location: Location
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.id=params.id;
        this.characterService.getCharacter(parseInt(params.id)).subscribe(data =>{
          this.character=data;
          this.isLoaded=true;
        })
      }
  })
  }

  navigateBack(){
    this._location.back();
  }

}
