import {
  AboutPage,
  ContactPage,
  HomePage,
  ProjectsPage,
} from '../pages/index.js';

export const navBarMenu = [
  {
    id: 0,
    path: '/',
    title: 'Home',
    element: <HomePage />,
  },
  {
    id: 1,
    path: '/about',
    title: 'About',
    element: <AboutPage />,
  },
  {
    id: 2,
    path: '/projects',
    title: 'Projects',
    element: <ProjectsPage />,
  },
  {
    id: 3,
    path: '/contact',
    title: 'Contact',
    element: <ContactPage />,
  },
];
