import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  elements: {href: string, icon: string, tooltip: string}[] =[
    {href: '#', icon: 'bi bi-house-door', tooltip: 'Home'},
    {href: '#about', icon: 'bi bi-person', tooltip: 'About Me'},
    {href: '#experience', icon: 'bi bi-book', tooltip: 'Experience'},
    {href: '#services', icon: 'bi bi-clipboard-data', tooltip: 'Services'},
    {href: '#contact', icon: 'bi bi-send', tooltip: 'Contact'}
  ];
  isActive: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.elements.forEach((_e, index) =>{
      this.isActive[index] = false;
    });
    this.isActive[0] = true;
  }

  setActive(i: number){
    this.isActive.forEach((_e, index) =>{
      this.isActive[index] = false;
    });
    this.isActive[i] = true;
  }

}
