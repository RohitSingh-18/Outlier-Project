import {
  HomeIcon,
  ChartBarIcon,
  MoonIcon,
  HeartIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard ', icon: <HomeIcon />, active: true },
  { label: 'Activity', icon: <ChartBarIcon /> },
  { label: 'Sleep', icon: <MoonIcon /> },
  { label: 'Heart Rate', icon: <HeartIcon /> },
  { label: 'Settings', icon: <CogIcon /> },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`sidebar-menu${expanded ? ' expanded' : ' collapsed'}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <nav className="sidebar-menu-nav">
        {navItems.map((item) => (
          <a
            href="#"
            key={item.label}
            className={`sidebar-menu-link${item.active ? ' active' : ''}`}
          >
            <span className="sidebar-menu-icon">{item.icon}</span>
            {expanded && <span className="sidebar-menu-label">{item.label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar; 