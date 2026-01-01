export type UserRole =
  | 'Admin'
  | 'HR'
  | 'Facilitator'
  | 'Trainee'
  | 'Manager';

export type UserStatus = 'Active' | 'Inactive';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastLogin: string;  // e.g. '2024-01-10 14:32' or '2 hours ago'
  avatarUrl?: string;
}
