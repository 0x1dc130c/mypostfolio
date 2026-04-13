import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aboutme } from '../about/about';
import { Experience } from '../experience/experience';
import { ProjectAll } from '../project-all/project-all';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true, // อย่าลืมใส่ standalone ถ้าใช้รูปแบบนี้นะครับ
  imports: [CommonModule, Aboutme, Experience, ProjectAll],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  
  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out-cubic'
    });
  }

  scrollToProjects(event: Event) {
    event.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // 🌟 ข้อมูลส่วนตัวของคุณมาร์ค
  personalInfo = {
    name: 'Jakkid Canapan',
    role: 'Frontend Developer',
    description: 'ผมหลงใหลในการสร้างสรรค์ผลงานที่เรียบง่าย ใช้งานง่าย และตอบโจทย์ผู้ใช้งานด้วย Angular และ Tailwind',
    email: 'jakkid.ca@gmail.com',
    year: new Date().getFullYear()
  };

  // (ตัวแปร projects เราไม่ได้ใช้แล้วเพราะย้ายไปทำ Service แต่ถ้าจะเก็บไว้ก่อนก็ได้ครับ)
  projects = [];
}