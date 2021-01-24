import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterRoutingModule } from './character-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CharacterDetailsComponent, CharacterListComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    HttpClientModule
  ],
  exports:[
    CharacterListComponent,
  ]
})
export class CharactersModule { }
