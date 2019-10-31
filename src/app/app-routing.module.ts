import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ExamplesComponent } from './examples/examples.component';

const router: Routes = [
  { path: '', redirectTo: 'home/:id', pathMatch: 'full'},
  { path: 'home/:id', component: ContentComponent},
  { path: 'examples', component: ExamplesComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
