import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../shared/character.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  // todo angular is set to strict, and want me to initialize variables. "character:Character" throw an error. todo find better solution
  character:Character=<Character>{};

  constructor(
    private _route:ActivatedRoute,
    private _location: Location
    ) {
      this.character=this._route.snapshot.data['characterDetails'];
     }

  ngOnInit(): void {

  }

  navigateBack(){
    this._location.back();
  }

}
