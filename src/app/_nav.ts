import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'ITM College',
    url: '',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Department'
  },
  {
    name: 'Departments',
    url: '/AdminRole/admin/department',
    icon: 'icon-folder'
  },
  {
    name: 'Streams',
    url: '/AdminRole/admin/stream',
    icon: 'icon-drop'
  },
  {
    name: 'Fields',
    url: '/AdminRole/admin/field',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Courses',
    url: '/AdminRole/admin/course',
    icon: 'icon-docs'
  },
  {
    name: 'Faculty',
    url: '/AdminRole/admin/faculty',
    icon: 'icon-user'
  },
  {
    name: 'Subjects',
    url: '/AdminRole/admin/subject',
    icon: 'icon-calculator'
  },
  {
    title: true,
    name: 'Student'
  },
  {
    name: 'StudentAccount',
    url: '/AdminRole/admin/studentAccount',
    icon: 'icon-star'
  },
  {
    name: 'Admission',
    url: '/AdminRole/admin/admission',
    icon: 'icon-list'
  },
  {
    title: true,
    name: 'Additions'
  },
  {
    name: 'Facilities',
    url: '/AdminRole/admin/facilities',
    icon: 'icon-home'
  },
  {
    name: 'Feedback',
    url: '/AdminRole/admin/feedback',
    icon: 'icon-layers'
  },
  {
    name: 'ContactUs',
    url: '/AdminRole/admin/contactUs',
    icon: 'icon-envelope'
  },

  {
    name: 'Log Out',
    url: '/',
    icon: 'icon-ban',
    attributes: { disabled: true },
  },
];
