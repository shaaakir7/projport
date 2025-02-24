import { Component, AfterViewInit, OnInit, NgZone, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit, OnInit {
  
  projects: Project[] = [
    {
      title: 'A2HS (Add to Home Screen) Website Website',
      description: 'A fully responsive A2HS website built with Angular.',
      image: 'assets/images/proj1.png',
      link: 'https://shazontrends.netlify.app/'
    },
    {
      title: 'Personal Blog',
      description: 'A blog built with Angular for users to read and write posts.',
      image: 'assets/images/projcorporate.png',
      link: 'https://corporate-table.netlify.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with Angular and Tailwind CSS.',
      image: 'assets/images/projport.png',
      link: 'https://projport.vercel.app/portfolio'
    }
  ];

  skills = [
    { name: 'HTML5', icon: '/assets/images/html5.svg', value: 0, target: 90 },
    { name: 'CSS3', icon: '/assets/images/css.svg', value: 0, target: 90 },
    { name: 'JavaScript', icon: '/assets/images/js.svg', value: 0, target: 70 },
    { name: 'Angular', icon: '/assets/images/angular.svg', value: 0, target: 60 },
    { name: 'MySQL', icon: '/assets/images/mysql.svg', value: 0, target: 70 },
    { name: 'Git', icon: '/assets/images/git.svg', value: 0, target: 90 }
  ];

  constructor(private route: ActivatedRoute, private ngZone: NgZone) {}

  isMenuOpen: boolean = false;
  currentYear: number = new Date().getFullYear();
  deferredPrompt: any = null;
  showInstallButton: boolean = true; // ✅ Always show initially

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectMenuItem(item: string): void {
    console.log(`Selected item: ${item}`);
    this.toggleMenu();  
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    });

    // ✅ Hide the install button if the app is already installed
    if (
      window.matchMedia('(display-mode: standalone)').matches || 
      ('standalone' in window.navigator && (window.navigator as any).standalone)
    ) {
      console.log('App is already installed.');
      this.showInstallButton = false;
    }
  }

  ngAfterViewInit() {
    const videoElement: HTMLVideoElement = document.getElementById('backgroundVideo') as HTMLVideoElement;
    if (videoElement) {
      videoElement.muted = true;  
      videoElement.play();  
    }
  }

  // ✅ Capture the PWA install prompt
  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    event.preventDefault(); 
    this.deferredPrompt = event; 
  }

  // ✅ Show the install prompt when the button is clicked
  installPWA() {
    if (this.deferredPrompt) {
      (this.deferredPrompt as any).prompt(); // Show install pop-up
      (this.deferredPrompt as any).userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
          this.showInstallButton = false; // Hide after installation
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
    }
  }
}
