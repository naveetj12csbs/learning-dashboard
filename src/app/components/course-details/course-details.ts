import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetails {

  course: any;

  constructor(
    private route: ActivatedRoute,
    public courseService: CourseService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.course = this.courseService.courses.find(
      course => course.id === id
    );
  }

  startCourse() {
    this.course.status = 'In Progress';
    alert('Course started');
  }

  continueCourse() {
    this.course.status = 'Completed';
    alert('Course completed');
  }

}