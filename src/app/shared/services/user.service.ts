import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Rupesh',
      email: 'admin@company.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-01-10 14:32'
    },
    {
      id: 2,
      name: 'Asiya Ashraf',
      email: 'hr@company.com',
      role: 'HR',
      status: 'Active',
      lastLogin: '2024-01-10 14:32'
    },
    {
      id: 3,
      name: 'Amarathana Shree',
      email: 'facilitator@company.com',
      role: 'Facilitator',
      status: 'Active',
      lastLogin: '2024-01-10 14:32'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      email: 'trainee@company.com',
      role: 'Trainee',
      status: 'Active',
      lastLogin: '2 hours ago'
    },
    {
      id: 5,
      name: 'Vikram Patel',
      email: 'manager@company.com',
      role: 'Manager',
      status: 'Active',
      lastLogin: '2024-01-10 14:32'
    }
  ];

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(300));
  }

  deleteUser(id: number): Observable<void> {
    this.users = this.users.filter(u => u.id !== id);
    return of(void 0).pipe(delay(200));
  }
}
