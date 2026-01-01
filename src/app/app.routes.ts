import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminLayoutComponent } from './core/layouts/admin-layout/admin-layout.component';
import { SystemAdminComponent } from './features/system-admin/system-admin.component';
import { UserManagementComponent } from './features/user-management/user-management.component';
import { RoleAssignmentComponent } from './features/role-assignment/role-assignment.component';
import { SystemLogsComponent } from './features/system-logs/system-logs.component';
import { SettingsComponent } from './features/settings/settings.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'system',
        component: SystemAdminComponent,
        children: [
          { path: 'users', component: UserManagementComponent },
          { path: 'roles', component: RoleAssignmentComponent },
          { path: 'logs', component: SystemLogsComponent },
          { path: 'settings', component: SettingsComponent },
          { path: '', redirectTo: 'users', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'system', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
