import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from '../../shared/services/log.service';
import { LogEntry } from '../../shared/models/log-entry.model';

@Component({
  selector: 'app-system-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-logs.component.html'
})
export class SystemLogsComponent implements OnInit {
  logs: LogEntry[] = [];

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.getLogs().subscribe(logs => (this.logs = logs));
  }

  export() {
    alert('Export logs clicked (dummy).');
  }
}
