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

      <section className={styles['About']} id="about">
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

      <section className={styles['Objectives']} id="impact">
        <div className="container">
          <div className={styles['ObjectivesContent']}>
            <div className={styles['ObjectivesContentHeader']}>
              <h5>OUR OBJECTIVES</h5>
              <h2>THREE PILLARS OF IMPACT</h2>
            </div>

            <ul>
              <li>
                <h3>01</h3>
                <h4>National Identity</h4>
                <p>Promote a positive sense of national identity through creative expressions among Nigerian youths — organising events that celebrate the beauty, diversity and uniqueness of Nigeria.</p>
              </li>
              <li>
                <h3>02</h3>
                <h4>Democratic Participation</h4>
                <p>Strengthen democracy in Nigeria and improve citizens participation through civic engagement, political education, workshops and outreach programs.</p>
              </li>
              <li>
                <h3>03</h3>
                <h4>Human Capital</h4>
                <p>Empower youths and women through human capital development and socio-economic programs — training and mentorship programs that improve ability to contribute to national development.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles['Beginning']}>
        <div className="container">
          <div className={styles['BeginningHeader']}>
            <h5>WHERE IT ALL BEGAN</h5>
            <p>Lagos, Nigeria</p>
          </div>

          <div className={styles['BeginningContent']}>
            <p className={styles['BeginningContentBg']}>
              JULY 2019
            </p>

            <div className={styles['BeginningContentImage']}>
              <img src="/images/where-it-began-bg.jpg" alt="Greener Nigeria Initiative was founded in Lagos, Nigeria" />

              <div>
                <h1>
                  <span>JUL 17</span>
                  <br />
                  2019
                </h1>

                <p>THE DAY A VISION BECAME A MOVEMENT</p>
              </div>
            </div>

            <div className={styles['BeginningContentText']}>
              <p>
                A small group of young Nigerians in Lagos, led by <b>Akolawole Ezekiel</b>, made a move — following the conception of a vision born from the desire to change the narrative that projected Nigeria as a country whose people are disadvantaged just by being Nigerian.
              </p>

              <ul>
                <li>
                  <h5>01 - WHAT WE KNEW</h5>
                  <p>
                    Envisioning a great Nigeria seemed impracticable. Identifying as a Nigerian was becoming uncomfortable — both at home and abroad. Governance was failing and people were continually underserved.
                  </p>
                </li>
                <li>
                  <h5>02 - WHAT WE RESOLVED</h5>
                  <p>
                    Tap into the creativity and resourcefulness of Nigerian youths for grassroots development — opening strategic opportunities for young Nigerians to thrive and rebuild their own nation.
                  </p>
                </li>
                <li>
                  <h5>03 - HOW WE STARTED</h5>
                  <p>
                    "The Save Nigeria Campaign" — Sep 26th, 2019, Alimosho, Lagos. Youths arrived in national colours to celebrate identity through photography. The photos flooded social media on Independence Day.
                  </p>
                </li>
              </ul>

              <div className={styles['BeginningContentQuote']}>
                <p>
                  "We are on a journey of harnessing the power of citizenship and democratic infrastructure in fostering an improved sense of identity, ownership, and collective action towards the realisation of a <b>Greener Nigeria</b>"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
