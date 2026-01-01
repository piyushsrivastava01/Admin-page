import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { RoleService } from '../../shared/services/role.service';
import { User } from '../../shared/models/user.model';
import { RoleSummaryItem } from '../../shared/models/role-summary.model';

@Component({
  selector: 'app-role-assignment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './role-assignment.component.html'
})
export class RoleAssignmentComponent implements OnInit {
  users: User[] = [];
  summary: RoleSummaryItem[] = [];

  selectedUserId: number | null = null;
  selectedRole = '';
  permissions: string[] = [];

  permissionOptions = [
    'Manage Users',
    'View Analytics',
    'Grade Assignments',
    'View Reports',
    'Manage Courses',
    'Manage Hiring',
    'Create Tests',
    'System Settings'
  ];

  constructor(private userService: UserService, private roleService: RoleService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => (this.users = users));
    this.roleService.getRoleSummary().subscribe(summary => (this.summary = summary));
  }

  togglePermission(p: string) {
    if (this.permissions.includes(p)) {
      this.permissions = this.permissions.filter(x => x !== p);
    } else {
      this.permissions.push(p);
    }
  }

  save() {
    alert('Role assignment saved (dummy action).');
  }
}
