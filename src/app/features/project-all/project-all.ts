import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from '../../core/services/project-details';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-all',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-all.html',
  styleUrl: './project-all.css',
})
export class ProjectAll implements OnInit {
  
  // 1. สร้างตัวแปรมารับชุดข้อมูล
  projects: any[] = [];

  // 2. 🌟 นำ Service เข้ามาทาง constructor
  constructor(private projectService: ProjectDetails) {}

  ngOnInit() {
    // 3. พอหน้าเว็บโหลดปุ๊บ ให้ดึงข้อมูลจาก Service มาใส่ตัวแปร projects
    this.projects = this.projectService.getAllProjects();
  }

}