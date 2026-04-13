import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class Aboutme {
  aboutData = {
    title: 'เกี่ยวกับฉัน',
    description1: 'ผมเป็นนักพัฒนาซอฟต์แวร์ที่มีประสบการณ์ทั้งฝั่ง Web Application และ Desktop Application งานหลักของผมคือการพัฒนา Frontend ด้วย Angular และ Tailwind CSS ควบคู่ไปกับการใช้ Python เพื่อสร้างระบบสำหรับโรงงานอุตสาหกรรม',
    description2: 'ผมเน้นการเขียนโค้ดเพื่อแก้ปัญหาให้ตรงกับความต้องการของผู้ใช้งานจริง ทั้งในเรื่องของการออกแบบ UI ที่ใช้งานง่าย และการจัดการระบบหลังบ้านให้ทำงานได้อย่างเสถียร เวลาว่างผมมักจะศึกษาเทคโนโลยีใหม่ๆ เพื่อนำมาปรับปรุงการทำงานของตัวเองให้ดีขึ้น'
  };
  // รายการทักษะ (Skills)
  // 🌟 จัดหมวดหมู่ให้ดูเป็นมืออาชีพและอ่านง่ายขึ้น
  skillGroups = [
    {
      category: 'Frontend Development',
      items: ['Angular', 'TypeScript / JavaScript', 'Tailwind CSS', 'RxJS', 'HTML5 & CSS3']
    },
    {
      category: 'Backend & Mobile',
      items: ['Python', 'Nest.js', '.NET core', 'Flutter']
    },
    {
      category: 'Tools & Methodologies',
      items: ['Git & GitHub', 'Agile / Scrum', 'Responsive Design', 'AI Tools (Copilot/Gemini)']
    }
  ];
}
