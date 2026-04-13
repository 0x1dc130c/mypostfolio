import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetails {
  
  // 📌 นำข้อมูลมาเก็บไว้เป็นตัวแปรหลัก พร้อมคำอธิบายที่ละเอียดขึ้น
  private projects = [
    {
      id: 'toyota-defogger',
      title: 'Defogger Thermal (Desktop Application)',
      role: 'Python Developer (Freelance)',
      company: 'THAI TECHNOLOGY & SOLUTIONS CO., LTD. (Vendor for TOYOTA)',
      period: 'มกราคม 2026 - ปัจจุบัน',
      type: 'freelance',
      imageUrl: 'assets/images/projects/defogger/defogger-1.jpg',
      technologies: ['Python', 'Desktop GUI', 'OCR', 'Inno Setup'],
      link: '',
      description: {
        overview: 'พัฒนาระบบ Desktop Application สำหรับตรวจสอบคุณภาพกระจกรถยนต์ (Defogger) ด้วยกล้องตรวจจับความร้อน (Thermal Camera) และระบบสแกน QR Code เพื่อประมวลผลและส่งมอบงานให้ Toyota Motor Thailand',
        responsibilities: [
          'เชื่อมต่อและประมวลผลข้อมูลจากกล้องจับความร้อน (DIGICON ITC-221) ร่วมกับระบบ OCR เพื่อตรวจสอบสถานะชิ้นงาน (PASS/OK/NG)',
          'พัฒนาระบบสแกน QR Code เพื่อจัดการลอจิกการทำงาน เช่น เมื่อสแกนคำสั่ง "RESET" ระบบจะแสดงสถานะ "NC" และจัดการข้อมูลโดยไม่บันทึกภาพ',
          'ออกแบบระบบ Enterprise Middleware API เพื่อค้นหาหมายเลข VIN จาก Log และส่งข้อมูลเข้าสู่ระบบส่วนกลางของ TOYOTA (DIAS)',
          'จัดการเรื่อง Software Protection และสร้างตัวติดตั้ง (Installer) ด้วย Inno Setup พร้อมตั้งค่า Registry ให้โปรแกรมทำงานอัตโนมัติเมื่อเปิดเครื่อง'
        ]
      }
    },
    {
      id: 'my-friend-shop',
      title: 'My Friend Shop (E-commerce & Back-office)',
      role: 'Web Developer (Freelance)',
      company: 'My Friend Shop',
      period: 'มกราคม 2026 - ปัจจุบัน',
      type: 'freelance',
      imageUrl: 'assets/images/projects/myfriend/myfriend-1.png',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript', 'Node.js'],
      link: '',
      description: {
        overview: 'รับหน้าที่พัฒนาเว็บไซต์ E-commerce แบบครบวงจรสำหรับธุรกิจจัดจำหน่ายสมาร์ทโฟน รวมถึงระบบจัดการหลังบ้าน (Back-office) ที่ช่วยให้แอดมินบริหารจัดการร้านค้าได้อย่างมีประสิทธิภาพ',
        responsibilities: [
          'พัฒนา Front-end ของเว็บไซต์ฝั่งผู้ใช้งาน (Storefront) ให้รองรับการแสดงผลทุกหน้าจอ (Responsive Design)',
          'ออกแบบและพัฒนาระบบ Back-office สำหรับจัดการข้อมูลสินค้า สต็อกคงคลัง และตรวจสอบธุรกรรมการสั่งซื้อ',
          'พัฒนาระบบคำนวณและจัดการการผ่อนชำระสินค้าสำหรับลูกค้า'
        ]
      }
    },
    {
      id: 'r2c-web-app',
      title: 'Enterprise Web Application',
      role: 'Web Developer',
      company: 'Ready to connect (R2C)',
      period: 'มีนาคม 2025 - ธันวาคม 2025',
      type: 'work',
      imageUrl: 'assets/images/projects/captive-portal/captive-portal-1.png',
      technologies: ['Angular 20', 'Tailwind CSS', 'NestJS'],
      link: '',
      description: {
        overview: 'พัฒนาระบบ Enterprise Web Application โดยนำเทคโนโลยีสมัยใหม่มาประยุกต์ใช้ในการสร้างระบบที่รองรับการจัดการข้อมูลจำนวนมากและตอบโจทย์กระบวนการทางธุรกิจ',
        responsibilities: [
          'พัฒนา Front-end ฝั่ง Web Application ด้วย Angular 20 และออกแบบ UI Component ด้วย Tailwind CSS',
          'พัฒนาระบบจัดการผู้ใช้งาน โดยเน้นการใช้ Role-based access ที่เข้าใจง่ายและลดความซับซ้อนของโครงสร้างสิทธิ์ (Permissions)',
          'พัฒนาและเชื่อมต่อบริการ Middleware API Service โดยมีการใช้งานร่วมกับเทคโนโลยีฝั่ง Backend ทั้ง NestJS, FastAPI และ .NET (C#)'
        ]
      }
    },
    {
      id: 'r2c-mobile-intern',
      title: 'Mobile Application',
      role: 'Mobile Developer (Intern)',
      company: 'Ready to connect (R2C)',
      period: 'พฤษภาคม 2024 - สิงหาคม 2024',
      type: 'intern',
      imageUrl: '',
      technologies: ['Flutter', 'Dart', 'Mobile UI'],
      link: '',
      description: {
        overview: 'เข้าร่วมทีมพัฒนาแอปพลิเคชันบนมือถือในช่วงฝึกงาน เพื่อเรียนรู้กระบวนการทำงานจริงแบบ Agile และมีส่วนร่วมในการพัฒนาฟีเจอร์ต่างๆ',
        responsibilities: [
          'เรียนรู้และพัฒนา Mobile Application ด้วยเทคโนโลยีที่กำหนด',
          'ทำงานร่วมกับทีมพัฒนาเพื่อแก้ไข Bug และปรับปรุงประสิทธิภาพของแอปพลิเคชัน',
          'แปลง Design จากหน้า UI/UX มาเป็นโค้ดที่สามารถใช้งานได้จริง'
        ]
      }
    },
    {
      id: 'r2c-python',
      title: 'Software Development',
      role: 'Python Developer (Freelance)',
      company: 'Ready to connect (R2C)',
      period: 'พฤษภาคม 2023 - ธันวาคม 2023',
      type: 'freelance',
      imageUrl: '',
      technologies: ['Python', 'Desktop Application'],
      link: '',
      description: {
        overview: 'รับงานอิสระในการพัฒนาซอฟต์แวร์และ Desktop Application ด้วยภาษา Python ตาม Requirement เพื่อใช้งานเฉพาะทางภายในองค์กร',
        responsibilities: [
          'เขียนโปรแกรมด้วย Python สำหรับระบบงาน Desktop Application',
          'ออกแบบและพัฒนา GUI ให้ผู้ใช้สามารถโต้ตอบกับระบบได้ง่ายและมีประสิทธิภาพ',
          'ทดสอบความถูกต้องของโปรแกรมก่อนส่งมอบงาน'
        ]
      }
    },
    {
      id: 'bu-degree',
      title: 'Bachelor of Computer Science',
      role: 'Student',
      company: 'Bangkok University',
      period: '2020 - 2024',
      type: 'education',
      imageUrl: '',
      technologies: ['Computer Science', 'Algorithms', 'Data Structures'],
      link: '',
      description: {
        overview: 'สำเร็จการศึกษาระดับปริญญาตรี คณะวิทยาการคอมพิวเตอร์ (Information Technology and Innovation) มหาวิทยาลัยกรุงเทพ',
        responsibilities: [
          'เรียนรู้และประยุกต์ใช้ทักษะด้านการเขียนโปรแกรมเชิงวัตถุ (OOP) และโครงสร้างข้อมูล',
          'ทำโปรเจกต์จบและโครงงานต่างๆ ที่เน้นการนำเทคโนโลยีมาแก้ปัญหา',
          'ได้รับทักษะพื้นฐานที่แข็งแกร่งสำหรับการต่อยอดในสายอาชีพ Full-Stack และ Software Development'
        ]
      }
    }
  ];

  getProjectDetails(id: string) {
    return this.projects.find(project => project.id === id);
  }

  getAllProjects() {
    return this.projects;
  }
}