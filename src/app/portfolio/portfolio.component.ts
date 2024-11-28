import { Component,AfterViewInit,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit ,OnInit {

  constructor(private route: ActivatedRoute) {}

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Close the menu when an item is selected
  selectMenuItem(item: string): void {
    console.log(`Selected item: ${item}`);
    this.toggleMenu();  // Close the menu when an item is clicked
  }
  
  ngOnInit(): void {
   window.scrollTo(0, 0);

   this.route.fragment.subscribe(fragment => {
    if (fragment) {
      // Wait for the content to be rendered, then scroll
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  });
  }
  

  ngAfterViewInit() {
    const videoElement: HTMLVideoElement = document.getElementById('backgroundVideo') as HTMLVideoElement;

    if (videoElement) {
      videoElement.muted = true;  // Ensures the video is muted
      videoElement.play();  // Start the video automatically
    }
  }
}