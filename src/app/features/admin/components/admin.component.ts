import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-2xl font-bold">👑 Espace Admin</h1>
    <p>Bienvenue dans l'espace d'administration.</p>
  `,
})
export class AdminDashboardComponent {}
