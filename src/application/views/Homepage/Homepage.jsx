import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Homepage = () => {
  return (
    <div className={styles['Homepage']}>
      <section className={styles['Hero']}>
        <div className={styles['HeroImage']}>
          <div />
          <img src="/images/homepage-hero-section-bg.jpg" alt="Young Nigerians in national colours" />
        </div>
        <div className="container">
          <div className={styles['HeroContent']}>
            <div className={styles['HeroContentText']}>
              <p className={styles['HeroContentTextEstablishment']}>
                <div />

                Est. Lagos, Nigeria — 2019
              </p>

              <h1>
                <span>GREENER</span>
                <br />
                <span>NIGERIA</span>
                <br />
                <span>INITIATIVE</span>
              </h1>

              <div className={styles['HeroContentDivider']}>
                <div />
                <p>GNI</p>
              </div>

              <p className={styles['HeroContentTextDescription']}>
                The most powerful form of empowerment a citizen can have is <span>"Ownership"</span>. We exist to make that ownership real for every Nigerian.
              </p>
            </div>

            <div className={styles['HeroContentActions']}>
              <Link to="#community" className="btn btn-large btn-primary">
                Discover Our Work
              </Link>

              <Link to="#donate" className="btn btn-large btn-secondary">
                <span>
                  →
                </span>
                Join the Movement
              </Link>
            </div>

            <ul className={styles['HeroContentImpact']}>
              <li>
                <h3>7+</h3>
                <p>Years Active</p>
              </li>
              <li>
                <h3>1M+</h3>
                <p>Nigerians Reached</p>
              </li>
              <li>
                <h3>8</h3>
                <p>States</p>
              </li>
              <li>
                <h3>80+</h3>
                <p>Volunteers</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles['Banner']}>
        <div className={styles['BannerContent']}>
          <p>COLLABORATION</p>
          <div />
          <p>INCLUSION</p>
          <div />
          <p>OPTIMISM</p>
          <div />
          <p>CREATIVITY</p>
          <div />
          <p>PROACTIVITY</p>
          <div />
          <p>COLLABORATION</p>
          <div />
          <p>INCLUSION</p>
          <div />
          <p>OPTIMISM</p>
          <div />
          <p>CREATIVITY</p>
          <div />
          <p>PROACTIVITY</p>
          <div />
          <p>COLLABORATION</p>
          <div />
          <p>INCLUSION</p>
          <div />
          <p>OPTIMISM</p>
          <div />
          <p>CREATIVITY</p>
          <div />
          <p>PROACTIVITY</p>
          <div />
          <p>COLLABORATION</p>
          <div />
          <p>INCLUSION</p>
          <div />
          <p>OPTIMISM</p>
          <div />
          <p>CREATIVITY</p>
          <div />
          <p>PROACTIVITY</p>
          <div />
          <p>COLLABORATION</p>
          <div />
          <p>INCLUSION</p>
          <div />
          <p>OPTIMISM</p>
          <div />
          <p>CREATIVITY</p>
          <div />
          <p>PROACTIVITY</p>
          <div />
          <p>COLLABORATION</p>
          <div />
          <p>INCLUSION</p>
          <div />
          <p>OPTIMISM</p>
          <div />
          <p>CREATIVITY</p>
          <div />
          <p>PROACTIVITY</p>
          <div />
          <p>COLLABORATION</p>
          <div />
          <p>INCLUSION</p>
          <div />
          <p>OPTIMISM</p>
          <div />
          <p>CREATIVITY</p>
          <div />
          <p>PROACTIVITY</p>
          <div />
          <p>COLLABORATION</p>
          <div />
          <p>INCLUSION</p>
          <div />
          <p>OPTIMISM</p>
          <div />
          <p>CREATIVITY</p>
          <div />
          <p>PROACTIVITY</p>
          <div />
        </div>
      </section>
    </div>
  )
}

export default Homepage
