import './App.css'

function App() {

  return (
    <>
      <header className="hero">
      <h1>Hi, I'm Paterson 👋</h1>
      <p className="subtitle">Computer Science Student | AI Minor</p>
      <p>Aspiring Software Engineer</p>
      <p className="location">South Carolina, United States</p>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="btn" href="https://github.com/paterson-tia" target="_blank" rel="noopener noreferrer">
        View My GitHub
      </a>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>
                Computer Science student at the University of South Carolina with experience in IT support and web maintenance. Passionate about software development and AI.
            </p>
        </section>
    
        <section id="skills">
            <h2>Skills</h2>

            <div className="skills-container">
                
                <div className="skill-card">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>Java</li>
                        <li>C++</li>
                        <li>Visual Basic</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <div className="skill-card">
                    <h3>Web Development</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>

                <div className="skill-card">
                    <h3>Databases</h3>
                    <ul>
                        <li>MySQL</li>
                    </ul>
                </div>

                <div className="skill-card">
                    <h3>Tools & Platforms</h3>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Linux</li>
                        <li>Windows</li>
                    </ul>
                </div>

            </div>
        </section>

        <section id="education">
            <h2>Education</h2>

            <div className="edu">
                <h3>University of South Carolina — Columbia, SC</h3>
                <p>B.S. in Computer Science (AI Minor)</p>
                <p>Expected: May 2028 | GPA: 3.895</p>
            </div>

            <div className="edu">
                <h3>Midlands Technical College — Columbia, SC</h3>
                <p>Associate of Applied Science in Computer Technology — Web Developer</p>
                <p>Graduated: August 2024 | GPA: 3.7 | Cum Laude</p>
            </div>

            <div className="edu">
                <h3>University of Nangui Abrogoua — Abidjan, Ivory Coast</h3>
                <p>Bachelor's Equivalent (Bac+4) in Fundamental and Applied Sciences</p>
                <p>Graduated: July 2005 | Language: French</p>

                <h4>Focus Areas</h4>
                <ul>
                    <li>Software Development for Business Applications</li>
                    <li>Database Systems</li>
                    <li>Information Systems Design and Modeling</li>
                </ul>

                <h4>Relevant Coursework</h4>
                <ul>
                    <li>Advanced Software Engineering</li>
                    <li>Web Applications Development</li>
                    <li>Database Systems</li>
                    <li>Visual Basic Programming</li>
                    <li>Computer Networks</li>
                </ul>
            </div>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <p>Coming soon...</p>
        </section>
    
        <section id="experience">
            <h2>Experience</h2>

            <div className="exp">
                
                <div className="exp-header">
                    <h3>Technical Sales Representative</h3>
                    <span>Mar 2008 – Dec 2012</span>
                </div>
                
                <p>3IE (Startup, now closed) — Abidjan, Ivory Coast (French-speaking environment)</p>
                
                <ul>
                    <li>Presented and sold technical solutions to schools and small businesses</li>
                    <li>Explained technical features to non-technical clients to support decisions</li>
                    <li>Installed and configured computer systems and USB internet devices</li>
                    <li>Supported deployment of employee time attendance systems</li>
                    <li>Provided troubleshooting and on-site technical support</li>
                </ul>
            </div>

            <div className="exp">
                
                <div className="exp-header">
                    <h3>IT Support Technician & Web Administrator</h3>
                    <span>Jan 2014 – May 2018</span>
                </div>
                
                <p>Le Nouveau Navire — Abidjan, Ivory Coast (French-speaking environment)</p>
                
                <ul>
                    <li>Provided IT support for hardware, software, and network issues</li>
                    <li>Installed and maintained office computer systems and IT equipment</li>
                    <li>Managed updates and maintenance of a news media website</li>
                    <li>Resolved internal system and web service issues</li>
                    <li>Supported daily IT operations in a media environment</li>
                </ul>
            </div>

            <div className="exp">

                <div className="exp-header">
                    <h3>Digital Writer</h3>
                    <span>Apr 2018 – Jul 2021</span>
                </div>
                
                <p>Developpez.com — Remote (French-speaking environment)</p>

                <ul>
                    <li>Wrote technical articles on programming, software, and AI tools</li>
                    <li>Published and formatted content for web audience</li>
                    <li>Researched emerging technologies for technical accuracy</li>
                    <li>Collaborated with editors to improve clarity and structure</li>
                </ul>
            </div>
        </section>
        
    </main>

    <footer id="contact">
        <h2>Contact</h2>
        <p>
            Email:
            <a href="mailto:vpatersont@gmail.com">
                vpatersont@gmail.com
            </a>
        </p>
        <p>LinkedIn: Coming Soon</p>
    </footer>
   </>
  );
}

export default App;
