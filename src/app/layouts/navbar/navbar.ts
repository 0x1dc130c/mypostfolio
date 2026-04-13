import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  
  // 🌟 เพิ่มตัวแปรสำหรับคุมสถานะเมนูมือถือ
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  // 🌟 ฟังก์ชันสลับการเปิด/ปิดเมนู
  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollTo(event: Event, sectionId: string) {
    event.preventDefault();
    
    // 🌟 สั่งปิดเมนูมือถืออัตโนมัติทุกครั้งที่กดเลือกเมนู
    this.isMobileMenuOpen = false; 

    if (this.router.url === '/' || this.router.url.includes('/home')) {
      document.getElementById(sectionId)?.scrollIntoView(); 
    } else {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView();
        }, 300);
      });
    }
  }
}