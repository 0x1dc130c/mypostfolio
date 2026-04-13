import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetails } from '../../core/services/project-details'; // เช็ค Path ให้ตรงกับโฟลเดอร์ของคุณนะครับ

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
})
export class Experience implements OnInit {
  // สร้างตัวแปรมารองรับข้อมูล
  experiences: any[] = [];

  // 📌 เรียกใช้งาน Service (ใช้แบบ inject() ซึ่งเหมาะกับ Standalone Component)
  private projectService = inject(ProjectDetails);

  /* * หรือถ้าถนัดแบบ Constructor ก็สามารถใช้แบบนี้แทนบรรทัดบนได้ครับ:
   * constructor(private projectService: ProjectDetails) {}
   */

  ngOnInit() {
    // 📌 ดึงข้อมูลทั้งหมดจาก Service มาเก็บไว้ในตัวแปรตอนที่ Component เริ่มทำงาน
    this.experiences = this.projectService.getAllProjects();
  }
}