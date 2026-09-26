import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles['Footer']}>
      <div className="container">
        <div className={styles['FooterTop']}>
          <div className={styles['FooterLeft']}>
            <Link to="/" className={styles['Logo']}>
              <img src="/images/logo-light.png" alt="GNI Logo" />
            </Link>

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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                    <defs>
                      <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stop-color="#fdf497" />
                        <stop offset="5%" stop-color="#fdf497" />
                        <stop offset="45%" stop-color="#fd5949" />
                        <stop offset="60%" stop-color="#d6249f" />
                        <stop offset="90%" stop-color="#285AEB" />
                      </radialGradient>
                    </defs>

                    <rect width="24" height="24" rx="6" ry="6" fill="url(#ig-gradient)" />

                    <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" ry="4.5" />
                      <circle cx="12" cy="12" r="3.7" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="#ffffff" stroke="none" />
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.x.com/theofficialgni/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                    <rect width="24" height="24" rx="5" ry="5" fill="#000000" />

                    <path fill="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/theofficialgni/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                    <rect width="24" height="24" rx="5" ry="5" fill="#1877F2" />

                    <path fill="#ffffff" d="M15.12 20.5v-6.02h2.02l.3-2.34h-2.32V10.6c0-.68.19-1.14 1.16-1.14h1.24V7.37c-.22-.03-.97-.1-1.85-.1-1.83 0-3.08 1.12-3.08 3.18v1.72H10.5v2.34h2.09V20.5h2.53z"/>
                  </svg>

                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/greener-nigeria-initiative/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                    <rect width="24" height="24" rx="5" ry="5" fill="#0A66C2" />

                    <path fill="#ffffff" d="M7.371 8.879h2.825v8.528H7.371V8.879zm1.413-4.52a1.637 1.637 0 1 0 0 3.273 1.637 1.637 0 0 0 0-3.273zm3.743 4.52h2.704v1.168h.039c.377-.714 1.298-1.468 2.674-1.468 2.863 0 3.393 1.886 3.393 4.339v5.489h-2.825v-4.868c0-1.161-.022-2.655-1.618-2.655-1.62 0-1.868 1.264-1.868 2.57v4.953h-2.825V8.879z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@theofficialgni" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                    <rect width="24" height="24" rx="5" ry="5" fill="#000000" />

                    <path fill="#ffffff" d="M19.589 6.686a7.518 7.518 0 0 1-4.32-1.364V12.9a5.352 5.352 0 1 1-5.352-5.352c.315 0 .622.031.921.09v2.247a3.142 3.142 0 1 0 2.213 2.989V2.25h2.247a7.518 7.518 0 0 0 4.301 4.436z"/>
                  </svg>
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
                  Objectives and Impact
                </a>
              </li>
              <li>
                <a href="#milestones">
                  <span />
                  Milestones
                </a>
              </li>
            </ul>
          </div>

          <div className={styles['FooterSection']}>
            <h4>RESOURCES</h4>

            <ul>
              <li>
                <a href="#programs">
                  <span />
                  Upcoming Programs
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/EE0T4W6cXBg7ATpILd1vyb" target="_blank" rel="noopener noreferrer">
                  <span />
                  Join Community
                </a>
              </li>
              {/* <li>
                <a href="#donate">
                  <span />
                  Donate
                </a>
              </li> */}
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
