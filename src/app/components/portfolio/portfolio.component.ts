import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass],
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

  routeToLink(link: string) {
    window.open(link, '_blank');
  }
}

interface ProjectModel {
  img: string;
  linkGitHub: string;
  linkSite: string;
  name: string;
}
