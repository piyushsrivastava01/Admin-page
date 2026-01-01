import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  maintenanceMode = false;
  emailNotifications = true;
  twoFactor = false;
  autoBackup = true;

  createBackup() {
    alert('Create backup (dummy).');
  }

  restoreBackup() {
    alert('Restore backup (dummy).');
  }
}
