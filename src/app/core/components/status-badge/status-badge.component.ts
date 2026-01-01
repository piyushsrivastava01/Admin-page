import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.component.html'
})
export class StatusBadgeComponent {
  @Input() label = '';
  @Input() color = 'sky'; // sky / violet / green / amber etc.

  get classes() {
    const map: Record<string, string> = {
      sky: 'bg-sky-50 text-sky-700',
      violet: 'bg-violet-50 text-violet-700',
      green: 'bg-emerald-50 text-emerald-700',
      amber: 'bg-amber-50 text-amber-700',
      red: 'bg-rose-50 text-rose-700'
    };
    return map[this.color] || map['sky'];
  }
}
