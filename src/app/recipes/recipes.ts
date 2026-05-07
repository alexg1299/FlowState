import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Recipe {
  name: string;
  emoji: string;
  category: string;
  description: string;
  ingredients: { item: string; amount: string }[];
  steps: string[];
  prepTime: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  color: string;
}

@Component({
  selector: 'app-recipes',
  imports: [CommonModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss'
})
export class RecipesComponent {
  selectedRecipe = signal<Recipe | null>(null);
  activeFilter = signal('All');

  filters = ['All', 'Espresso', 'Milk', 'Cold', 'Filter'];

  recipes: Recipe[] = [
    {
      name: 'Classic Espresso', emoji: '☕', category: 'Espresso',
      description: 'The foundation of all espresso drinks — concentrated, bold, and aromatic.',
      ingredients: [{ item: 'Coffee beans', amount: '18g' }, { item: 'Water', amount: '36g' }, { item: 'Water temp', amount: '93°C' }],
      steps: ['Grind coffee to a fine setting', 'Distribute and tamp evenly at ~30 lbs pressure', 'Pull shot in 25–30 seconds', 'Aim for golden crema on top'],
      prepTime: '3 min', difficulty: 'Medium', color: '#5C3317'
    },
    {
      name: 'Flat White', emoji: '🥛', category: 'Milk',
      description: 'A velvety, milk-forward drink with a stronger coffee-to-milk ratio than a latte.',
      ingredients: [{ item: 'Espresso', amount: '18g dose / 36g yield' }, { item: 'Whole milk', amount: '120ml' }],
      steps: ['Pull a double espresso into a 5oz cup', 'Steam milk to 60°C with a fine microfoam', 'Pour milk from low height for a seamless blend', 'Add a small rosette or dot on top'],
      prepTime: '5 min', difficulty: 'Advanced', color: '#C47422'
    },
    {
      name: 'Cold Brew', emoji: '🧊', category: 'Cold',
      description: 'Slow-steeped in cold water for 12–24 hours. Smooth, low-acidity, naturally sweet.',
      ingredients: [{ item: 'Coarsely ground coffee', amount: '100g' }, { item: 'Cold filtered water', amount: '800ml' }],
      steps: ['Combine coffee and cold water in a jar', 'Stir well and cover', 'Steep in fridge for 12–24 hours', 'Strain through a fine mesh or paper filter', 'Dilute 1:1 with water or milk to serve'],
      prepTime: '12–24 hrs', difficulty: 'Easy', color: '#2C1503'
    },
    {
      name: 'Cappuccino', emoji: '☁️', category: 'Milk',
      description: 'Equal thirds espresso, steamed milk, and thick foam — an Italian classic.',
      ingredients: [{ item: 'Espresso', amount: '18g dose' }, { item: 'Whole milk', amount: '80ml' }],
      steps: ['Pull a double espresso into a 6oz cup', 'Steam milk to 65°C with lots of foam', 'Pour steamed milk, holding back foam with a spoon', 'Spoon thick foam generously on top'],
      prepTime: '5 min', difficulty: 'Medium', color: '#8B5E3C'
    },
    {
      name: 'Pour Over', emoji: '🫖', category: 'Filter',
      description: 'A clean, nuanced brew method that highlights origin character and delicate aromatics.',
      ingredients: [{ item: 'Medium-ground coffee', amount: '20g' }, { item: 'Hot water (93°C)', amount: '300ml' }],
      steps: ['Rinse paper filter with hot water', 'Add ground coffee and tare scale', 'Bloom: pour 40ml water, wait 30s', 'Continue pouring in slow circles until 300g', 'Total brew time: 3–4 minutes'],
      prepTime: '6 min', difficulty: 'Medium', color: '#A0522D'
    },
    {
      name: 'Espresso Tonic', emoji: '🫧', category: 'Cold',
      description: 'A refreshing sparkling drink — bitter espresso over tonic water with citrus notes.',
      ingredients: [{ item: 'Espresso', amount: '18g dose' }, { item: 'Tonic water', amount: '150ml' }, { item: 'Ice', amount: 'Plenty' }, { item: 'Lime slice', amount: '1' }],
      steps: ['Fill a tall glass with ice', 'Add cold tonic water', 'Slowly pour espresso over the back of a spoon', 'Garnish with a lime slice and serve immediately'],
      prepTime: '4 min', difficulty: 'Easy', color: '#4A7C59'
    },
    {
      name: 'Latte', emoji: '🫗', category: 'Milk',
      description: 'Smooth, creamy, and approachable. A gentle introduction to espresso-based drinks.',
      ingredients: [{ item: 'Espresso', amount: '18g dose' }, { item: 'Whole milk', amount: '200ml' }],
      steps: ['Pull a double espresso into a 10–12oz cup', 'Steam milk to 60°C with silky microfoam', 'Slowly pour milk in a circular motion', 'Finish with latte art or a simple heart'],
      prepTime: '5 min', difficulty: 'Medium', color: '#D2956A'
    },
    {
      name: 'AeroPress', emoji: '🔩', category: 'Filter',
      description: 'Versatile, fast, and forgiving. Great for travel and experimenting with recipes.',
      ingredients: [{ item: 'Medium-fine ground coffee', amount: '15g' }, { item: 'Hot water (85–93°C)', amount: '200ml' }],
      steps: ['Insert filter and rinse with hot water', 'Add coffee grounds to AeroPress', 'Pour water and stir for 10 seconds', 'Steep for 1 minute', 'Press slowly and steadily over 30 seconds'],
      prepTime: '4 min', difficulty: 'Easy', color: '#6B4226'
    },
  ];

  get filteredRecipes() {
    const f = this.activeFilter();
    return f === 'All' ? this.recipes : this.recipes.filter(r => r.category === f);
  }

  setFilter(f: string) { this.activeFilter.set(f); }
  openRecipe(r: Recipe) { this.selectedRecipe.set(r); }
  closeRecipe() { this.selectedRecipe.set(null); }
}
