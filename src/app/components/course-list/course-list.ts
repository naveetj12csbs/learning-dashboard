import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  imports: [RouterLink, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  search = '';
  status = 'All';
  sort = 'name';

  constructor(public courseService: CourseService) {
  }

  getCourses() {

    let courses = this.courseService.courses.filter(course => {

      const matchesSearch =
        course.name.toLowerCase().includes(this.search.toLowerCase());

      const matchesStatus =
        this.status === 'All' || course.status === this.status;

      return matchesSearch && matchesStatus;

    });

    if (this.sort === 'name') {
      courses.sort((a, b) => a.name.localeCompare(b.name));
    }

    return courses;
  }

}