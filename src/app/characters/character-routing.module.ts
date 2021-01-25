import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterDetailsResolver } from './character-details.resolver';

const routes: Routes = [
  { 
    path:'character/:id', 
    component: CharacterDetailsComponent, 
    resolve: { characterDetails:CharacterDetailsResolver},
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
