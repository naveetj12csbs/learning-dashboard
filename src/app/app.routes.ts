import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { CourseList } from './components/course-list/course-list';
import { CourseDetails } from './components/course-details/course-details';
import { AddCourse } from './components/add-course/add-course';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'courses', component: CourseList },
  { path: 'courses/:id', component: CourseDetails },
  { path: 'add-course', component: AddCourse }
];