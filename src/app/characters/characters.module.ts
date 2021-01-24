import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterRoutingModule } from './character-routing.module';



@NgModule({
  declarations: [CharacterDetailsComponent, CharacterListComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ],
  exports:[
    CharacterListComponent,
  ]
})
export class CharactersModule { }
