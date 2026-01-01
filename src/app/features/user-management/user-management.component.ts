import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User, UserRole } from '../../shared/models/user.model';
import { UserAvatarComponent } from '../../core/components/user-avatar/user-avatar.component';
import { StatusBadgeComponent } from '../../core/components/status-badge/status-badge.component';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, UserAvatarComponent, StatusBadgeComponent],
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  filtered: User[] = [];

  search = '';
  roleFilter: UserRole | 'All' = 'All';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filtered = [...users];
    });
  }

  applyFilters() {
    this.filtered = this.users.filter(u => {
      const matchSearch =
        u.name.toLowerCase().includes(this.search.toLowerCase()) ||
        u.email.toLowerCase().includes(this.search.toLowerCase());
      const matchRole = this.roleFilter === 'All' ? true : u.role === this.roleFilter;
      return matchSearch && matchRole;
    });
  }

  deleteUser(user: User) {
    if (!confirm(`Delete user ${user.name}?`)) return;
    this.userService.deleteUser(user.id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== user.id);
      this.applyFilters();
    });
  }
}
