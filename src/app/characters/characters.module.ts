import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterRoutingModule } from './character-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { SearchFormComponent } from './search-form/search-form.component';
import { CharacterDetailsResolver } from './character-details.resolver';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [CharacterDetailsComponent, CharacterListComponent, SearchFormComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    InfiniteScrollModule
  ],
  providers:[CharacterDetailsResolver],
  exports:[
    CharacterListComponent,
  ]
})
export class CharactersModule { }
