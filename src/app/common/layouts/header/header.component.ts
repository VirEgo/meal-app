import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuToggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleMenu() {
    this.isMenuToggle = !this.isMenuToggle
  }
}
