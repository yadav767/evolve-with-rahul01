import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Offerings', href: '/offerings' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className='h-12 w-12 '>
            <img src="https://ik.imagekit.io/4e15dkbzg/favicon2.jpeg" className=' rounded-full h-full w-full object-center mix-blend-multiply' alt="" />
          </div>
          <span>Evolve With Rahul</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation