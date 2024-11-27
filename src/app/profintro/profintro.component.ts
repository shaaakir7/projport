import { Component } from '@angular/core';

@Component({
  selector: 'app-profintro',
  templateUrl: './profintro.component.html',
  styleUrls: ['./profintro.component.scss']
})
export class ProfintroComponent {
  rightPanelActive: boolean = false;

  toggleRightPanel() {
    this.rightPanelActive = !this.rightPanelActive;
  }

  isOpen = false;
}
