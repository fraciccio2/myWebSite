import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  private http = inject(HttpClient);

  projects: ProjectModel[] = [];

  ngOnInit(): void {
    this.http
      .get<ProjectModel[]>('assets/json/portfolio.json')
      .subscribe((projects) => (this.projects = projects));
  }

  routeToGithubProject(link: string) {}
}

interface ProjectModel {
  img: string;
  link: string;
  name: string;
}
