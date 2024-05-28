import React from 'react';
import "./page.css"
const SkillsSection: React.FC = () => {
  return (
    <div id='ae'>
    <div className="skills-section">
      <div className="skills-header">
        <h1>Skills</h1>
      </div>
      <div className="skills-container">
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img
                src="./html.png"
                alt="HTML 5"
                className="skills-icons"
              />
            </div>
            <h3>HTML 5</h3>
          </div>
          <p id='ha'><br />Proficient in creating semantic and accessible HTML markup for web applications</p>
        </div>

        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"
                alt="CSS3"
                className="skills-icons"
              />
            </div>
            <h3>CSS3</h3>
          </div>
          <p id='ha'> <br />Experienced in styling responsive and visually appealing web pages using modern CSS techniques.</p>
        </div>

        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img
                src="./js.png"
                alt="JavaScript"
                className="skills-icons"
              />
            </div>
            <h3>JavaScript</h3>
          </div>
          <p id='ha'><br /> Skilled in writing efficient and maintainable JavaScript code for interactive web features.</p>

        </div>

        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img
                src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png"
                alt="Node.js"
                className="skills-icons"
              />
            </div>
            <h3>Node.js</h3>
          </div>
          <p id='ha'> <br /> Proficient in building scalable server-side applications using Node.js and Express.</p>
        </div>

        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img
                src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
                alt="React"
                className="skills-icons"
              />
            </div>
            <h3>React</h3>
          </div>
          <p id='ha'> <br />Experienced in developing dynamic and responsive single-page applications using React.</p>
        </div>


        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img
                src="./next.webp"
                alt="JavaScript"
                className="skills-icons"
              />
            </div>
            <h3>next js</h3>
          </div>
          <p id='ha'> <br />Experienced in building performant web applications with Next.js, leveraging its server-side rendering and static site generation capabilities.</p>
        </div>

        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img
                src="./ts.png"
                alt="Gatsby.js"
                className="skills-icons"
              />
            </div>
            <h3>type script</h3>
          </div>
          <p id='ha'><br />Proficient in using TypeScript for developing robust and type-safe JavaScript applications.</p>
        </div>
      </div>
    </div>
    </div>





  );
};

export default SkillsSection;
