import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class CalculatorComponent {
  beanWeight = signal(18);
  espressoOutput = signal(36);
  brewMethod = signal('espresso');

  ratio = computed(() => {
    if (this.beanWeight() === 0) return 0;
    return +(this.espressoOutput() / this.beanWeight()).toFixed(2);
  });

  grindSetting = computed(() => {
    const r = this.ratio();
    const method = this.brewMethod();
    if (method === 'espresso') {
      if (r < 1.8) return { label: 'Extra Fine', desc: 'Very tight puck, slow extraction', icon: '▪' };
      if (r < 2.2) return { label: 'Fine', desc: 'Ideal for rich, balanced espresso', icon: '▫' };
      if (r < 2.8) return { label: 'Medium-Fine', desc: 'Lighter body, brighter notes', icon: '◽' };
      return { label: 'Medium', desc: 'Fast extraction, consider finer grind', icon: '◻' };
    }
    if (method === 'aeropress') {
      if (r < 6) return { label: 'Fine', desc: 'Short brew time, concentrated', icon: '▪' };
      if (r < 12) return { label: 'Medium-Fine', desc: 'Balanced, versatile', icon: '▫' };
      return { label: 'Medium', desc: 'Long steep, smooth result', icon: '◽' };
    }
    if (method === 'pourover') {
      return { label: 'Medium', desc: 'Clean cup, highlight origin flavors', icon: '◻' };
    }
    return { label: 'Coarse', desc: 'Full immersion brew', icon: '⬜' };
  });

  extractionTime = computed(() => {
    const r = this.ratio();
    const m = this.brewMethod();
    if (m === 'espresso') {
      if (r < 1.8) return '35–45s (consider coarser grind)';
      if (r < 2.2) return '25–35s (ideal window)';
      return '20–25s (consider finer grind)';
    }
    if (m === 'aeropress') return '1–3 min';
    if (m === 'pourover') return '3–4 min';
    return '4–6 min';
  });

  beanWeightPresets = [8, 9, 17, 18];
  outputPresets = this.beanWeightPresets.map(w => w * 2);

  brewMethods = [
    { value: 'espresso', label: 'Espresso' },
    { value: 'aeropress', label: 'AeroPress' },
    { value: 'pourover', label: 'Pour Over' },
    { value: 'frenchpress', label: 'French Press' },
  ];

  onBeanWeightChange(val: number) { this.beanWeight.set(+val); }
  onEspressoOutputChange(val: number) { this.espressoOutput.set(+val); }
  onBrewMethodChange(val: string) { this.brewMethod.set(val); }
}
