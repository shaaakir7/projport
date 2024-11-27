import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profintro',
  templateUrl: './profintro.component.html',
  styleUrls: ['./profintro.component.scss']
})
export class ProfintroComponent {
  rightPanelActive: boolean = false;

  constructor(private router: Router) {}

  toggleRightPanel() {
    this.rightPanelActive = !this.rightPanelActive;
  }

  isOpen = false;

  portfolio() {
    this.router.navigate(['/portfolio']);
  }
}
