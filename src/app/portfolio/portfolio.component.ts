import { Component, AfterViewInit, OnInit, NgZone, HostListener, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('projectsSection', { static: false }) projectsSection!: ElementRef;
  
  projects: Project[] = [
    {
      title: 'A2HS (Add to Home Screen) Website',
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
    { name: 'WordPress', icon: '/assets/images/wordpress.svg', value: 0, target: 85 },
    { name: 'Git', icon: '/assets/images/git.svg', value: 0, target: 90 }
  ];

  isMenuOpen: boolean = false;
  currentYear: number = new Date().getFullYear();
  deferredPrompt: any = null;
  showInstallButton: boolean = true;
  hasAnimated: boolean = false;

  constructor(private route: ActivatedRoute, private ngZone: NgZone) {}

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

    if (
      window.matchMedia('(display-mode: standalone)').matches || 
      ('standalone' in window.navigator && (window.navigator as any).standalone)
    ) {
      console.log('App is already installed.');
      this.showInstallButton = false;
    }
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
      videoElement.muted = true;  
      videoElement.play();  
    }

    if (this.projectsSection) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.skills.forEach((_, index) => {
              setTimeout(() => this.animateSlider(index), 500);
            });
          }
        });
      }, { threshold: 0.3 });

      observer.observe(this.projectsSection.nativeElement);
    }
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    event.preventDefault(); 
    this.deferredPrompt = event; 
  }

  installPWA() {
    if (this.deferredPrompt) {
      (this.deferredPrompt as any).prompt();
      (this.deferredPrompt as any).userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
          this.showInstallButton = false;
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
    }
  }
}
