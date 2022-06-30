
import "./index.scss"

import Intro from "./sections/intro/Intro"
import Contact from "./sections/contact/Contact"
import Projects from "./sections/projects/Projects"
import Research from "./sections/research/Research"
import Skills from "./sections/skills/Skills"
import Work from "./sections/work/Work"

import InstagramLogo from "./assets/icons8-instagram-50.png"
import LinkedInLogo from "./assets/icons8-linkedin-50.png"
import MediumLogo from "./assets/icons8-medium-50.png"
import TwitterLogo from "./assets/icons8-twitter-50.png"
import GithubLogo from "./assets/icons8-github-30.png"

// Main App Container
function App() {
  return (
    <div id="site-container" className="App">
      <article>
        <Intro />
        <Work />
        <WaveContainer Selection={<Projects />} />
        <Research />
        <WaveContainer Selection={<Skills />} />
        <Contact />
      </article>
      <Footer />
    </div>
  )
}


// Wraps the component in a wavy design (from svg)
const WaveContainer = ({ Selection }) => {
  return (
    <>
      <div className="top-wave">
        <div className="wave-one"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8075FF" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,186.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>
        <div className="wave-two"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5a53ad" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,186.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>
        <div className="wave-overlay"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#222633" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,186.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>
      </div>
      {Selection}
      <div className="bottom-wave">
        <div className="wave-one"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#222633" fillOpacity="1" d="M0,128L48,106.7C96,85,192,43,288,64C384,85,480,171,576,176C672,181,768,107,864,101.3C960,96,1056,160,1152,170.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg></div>
        <div className="wave-two"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5a53ad" fillOpacity="1" d="M0,128L48,106.7C96,85,192,43,288,64C384,85,480,171,576,176C672,181,768,107,864,101.3C960,96,1056,160,1152,170.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg></div>
        <div className="wave-overlay"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8075FF" fillOpacity="1" d="M0,128L48,106.7C96,85,192,43,288,64C384,85,480,171,576,176C672,181,768,107,864,101.3C960,96,1056,160,1152,170.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg></div>
      </div>
    </>
  )
}

// Footer for bottom
const Footer = () => {
  return (
    <footer id="footer-wrapper">
      <ul id="social-media-links">
        
        <li className="social-media-wrapper">
          <a href="https://www.instagram.com/ErolBickici/" target="_blank" rel="noreferrer">
            <img className="social-media-icon" src={InstagramLogo}
              alt="instagram icon" />
          </a>
        </li>
        <li className="social-media-wrapper">
          <a href="https://twitter.com/ErolBickici" target="_blank" rel="noreferrer">
            <img className="social-media-icon" src={TwitterLogo}
              alt="twitter icon" />
          </a>
        </li>
        <li className="social-media-wrapper">
          <a href="https://www.linkedin.com/in/erol-bickici-9683a4183/" target="_blank" rel="noreferrer">
            <img className="social-media-icon" src={LinkedInLogo}
              alt="linkedin icon" />
          </a>
        </li>
        <li className="social-media-wrapper">
          <a href="https://medium.com/@ErolBickici" target="_blank" rel="noreferrer">
            <img className="social-media-icon" src={MediumLogo}
              alt="medium icon" />
          </a>
        </li>
        <li className="social-media-wrapper">
          <a href="https://github.com/Partisi" target="_blank" rel="noreferrer">
            <img className="social-media-icon" src={GithubLogo}
              alt="github icon" />
          </a>
        </li>
      </ul>
      <div id="math-bottom-wrapper">
        <p className="math-time">
          Designed and Coded by Erol with

            </p>
        <p className="math-formula">
          <a href="https://www.desmos.com/calculator/lncpsghko4" target="_blank" rel="noreferrer">
            $$(x^2 + y^2 - 1)^3 = x^2y^3$$
                </a>
        </p>
      </div>
      <p className="copyright-tag"> &#169; by Erol</p>
    </footer>
  )
}


export default App;
