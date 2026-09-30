import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [
    {
      id: 1,
      name: 'Angular Basics',
      description: 'Learn Angular basics',
      duration: '4 hours',
      lessons: 8,
      status: 'Completed'
    },
    {
      id: 2,
      name: 'TypeScript Basics',
      description: 'Learn TypeScript basics',
      duration: '3 hours',
      lessons: 6,
      status: 'In Progress'
    },
    {
      id: 3,
      name: 'HTML and CSS',
      description: 'Learn HTML and CSS',
      duration: '5 hours',
      lessons: 10,
      status: 'Completed'
    },
    {
      id: 4,
      name: 'JavaScript Basics',
      description: 'Learn JavaScript basics',
      duration: '4 hours',
      lessons: 8,
      status: 'Not Started'
    },
    {
      id: 5,
      name: 'Git and GitHub',
      description: 'Learn Git and GitHub',
      duration: '2 hours',
      lessons: 5,
      status: 'In Progress'
    },
    {
      id: 6,
      name: 'Responsive Design',
      description: 'Learn responsive web design',
      duration: '3 hours',
      lessons: 7,
      status: 'Not Started'
    }
  ];

}