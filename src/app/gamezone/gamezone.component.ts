import { Component, OnInit , AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gamezone',
  templateUrl: './gamezone.component.html',
  styleUrls: ['./gamezone.component.scss']
})
export class GamezoneComponent implements OnInit , AfterViewInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
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

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
