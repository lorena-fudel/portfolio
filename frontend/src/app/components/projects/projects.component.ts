import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  autoScrollInterval: any;
  isModalOpen = false;
  selectedProject: any = null;

  projects = [
    { title: 'PetCare Center', type: 'Veterinario', style: 'Bento Grid', image: 'assets/vet_es.png', cssClass: 'bento' },
    { title: 'Pride Hub', type: 'Comunidad LGTBI', style: 'Neo-brutalismo', image: 'assets/lgtbi_es.png', cssClass: 'neo-brutalist' },
    { title: 'Izakaya Sushi', type: 'Restaurante Japonés', style: 'Minimalismo Cálido', image: 'assets/japan_es.png', cssClass: 'minimalist' },
    { title: 'Studio Style', type: 'Peluquería', style: 'Glassmorphism', image: 'assets/salon_es.png', cssClass: 'glass' },
    { title: 'El rincón del mojo', type: 'Guachinche', style: 'Estilo Editorial', image: 'assets/guachinche_es.png', cssClass: 'magazine' }
  ];

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      if (this.carouselContainer && !this.isModalOpen) {
        const track = this.carouselContainer.nativeElement;
        // Scroll right by 350px (approx 1 card width)
        track.scrollBy({ left: 350, behavior: 'smooth' });

        // If reached the end, snap back to start
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
          setTimeout(() => track.scrollTo({ left: 0, behavior: 'smooth' }), 1000);
        }
      }
    }, 4000); // Auto scroll every 4 seconds
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  scrollLeft() {
    if (this.carouselContainer) {
      this.carouselContainer.nativeElement.scrollBy({ left: -350, behavior: 'smooth' });
      // Reset timer to not clash with manual input
      this.stopAutoScroll();
      this.startAutoScroll();
    }
  }

  scrollRight() {
    if (this.carouselContainer) {
      this.carouselContainer.nativeElement.scrollBy({ left: 350, behavior: 'smooth' });
      this.stopAutoScroll();
      this.startAutoScroll();
    }
  }

  openModal(project: any) {
    this.selectedProject = project;
    this.isModalOpen = true;
    this.stopAutoScroll(); // Pause carousel while inspecting
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
    this.startAutoScroll(); // Resume carousel
  }
}
