import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LogEntry } from '../models/log-entry.model';

@Injectable({ providedIn: 'root' })
export class LogService {
  private logs: LogEntry[] = [
    {
      id: 1,
      level: 'info',
      title: 'User Created',
      description: 'Created new trainee account',
      by: 'admin@company.com',
      timestamp: '2024-01-10 14:32:15'
    },
    {
      id: 2,
      level: 'warning',
      title: 'Role Updated',
      description: 'Changed role for user #234',
      by: 'hr@company.com',
      timestamp: '2024-01-10 13:45:22'
    },
    {
      id: 3,
      level: 'info',
      title: 'Course Updated',
      description: 'Updated React Development curriculum',
      by: 'facilitator@company.com',
      timestamp: '2024-01-10 12:18:45'
    },
    {
      id: 4,
      level: 'success',
      title: 'Backup Completed',
      description: 'Daily backup successful',
      by: 'system',
      timestamp: '2024-01-10 03:00:00'
    },
    {
      id: 5,
      level: 'info',
      title: 'Settings Changed',
      description: 'Updated email templates',
      by: 'admin@company.com',
      timestamp: '2024-01-09 16:22:33'
    }
  ];

  getLogs(): Observable<LogEntry[]> {
    return of(this.logs).pipe(delay(300));
  }
}
