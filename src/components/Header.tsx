import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import { Moon, Sun, Code } from 'lucide-react';

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页', key: 'home' },
    { path: '/about', label: '关于我们', key: 'about' },
    { path: '/team', label: '团队', key: 'team' },
    { path: '/projects', label: '项目', key: 'projects' },
    { path: '/contact', label: '联系我们', key: 'contact' }
  ];

  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo">
          <Code className="logo-icon" />
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
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun className="toggle-icon" /> : <Moon className="toggle-icon" />}
          <span className="toggle-text">
            {isDarkMode ? '浅色' : '深色'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
