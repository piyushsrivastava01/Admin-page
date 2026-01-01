import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StatsCardComponent } from '../../core/components/stats-card/stats-card.component';

@Component({
  selector: 'app-system-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, StatsCardComponent],
  templateUrl: './system-admin.component.html'
})
export class SystemAdminComponent {}
