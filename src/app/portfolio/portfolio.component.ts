import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  
  ngOnInit(): void {
    // Scroll the page to the top when the page loads
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    const videoElement: HTMLVideoElement = document.getElementById('backgroundVideo') as HTMLVideoElement;

    if (videoElement) {
      videoElement.muted = true;  // Ensures the video is muted
      videoElement.play();  // Start the video automatically
    }
  }
}