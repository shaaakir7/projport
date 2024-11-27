import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfintroComponent } from './profintro/profintro.component';

const routes: Routes = [
  { path: '',redirectTo: 'profintro', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'profintro', component: ProfintroComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
