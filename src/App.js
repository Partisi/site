
import "./index.scss"

import Intro from "./sections/intro/Intro"
import Contact from "./sections/contact/Contact"
import Projects from "./sections/projects/Projects"
import Research from "./sections/research/Research"
import Skills from "./sections/skills/Skills"
import Work from "./sections/work/Work"


function App() {
  return (
    <div className="App">


      <article>
        <Intro />
        <Work />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </article>
    </div>
  )
}

export default App;
