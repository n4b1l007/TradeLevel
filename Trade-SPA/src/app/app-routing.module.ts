import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { CreateViewComponent } from './create-view/create-view.component';


const routes: Routes = [
  { path: 'list', component: ListViewComponent },
  { path: 'create', component: CreateViewComponent },
  { path: '',   redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
