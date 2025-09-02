// src/app/features/auth/auth.routes.ts
import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
  },
];
