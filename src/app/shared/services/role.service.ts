import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RoleSummaryItem } from '../models/role-summary.model';

@Injectable({ providedIn: 'root' })
export class RoleService {
  private summary: RoleSummaryItem[] = [
    { role: 'Admin',       count: 1, percentage: 10, color: 'red' },
    { role: 'HR',          count: 1, percentage: 10, color: 'purple' },
    { role: 'Facilitator', count: 1, percentage: 10, color: 'indigo' },
    { role: 'Trainee',     count: 6, percentage: 60, color: 'green' },
    { role: 'Manager',     count: 1, percentage: 10, color: 'yellow' }
  ];

  getRoleSummary(): Observable<RoleSummaryItem[]> {
    return of(this.summary).pipe(delay(300));
  }
}
