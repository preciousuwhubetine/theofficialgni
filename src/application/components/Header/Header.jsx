
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
      <div className={styles["TopBar"]}>
        <div className="container">
          <div className={styles['TopBarContent']}>
            <p>www.theofficialgni.ng</p>

            <div>
              <p>IG · FB · X · TikTok: @theofficialgni</p>
              <span />
              <p>theofficialgni@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['HeaderMain']}>
        <div className="container">
          <div className={styles['HeaderContent']}>
            <div className={styles['Logo']}>
              <img src="/images/logo-light.png" alt="GNI Logo" />
            </div>

            <nav className={styles['HeaderNav']}>
              <ul>
                <li>
                  <Link to="#about">
                    ABOUT
                    <span />
                  </Link>
                </li>
                <li>
                  <Link to="#programs">
                    PROGRAMS
                    <span />
                  </Link>
                </li>
                <li>
                  <Link to="#impact">
                    IMPACT
                    <span />
                  </Link>
                </li>
                <li>
                  <Link to="#impact">
                    BLOG
                    <span />
                  </Link>
                </li>
                <li>
                  <Link to="#impact">
                    RESOURCES
                    <span />
                  </Link>
                </li>
              </ul>
            </nav>

            <div className={styles['HeaderActions']}>
              <Link to="#community">JOIN US</Link>
              <span />
              <Link to="#donate" className="btn btn-primary">
                Donate

                <span>↗</span>
              </Link>
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
                <Link to="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link to="#programs" onClick={() => setIsMenuOpen(false)}>
                  Programs
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link to="#impact" onClick={() => setIsMenuOpen(false)}>
                  Impact
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link to="#blog" onClick={() => setIsMenuOpen(false)}>
                  Blog
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link to="#resources" onClick={() => setIsMenuOpen(false)}>
                  Resources
                  <span>→</span>
                </Link>
              </li>
            </ul>

            <div className={styles['HeaderMenuActions']}>
              <Link to="#community" className="btn btn-tertiary">
                Join Us
              </Link>

              <Link to="#donate" className="btn btn-primary">
                Donate

                <span>↗</span>
              </Link>
            </div>
          </div>
        )
      }
    </header>
  )
}

export default Header
