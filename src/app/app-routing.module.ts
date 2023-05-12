import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [{
  path: '',
  pathMatch:'full',
  component:HomeComponent

},
{
  path:'new',
  component:ParentComponent, 

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
