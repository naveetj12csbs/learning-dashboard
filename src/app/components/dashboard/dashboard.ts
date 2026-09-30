import { Component } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(public courseService: CourseService) {
  }

  getCompleted() {
    return this.courseService.courses.filter(
      course => course.status === 'Completed'
    ).length;
  }

  getInProgress() {
    return this.courseService.courses.filter(
      course => course.status === 'In Progress'
    ).length;
  }

  getNotStarted() {
    return this.courseService.courses.filter(
      course => course.status === 'Not Started'
    ).length;
  }

}