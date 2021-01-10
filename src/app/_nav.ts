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
    url: '/Admin/*/department',
    icon: 'icon-folder'
  },
  {
    name: 'Streams',
    url: '/Admin/*/stream',
    icon: 'icon-drop'
  },
  {
    name: 'Fields',
    url: '/Admin/*/field',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Courses',
    url: '/Admin/*/course',
    icon: 'icon-docs'
  },
  {
    name: 'Faculty',
    url: '/Admin/*/faculty',
    icon: 'icon-user'
  },
  {
    name: 'Subjects',
    url: '/Admin/*/subject',
    icon: 'icon-calculator'
  },
  {
    title: true,
    name: 'Student'
  },
  {
    name: 'StudentAccount',
    url: '/Admin/*/studentAccount',
    icon: 'icon-star'
  },
  {
    name: 'Admission',
    url: '/Admin/*/admission',
    icon: 'icon-list'
  },
  {
    title: true,
    name: 'Additions'
  },
  {
    name: 'Facilities',
    url: '/Admin/*/facilities',
    icon: 'icon-home'
  },
  {
    name: 'Feedback',
    url: '/Admin/*/feedback',
    icon: 'icon-layers'
  },
  {
    name: 'ContactUs',
    url: '/Admin/*/contactUs',
    icon: 'icon-envelope'
  },

  {
    name: 'Log Out',
    url: '/',
    icon: 'icon-ban',
    attributes: { disabled: true },
  },
];
