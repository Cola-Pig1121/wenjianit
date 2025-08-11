import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页', key: 'home' },
    { path: '/about', label: '关于我们', key: 'about' },
    { path: '/team', label: '团队', key: 'team' },
    { path: '/projects', label: '项目', key: 'projects' },
    { path: '/contact', label: '联系我们', key: 'contact' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/favicon.ico" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-main">稳健IT社</span>
            <span className="logo-sub">Wenjian IT</span>
          </div>
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.key} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
