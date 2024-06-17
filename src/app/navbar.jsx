import Link from 'next/link';
import { useState } from 'react';

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          MyLogo
        </Link>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
