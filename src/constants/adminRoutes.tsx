import { FaRegEdit, FaCog, FaSignOutAlt } from 'react-icons/fa';

export const adminRoutes = [
  {
    icon: <FaRegEdit />,
    text: 'Admin Management',
    link: '/',
  },

  {
    icon: <FaCog />,
    text: 'Settings',
    link: '/404',
    more: [
      {
        icon: <FaCog />,
        text: 'Change Password',
        link: '/settings',
      },
      {
        icon: <FaCog />,
        text: 'Delete Account',
        link: '/settings/delete-account',
      },
      {
        icon: <FaCog />,
        text: 'Notification Settings',
        link: '/settings/notification-settings',
      },
      {
        icon: <FaCog />,
        text: '2FA',
        link: '/settings/two-factor-authentication',
      },
    ],
  },
  {
    icon: <FaSignOutAlt />,
    text: 'Logout',
    link: '/patient-dashboard/logout',
  },
];
