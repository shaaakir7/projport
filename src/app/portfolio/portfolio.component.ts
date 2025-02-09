import { Component,AfterViewInit,OnInit, NgZone  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit ,OnInit {

  skills = [
    { name: 'HTML5', icon: '/assets/images/html5.svg', value: 0, target: 90 },
    { name: 'CSS3', icon: '/assets/images/css.svg', value: 0, target: 90 },
    { name: 'JavaScript', icon: '/assets/images/js.svg', value: 0, target: 70 },
    { name: 'Angular', icon: '/assets/images/angular.svg', value: 0, target: 60 },
    // { name: 'Node.js', icon: '/assets/icons/nodejs.svg', value: 0, target: 75 },
    { name: 'Webpack', icon: '/assets/images/mysql.svg', value: 0, target: 70 },
    { name: 'Webpack', icon: '/assets/images/wordpress.svg', value: 0, target: 85 },
    { name: 'Git', icon: '/assets/images/git.svg', value: 0, target: 90 }
  ];

  constructor(private route: ActivatedRoute, private ngZone: NgZone) {}

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

  this.skills.forEach((_, index) => {
    setTimeout(() => this.animateSlider(index), 500);
  });
  }

  animateSlider(index: number) {
    let interval = setInterval(() => {
      if (this.skills[index].value < this.skills[index].target) {
        this.skills[index].value += 1;
      } else {
        clearInterval(interval);
      }
    }, 10);
  }
  
  
  

  ngAfterViewInit() {
    const videoElement: HTMLVideoElement = document.getElementById('backgroundVideo') as HTMLVideoElement;

    if (videoElement) {
      videoElement.muted = true;  // Ensures the video is muted
      videoElement.play();  // Start the video automatically
    }
  }
}