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

      <section className={styles['About']}>
        <div className={styles['AboutHeader']}>
          <div className="container">
            <div className={styles['AboutHeaderContent']}>
              <h5>WHO WE ARE</h5>
              <p>FORWARD IMPACT FOR DEVELOPMENT IN AFRICA</p>
            </div>
          </div>
        </div>

        <div className={styles['AboutContent']}>
          <img src="/images/homepage-hero-section-bg.jpg" className={styles['AboutContentImage']} alt="Young Nigerians in national colours" />
          <div className="container">
            <div className={styles['AboutContentMain']}>
              <div className={styles['AboutContentText']}>
                <div className={styles['AboutContentTextHeader']}>
                  <h2>
                    BUILDING THE<br /> BRIDGE TO A <br /> <span>WORKING NIGERIA</span>
                  </h2>

                  <p>
                    Greener Nigeria Initiative (GNI) is the pilot solution design at <b>Forward Impact for Development in Africa (FIDA)</b> — created to be the bridge between everyday Nigerians and the realisation of a working Nigeria.
                  </p>
                </div>

                  <p>Our goal is to empower young Nigerians by positioning them for active democratic participation and nation building — one community at a time.</p>
              </div>

              <div className={styles['AboutContentVision']}>
                <ul className={styles['AboutContentVisionList']}>
                  <li>
                    <h5>THE VISION</h5>
                    <h5>Habitual Citizenship</h5>
                    <p>
                      A Nigeria where citizens participation is habitual and development aligns with public needs.
                    </p>
                  </li>
                  <li>
                    <h5>THE MISSION</h5>
                    <h5>Grassroots Development</h5>
                    <p>
                      Facilitating grassroots development through creativity, human capital development and civic engagement.
                    </p>
                  </li>
                </ul>

                <hr />

                <ul className={styles['AboutContentVisionTags']}>
                  <li>OPTIMISM</li>
                  <li>CREATIVITY</li>
                  <li>PROACTIVITY</li>
                  <li>COLLABORATION</li>
                  <li>INCLUSION</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
