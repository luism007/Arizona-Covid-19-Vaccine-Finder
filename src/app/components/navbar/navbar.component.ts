import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  displaySidebar = false;

  ngOnInit(): void {
  }


  openSidebar(): void {
    this.displaySidebar = true;
  }
  closeSidebar(): void {
    this.displaySidebar = false;
  }

}
