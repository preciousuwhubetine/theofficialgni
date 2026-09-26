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
                <span>Ownership</span> of one's contribution to national development is the real power of a citizen. We exist to make that ownership real for every Nigerian.
              </p>
            </div>

            <div className={styles['HeroContentActions']}>
              <a href="#programs" className="btn btn-large btn-primary">
                See Our Programs
              </a>

              <Link to="#donate" className="btn btn-large btn-secondary">
                <span>
                  →
                </span>
                Join the Movement
              </Link>
            </div>

            <h2>
              DRIVING CHANGE.
              <br />
              COLLABORATING FORWARD.
            </h2>
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
          <img src="/images/who-we-are-image.jpg" className={styles['AboutContentImage']} alt="Young Nigerians in national colours" />
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

                  <p>Our goal is to empower young Nigerians by positioning them for active democratic participation and nation building.</p>
              </div>

              <div className={styles['AboutContentVision']}>
                <ul className={styles['AboutContentVisionList']}>
                  <li>
                    <h5>THE VISION</h5>
                    <h5>Habitual Citizens Participation</h5>
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
                <p>Promoting a positive sense of national identity through creative expressions among Nigerian youths — organising events that celebrate the beauty, diversity and uniqueness of Nigeria.</p>
              </li>
              <li>
                <h3>02</h3>
                <h4>Democratic Participation</h4>
                <p>Strengthening democracy in Nigeria and improve citizens participation through civic engagement, political education, workshops and outreach programs.</p>
              </li>
              <li>
                <h3>03</h3>
                <h4>Human Capital Development</h4>
                <p>Empowering youths and women through human capital development and socio-economic programs — training and mentorship programs that improve ability to contribute to national development.</p>
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

                <p>THE DAY A VISION WAS CONCEIVED</p>
              </div>
            </div>

            <div className={styles['BeginningContentText']}>
              <p>
                A small group of young Nigerians in Lagos, led by <b>Akolawole Ezekiel</b>, made a move — following the conception of a vision born from the desire to change the narrative that projected Nigeria as a country whose people are disadvantaged just by being Nigerian.
              </p>

              <ul>
                <li>
                  <h5>01 - THE PROBLEM WE FOUND</h5>
                  <p>
                    Envisioning a great Nigeria seemed impracticable. Identifying as a Nigerian was becoming uncomfortable — both at home and abroad. Governance was failing and people were continually underserved.
                  </p>
                </li>
                <li>
                  <h5>02 - OUR RESOLVE</h5>
                  <p>
                    To tap into the creativity and resourcefulness of Nigerian youths for grassroots development — opening strategic opportunities for young Nigerians to thrive and rebuild their own nation.
                  </p>
                </li>
                <li>
                  <h5>03 - HOW WE STARTED</h5>
                  <p>
                    "The Save Nigeria Campaign" — Sep 28th, 2019, Alimosho, Lagos. Youths arrived in national colours to celebrate identity through photography. The photos flooded social media on Independence Day.
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

      <section className={styles['Programs']} id="programs">
        <div className="container">
          <div className={styles['ProgramsContent']}>
            <div className={styles['ProgramsContentHeader']}>
              <h5>OUR MAIN PROGRAMS</h5>
              <h2>BUILDING NIGERIA, ONE PROGRAM AT A TIME</h2>
            </div>

            <ul>
              <li>
                <div className={styles['ProgramsContentImage']}>
                  <img src="/images/rcv.jpg" alt="RCV Campaign" />
                  <div>
                    <h4>REGISTER · COLLECT · VOTE</h4>
                  </div>
                </div>

                <div className={styles['ProgramsContentText']}>
                  <h3>The RCV Campaign</h3>

                  <p>
                    Mass advocacy against voter apathy, targeted community organising, PVC registration drives, civic programs, voter education, and mobilisation toward informed democratic participation across Nigeria.
                  </p>
                </div>
              </li>

              <li>
                <div className={styles['ProgramsContentImage']}>
                  <img src="/images/imaging-nigeria.jpg" alt="Imaging Nigeria Photoshoot Party" />

                  <div>
                    <h4>VISUAL STORYTELLING</h4>
                  </div>
                </div>

                <div className={styles['ProgramsContentText']}>
                  <h3>Imaging Nigeria Photoshoot Party</h3>

                  <p>
                    A youth-focused creativity and recreation program promoting community spirit among Nigerian youths. Celebrating the essence, resourcefulness, diversity and beauty of the Nigerian people through visual storytelling.
                  </p>
                </div>
              </li>

              <li>
                <div className={styles['ProgramsContentImage']}>
                  <img src="/images/the-greener-platform.jpg" alt="The Greener Platform" />

                  <div>
                    <h4>THE GREENER PLATFORM</h4>
                  </div>
                </div>

                <div className={styles['ProgramsContentText']}>
                  <h3>Greener Conversation Room</h3>

                  <p>
                    Our civic dialogue forum — bringing together thought leaders, active citizens, activists and youths for honest conversations on nation building, civic responsibility and good governance.
                  </p>
                </div>
              </li>

              <li>
                <div className={styles['ProgramsContentImage']}>
                  <img src="/images/school-advocacy.jpg" alt="The Greener Platform" />

                  <div>
                    <h4>SCHOOL ADVOCACY</h4>
                  </div>
                </div>

                <div className={styles['ProgramsContentText']}>
                  <h3>The Save Nigeria Campaign School Advocacy Project (SAP)</h3>

                  <p>
                    An advocacy initiative educating primary and secondary school students on Nigerian history, citizenship, and active participation, building a foundation for them to become responsible change agents in their communities.
                  </p>
                </div>
              </li>

              <li>
                <div className={styles['ProgramsContentImage']}>
                  <img src="/images/human-capital-development.jpg" alt="The Greener Platform" />

                  <div>
                    <h4>HUMAN CAPITAL DEVELOPMENT</h4>
                  </div>
                </div>

                <div className={styles['ProgramsContentText']}>
                  <h3>The BUILD Project</h3>

                  <p>
                    BUsiness, Innovation and Leadership Development (BUILD) is
                    GNI's human capital development lead program focusing on building capacity in young Nigerians, and strengthening the country’s working population with competitive skills in enterprise, career, innovation and leadership.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles['Impact']} id="impact">
        <div className={styles['ImpactBg']}>
          <img src="/images/impact-bg.jpg" alt="Greener Nigeria Initiative Impact" />
        </div>

        <div className={styles['ImpactHeader']}>
          <div className={styles['ImpactHeaderLeft']}>
            <h5>OUR MILESTONES</h5>
            <h2>
              7 YEARS OF <span>MEASURABLE</span> IMPACT
            </h2>
          </div>

          <div className={styles['ImpactHeaderRight']}>
            <p>
              From a single event in Alimosho, Lagos to a movement spanning 8 states and over one million Nigerians.
            </p>
          </div>
        </div>

        <div className={styles['ImpactContent']}>
          <div className={styles['ImpactContentGroup']}>
            <h5>TOTAL REACH</h5>
            <h1>1M+</h1>
            <p>Nigerians Reached</p>
          </div>
          <div className={styles['ImpactContentGroup']}>
            <h5>01</h5>
            <h2>7+</h2>
            <p>Years in Operation</p>
          </div>
          <div className={styles['ImpactContentGroup']}>
            <h5>02</h5>
            <h2>25+</h2>
            <p>Programs Delivered</p>
          </div>
          <div className={styles['ImpactContentGroup']}>
            <h5>03</h5>
            <h2>8</h2>
            <p>States Represented</p>
          </div>
          <div className={styles['ImpactContentGroup']}>
            <h5>04</h5>
            <h2><span>1,200+</span></h2>
            <p>Youths Physically Engaged</p>
          </div>
          <div className={styles['ImpactContentGroup']}>
            <h5>05</h5>
            <h2>9</h2>
            <p>Physical Events</p>
          </div>
          <div className={styles['ImpactContentGroup']}>
            <h5>06</h5>
            <h2>80+</h2>
            <p>Volunteers</p>
          </div>
        </div>

        <div className={styles['ImpactFooter']}>
          <div className={styles['ImpactFooterLeft']}>
            <span />
            <p>1,500+ Community Members · 4 Flagship Programs</p>
          </div>

          <a href="#programs">
            SEE OUR PROGRAMS →
          </a>
        </div>
      </section>
    </div>
  )
}

export default Homepage
