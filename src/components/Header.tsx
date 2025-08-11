import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: '首页', key: 'home' },
    { path: '/about', label: '关于我们', key: 'about' },
    { path: '/team', label: '团队', key: 'team' },
    { path: '/projects', label: '项目', key: 'projects' },
    // { path: '/contact', label: '联系我们', key: 'contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/favicon.ico" className="logo-icon" alt="稳健IT社 Logo" />
          <div className="logo-text">
            <span className="logo-main">稳健IT社</span>
            <span className="logo-sub">Wenjian IT</span>
          </div>
        </Link>
        
        {/* 移动端菜单按钮 */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* 导航菜单 */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.key} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* 移动端遮罩层 */}
        {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
};

export default Header;
