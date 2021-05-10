import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ResourcesComponent } from './resources/resources.component'

const routes: Routes = [
  {path: 'resource/:id', component: ResourcesComponent},
  {path: '/index', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
