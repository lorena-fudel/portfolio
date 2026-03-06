import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent implements OnInit {
  goals: any[] = [];
  personalGoals: any[] = [];
  professionalGoals: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGoals().subscribe({
      next: (data) => {
        this.goals = data;
        this.personalGoals = data.filter(g => g.type === 'personal');
        this.professionalGoals = data.filter(g => g.type === 'professional');
      },
      error: (err) => console.error('Error fetching goals', err)
    });
  }
}
