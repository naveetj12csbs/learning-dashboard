import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-add-course',
  imports: [FormsModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css'
})
export class AddCourse {

  name = '';
  description = '';
  duration = '';
  lessons = 0;
  status = 'Not Started';

  constructor(public courseService: CourseService) {
  }

  addCourse() {

    if (this.name && this.description && this.duration && this.lessons > 0) {

      this.courseService.courses.push({
        id: this.courseService.courses.length + 1,
        name: this.name,
        description: this.description,
        duration: this.duration,
        lessons: this.lessons,
        status: this.status
      });

      alert('Course added successfully');

      this.name = '';
      this.description = '';
      this.duration = '';
      this.lessons = 0;
      this.status = 'Not Started';

    } else {

      alert('Please fill all fields');

    }

  }

}

