
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles['Header']}`);
      if (window.scrollY > 80) {
        header.classList.add(styles['HeaderScrolled']);
      } else {
        header.classList.remove(styles['HeaderScrolled']);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header className={styles['Header']}>
      <div className={styles['HeaderMain']}>
        <div className="container">
          <div className={styles['HeaderContent']}>
            <Link to="/" className={styles['Logo']}>
              <img src="/images/logo-light.png" alt="GNI Logo" />
            </Link>

            <nav className={styles['HeaderNav']}>
              <ul>
                <li>
                  <a href="#about">
                    ABOUT
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#programs">
                    PROGRAMS
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#impact">
                    OBJECTIVES AND IMPACT
                    <span />
                  </a>
                </li>
              </ul>
            </nav>

            <div className={styles['HeaderActions']}>
              <a href="https://chat.whatsapp.com/EE0T4W6cXBg7ATpILd1vyb" target="_blank" rel="noopener noreferrer">
                JOIN US
              </a>
              <span />
              <a href="#donate" className="btn btn-primary">
                Donate

                <span>↗</span>
              </a>
            </div>

            <button className={styles['HeaderMenuButton']} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {
                isMenuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="15" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )
              }
            </button>
          </div>
        </div>
      </div>

      {
        isMenuOpen && (
          <div className={styles['HeaderMenu']}>
            <ul>
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                  <span>→</span>
                </a>
              </li>
              <li>
                <a href="#programs" onClick={() => setIsMenuOpen(false)}>
                  Programs
                  <span>→</span>
                </a>
              </li>
              <li>
                <a href="#impact" onClick={() => setIsMenuOpen(false)}>
                  Objectives and Impact
                  <span>→</span>
                </a>
              </li>
            </ul>

            <div className={styles['HeaderMenuActions']}>
              <a href="https://chat.whatsapp.com/EE0T4W6cXBg7ATpILd1vyb" className="btn btn-tertiary" target="_blank" rel="noopener noreferrer">
                Join Us
              </a>

              {/* <a href="#donate" className="btn btn-primary">
                Donate

                <span>↗</span>
              </a> */}
            </div>
          </div>
        )
      }
    </header>
  )
}

export default Header
