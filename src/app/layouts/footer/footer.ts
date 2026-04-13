import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], // จำเป็นต้องเพิ่ม CommonModule สำหรับ *ngIf
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  
  personalInfo = {
    name: 'Jakkrit Kanapan', // ปรับตัวสะกดให้ถูกต้อง
    role: 'Frontend Developer',
    description: 'ผมหลงใหลในการสร้างสรรค์ผลงานที่เรียบง่าย ใช้งานง่าย และตอบโจทย์ผู้ใช้งานด้วย Angular และ Tailwind',
    email: 'jakkid.ca@gmail.com',
    year: new Date().getFullYear(),
    socialLinks: {
      github: 'https://github.com/0x1dc130c',
      // linkedin: 'https://linkedin.com/in/yourusername' 
    }
  };

  // ตัวแปรสำหรับเก็บสถานะว่า Copy สำเร็จหรือยัง
  isCopied = false;

  // ฟังก์ชันสำหรับคัดลอกข้อความ
  copyEmail() {
    navigator.clipboard.writeText(this.personalInfo.email).then(() => {
      this.isCopied = true; // เปลี่ยนสถานะเพื่อแสดงข้อความว่า Copy แล้ว
      
      // ให้ปุ่มกลับมาเป็นเหมือนเดิมหลังจากผ่านไป 2 วินาที
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);
    }).catch(err => {
      console.error('ไม่สามารถคัดลอกได้: ', err);
    });
  }
}