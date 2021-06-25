import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {

  navItems = [
    { label: 'About me', route: '/about'},
    { label: 'Work Experience', route: '/work'},
    { label: 'Education', route: '/edu'},
    { label: 'Skills', route: '/skill'},
    { label: 'Contact me', route: '/contact'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigationSelection(navItem: any) {
    this.router.navigate([navItem.route]);
  }

}
