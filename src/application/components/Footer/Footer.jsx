import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles['Footer']}>
      <div className="container">
        <div className={styles['FooterTop']}>
          <div className={styles['FooterLeft']}>
            <div className={styles['Logo']}>
              <img src="/images/logo-light.png" alt="GNI Logo" />
            </div>

            <h2>
              CITIZENSHIP.
              <br />
              OWNERSHIP.
              <br />
              <span>ACTION.</span>
            </h2>

            <p>
              Facilitating grassroots development in Nigeria through creativity, human capital development and civic engagement since 2019.
            </p>

            <ul>
              <li>
                <a href="https://www.instagram.com/theofficialgni/" target="_blank" rel="noopener noreferrer">
                  IG
                </a>
              </li>
              <li>
                <a href="https://www.x.com/theofficialgni/" target="_blank" rel="noopener noreferrer">
                  X
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/theofficialgni/" target="_blank" rel="noopener noreferrer">
                  FB
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@theofficialgni" target="_blank" rel="noopener noreferrer">
                  Tiktok
                </a>
              </li>
            </ul>
          </div>

          <div className={styles['FooterSection']}>
            <h4>ORGANIZATION</h4>

            <ul>
              <li>
                <a href="#about">
                  <span />
                  About GNI
                </a>
              </li>
              <li>
                <a href="#programs">
                  <span />
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#impact">
                  <span />
                  Impact & Milestones
                </a>
              </li>
              <li>
                <a href="#board">
                  <span />
                  Executive Board
                </a>
              </li>
              <li>
                <a href="#volunteer">
                  <span />
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          <div className={styles['FooterSection']}>
            <h4>RESOURCES</h4>

            <ul>
              <li>
                <Link to="/blog">
                  <span />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources">
                  <span />
                  Resources
                </Link>
              </li>
              <li>
                <a href="#programs">
                  <span />
                  Upcoming Programs
                </a>
              </li>
              <li>
                <a href="community">
                  <span />
                  Join Community
                </a>
              </li>
              <li>
                <a href="#donate">
                  <span />
                  Donate
                </a>
              </li>
            </ul>
          </div>

          <div className={styles['FooterSection']}>
            <h4>CONTACT</h4>

            <div className={styles['ContactInfo']}>
              <h5>PHONE</h5>
              <p>
                <a href="tel:+234 812 639 0089">+234 812 639 0089</a>
              </p>
            </div>

            <div className={styles['ContactInfo']}>
              <h5>EMAIL</h5>
              <p>
                <a href="mailto:theofficialgni@gmail.com">theofficialgni@gmail.com</a>
              </p>
            </div>

            <div className={styles['ContactInfo']}>
              <h5>SOCIAL</h5>
              <p>
                @theofficialgni
              </p>
            </div>

            <a className={`${styles['ContactInfoButton']} btn btn-primary`} href="mailto:theofficialgni@gmail.com">
              Get in Touch&nbsp;&nbsp;↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
