import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'miguel-alejandro'
  },

  {
    path: 'miguel-alejandro',
    component: HomeComponent
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo:'miguel-alejandro'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
