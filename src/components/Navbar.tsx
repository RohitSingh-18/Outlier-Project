import { BellIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'Dashboard', active: true },
  { label: 'Reports' },
  { label: 'Calendar' },
];

const Navbar = () => {
  return (
    <nav className="navbar-ui">
      <div className="navbar-left">
        <div className="navbar-logo">{/* Replace with logo if you have one */}
          <span className="navbar-logo-circle">M</span>
          <span className="navbar-appname">MedicalMagic</span>
        </div>
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`navbar-link${link.active ? ' active' : ''}`}
            >
              {link.label}
            </a>
          ))}
            </div>
          </div>
      <div className="navbar-right">
        <button className="navbar-icon-btn">
          <BellIcon style={{ width: 22, height: 22 }} />
            </button>
        <div className="navbar-avatar">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 