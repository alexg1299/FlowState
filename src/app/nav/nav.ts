import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class NavComponent {
  menuOpen = false;
  navHidden = false;
  private lastScrollY = 0;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll')
  onScroll() {
    const currentY = window.scrollY;
    if (!this.menuOpen) {
      this.navHidden = currentY > this.lastScrollY && currentY > 64;
    }
    this.lastScrollY = currentY;
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: EventTarget | null) {
    if (window.scrollY > 64 && !this.el.nativeElement.contains(target)) {
      this.menuOpen = false;
      this.navHidden = true;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
