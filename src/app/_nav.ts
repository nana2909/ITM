import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Menu',
    url: '',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Department'
  },
  {
    name: 'Departments',
    url: '/Admin/department',
    icon: 'icon-folder'
  },
  {
    name: 'Streams',
    url: '/Admin/streams',
    icon: 'icon-drop'
  },
  {
    name: 'Fields',
    url: '/Admin/fields',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Courses',
    url: '/Admin/courses',
    icon: 'icon-docs'
  },
  {
    name: 'Faculty',
    url: '/Admin/faculty',
    icon: 'icon-user'
  },
  {
    name: 'Option Subjects',
    url: '/Admin/opsubject',
    icon: 'icon-calculator'
  },
  {
    name: 'Specialize Subjects',
    url: '/Admin/spesubject',
    icon: 'icon-calculator'
  },
  {
    title: true,
    name: 'Student'
  },
  {
    name: 'StudentAccount',
    url: '/Admin/studentAccount',
    icon: 'icon-star'
  },
  {
    name: 'Admission',
    url: '/Admin/admission',
    icon: 'icon-list'
  },
  {
    title: true,
    name: 'Additions'
  },
  {
    name: 'Facilities',
    url: '/Admin/facilities',
    icon: 'icon-home'
  },
  {
    name: 'Feedback',
    url: '/Admin/feedback',
    icon: 'icon-layers'
  },
];
