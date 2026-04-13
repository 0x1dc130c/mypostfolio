import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectDetails } from '../../core/services/project-details'; 

@Component({
  selector: 'app-projects-detail',
  standalone: true,
  imports: [RouterLink], // 🌟 ใช้แค่ RouterLink ก็พอครับ
  templateUrl: './projects-detail.html',
  styleUrl: './projects-detail.css',
})
export class ProjectsDetail implements OnInit {
  project: any; 

  constructor(
    private route: ActivatedRoute, 
    private projectService: ProjectDetails 
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // ดึงข้อมูล
        this.project = this.projectService.getProjectDetails(id);
        
        // 🛠️ พิมพ์ค่าลง Console เพื่อเช็คว่าหาข้อมูลเจอไหม
        console.log('ID จาก URL:', id);
        console.log('ข้อมูลโปรเจกต์ที่หาเจอ:', this.project);
      }
    });
  }
}