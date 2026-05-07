import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BeanFact {
  name: string;
  origin: string;
  emoji: string;
  tagline: string;
  flavor: string[];
  roast: string;
  caffeine: string;
  altitude: string;
  about: string;
  funFact: string;
  acidity: number;
  body: number;
  sweetness: number;
  color: string;
}

@Component({
  selector: 'app-facts',
  imports: [CommonModule],
  templateUrl: './facts.html',
  styleUrl: './facts.scss'
})
export class FactsComponent {
  selected = signal<BeanFact | null>(null);

  beans: BeanFact[] = [
    {
      name: 'Arabica', origin: 'Ethiopia / Yemen', emoji: '🌿', tagline: 'The world\'s most popular bean',
      flavor: ['Fruity', 'Floral', 'Sweet', 'Bright acidity'],
      roast: 'Light to Medium', caffeine: '1.2–1.5%', altitude: '600–2200m',
      about: 'Coffea arabica accounts for about 60–70% of global coffee production. It evolved in the highlands of Ethiopia and is prized for its nuanced flavor complexity. Lower caffeine than Robusta, higher sugar content, and more delicate aromatics make it the top choice for specialty coffee.',
      funFact: 'Arabica plants are self-pollinating, meaning they don\'t require other plants or insects to reproduce — a rare trait among coffee species.',
      acidity: 85, body: 60, sweetness: 80, color: '#6B8E23'
    },
    {
      name: 'Robusta', origin: 'Central & West Africa', emoji: '💪', tagline: 'Bold, strong, and resilient',
      flavor: ['Earthy', 'Nutty', 'Bitter', 'Woody'],
      roast: 'Medium to Dark', caffeine: '2.0–2.7%', altitude: '0–800m',
      about: 'Coffea canephora (Robusta) thrives at lower altitudes and is far more resistant to disease, pests, and climate extremes than Arabica. With nearly double the caffeine content, it produces a thick crema and strong flavor — making it popular in Italian espresso blends and instant coffee.',
      funFact: 'Robusta\'s high caffeine content actually acts as a natural pesticide, deterring insects from attacking the plant.',
      acidity: 30, body: 90, sweetness: 30, color: '#8B4513'
    },
    {
      name: 'Liberica', origin: 'Liberia / Philippines', emoji: '🌺', tagline: 'Rare, smoky, and uniquely floral',
      flavor: ['Floral', 'Fruity', 'Smoky', 'Woody'],
      roast: 'Medium to Dark', caffeine: '1.2%', altitude: 'Sea level to 500m',
      about: 'Coffea liberica is a rare species making up less than 2% of global production. Its large, irregularly shaped beans produce a distinctively smoky and full-bodied cup. It\'s still widely consumed in the Philippines (where it\'s called "Kapeng Barako") and Malaysia.',
      funFact: 'In the 1890s, a coffee leaf rust epidemic wiped out Arabica crops across Southeast Asia. Liberica temporarily replaced Arabica as the main supply for global markets.',
      acidity: 40, body: 85, sweetness: 55, color: '#9B1B30'
    },
    {
      name: 'Excelsa', origin: 'Southeast Asia', emoji: '✨', tagline: 'The mysterious hybrid flavour',
      flavor: ['Tart', 'Fruity', 'Dark', 'Winey'],
      roast: 'Light to Medium', caffeine: '1.0%', altitude: '900–1800m',
      about: 'Once considered its own species, Excelsa is now classified as a variety of Liberica. It\'s most commonly grown in Southeast Asia and contributes complexity to blends — adding tartness and a distinctive winey, fruity quality that balances heavier, darker beans.',
      funFact: 'Excelsa is rarely served on its own — it\'s a master blend enhancer, used to add intrigue and depth to other coffee profiles.',
      acidity: 70, body: 70, sweetness: 60, color: '#4A235A'
    },
    {
      name: 'Ethiopian Yirgacheffe', origin: 'Ethiopia', emoji: '🌸', tagline: 'Bright, floral, and tea-like',
      flavor: ['Jasmine', 'Bergamot', 'Lemon', 'Blueberry'],
      roast: 'Light', caffeine: '1.2–1.4%', altitude: '1700–2200m',
      about: 'Yirgacheffe is a region in Ethiopia producing some of the most prized specialty coffees in the world. The beans are typically washed-processed, yielding a clean, bright, and intensely floral cup. The natural processing method, common for Ethiopia, produces a more fruit-forward, complex profile.',
      funFact: 'Ethiopia is the birthplace of all Coffea arabica. Wild coffee still grows in the forests of Ethiopia today, and local ceremonies can involve three sequential cups called "abol", "tona", and "baraka".',
      acidity: 95, body: 45, sweetness: 75, color: '#D4A017'
    },
    {
      name: 'Jamaica Blue Mountain', origin: 'Jamaica', emoji: '⛰️', tagline: 'The world\'s most coveted coffee',
      flavor: ['Mild', 'Sweet', 'Creamy', 'No bitterness'],
      roast: 'Light to Medium', caffeine: '1.1%', altitude: '900–1700m',
      about: 'Grown in the Blue Mountains of Jamaica, this is one of the most expensive and sought-after coffees globally. Its high altitude, misty climate, and rich soil produce beans with a remarkably clean, balanced, and mild flavor. Over 80% of the crop is exported to Japan.',
      funFact: 'Jamaica Blue Mountain coffee is so prized that it carries a certified trademark. Beans must be grown within specific parishes of the Blue Mountains and pass rigorous quality tests before they can legally carry the name.',
      acidity: 50, body: 65, sweetness: 85, color: '#1A5276'
    },
  ];

  select(bean: BeanFact) { this.selected.set(bean); }
  close() { this.selected.set(null); }
}
