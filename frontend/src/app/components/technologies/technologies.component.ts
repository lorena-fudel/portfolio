import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent implements OnInit {
  categories: { name: string, items: any[] }[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTechnologies().subscribe({
      next: (data) => {
        this.groupTechnologies(data);
      },
      error: (err) => console.error('Error loading technologies', err)
    });
  }

  groupTechnologies(techs: any[]): void {
    const grouped = techs.reduce((acc, current) => {
      const category = current.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(current);
      return acc;
    }, {});

    this.categories = Object.keys(grouped).map(key => ({
      name: key,
      items: grouped[key]
    }));
  }
}
