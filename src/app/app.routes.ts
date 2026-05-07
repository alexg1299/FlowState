import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator';
import { RecipesComponent } from './recipes/recipes';
import { FactsComponent } from './facts/facts';

export const routes: Routes = [
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'facts', component: FactsComponent },
];
