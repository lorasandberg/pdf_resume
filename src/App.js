import logo from './logo.svg';
import './App.css';

function App() {

  const tech = ["Javascript", "CSS", "React", "Angular", "Vue", "Git", "Unity", "C#", "3D programming", "HTML", "REST", "jQuery", "npm", "Responsive Design", "Bootstrap", "Tailwind"]

  return (
    <>

      <h1>Laura Sandberg</h1>
      <aside>
        <div>
          <p>
            Laura Sandberg<br />
            Born in 1993, Finland
          </p>
          <p>
            <a href="mailto:lora.sandberg@gmail.com">lora.sandberg@gmail.com</a><br />
            <a href="https://www.linkedin.com/in/sandberglora/">linkedin.com/in/sandberglora/</a>
          </p>
          <p>
            Portfolio
            <br /><a href="http://lorasandberg.me">lorasandberg.me</a>
          </p>
        </div>
        <div id="tech">
          <h3>Technology</h3>
          {tech.sort().map((t) => { return <span>{t}</span>; })}
        </div>
        <div id="languages">
          <h3>Languages</h3>
          <Language name="Finnish" level="5"></Language>
          <Language name="English" level="5"></Language>
          <Language name="Japanese" level="3"></Language>
        </div>
      </aside>
      <main>
        <section>
          <h2>Work History</h2>
          <Work company="Valo Motion" title="Game and Software Developer" time="2019-2021" keywords="Project leading, Data analysis, UX design, C#, Unity, VFX, Shader programming, Git, Prototyping, Live testing">I designed and developed games for the company's platforms from prototyping to release and further, both in compact teams and independently. My responsibilites were the full technical implementation of the games, leading small project teams, coordinating the overall designs with visual artists and sound designers, and organizing playtests.</Work>
          <Work company="Futurice" title="Full-stack Developer" time="2014" keywords="Client service, Angular, Drupal, Node, Git, CSS, Javascript">As a junior web developer at Futurice I was responsible for working directly with clients to design, create, and maintain web and mobile applications.</Work>
          <Work company="Aalto University" title="Web Developer" time="2012-2013" keywords="HTML5, Javascript, CSS, jQuery, PHP, SQL, WordPress">At Aalto, I worked as a web developer in LeGroup, Learning Environments research group. I was responsible for the implementation of projects ranging from prototypes and plugins to full-scale web applications.</Work>
          <Work company="Ludocraft" title="Game Developer Intern" time="2012" keywords="Unity, HTML5, CSS, C#, Javascript, PHP, SQL, Prototyping, Testing">I worked in a project team creating prototypes of existing game designs. Additionally, I did front-end web development for various websites including teaser pages and browser-based games.</Work>
        </section>
        <section>
          <h2>Education</h2>
          <Education school="Aalto University" degree="Master of Science (Technology)" time="2017-2019" keywords="Information science, Game design, Project management, Machine learning, Software architecture, Graphics programming, Raytracing, Usability, Playability, UX design, C, C++, C#">The studies involved several game projects ranging from creating ideas to finished products. Topics included game design, game development, programming, 3D animation, usability and playability design, machine learning, artificial intelligence, graphics programming and raytracing, and project management.</Education>
          <Education school="University of Tampere" degree="Bachelor of Science" time="2013-2017" keywords="Game research, UX design, Software development, Social media, C, C++, Japanese language and culture">The studies focused heavily on game research. Topics included game design, game analysis, playability and usability, player research, Internet, social media, information science. I did minor studies in information technology, programming, software project management, user interface design, and Japanese language and culture.</Education>
          <Education school="Oulu Vocational College" degree="Vocational Qualification in Business Information Technology" time="2009-2012" keywords="Software development, Game development, Web development, Project management, Business administration, Accounting, Customer service, C#, PHP, Javascript, SQL">The studies were oriented in game programming and production. Topics included game design and development, 3d modeling, information processing, web development, databases, customer service, business administration, accounting, and project management.
            While studying, I participated twice in the National Skills Competition of Finland in web design and placed seventh and second in the finals.</Education>
        </section>
      </main>
    </>
  );
}


function Work(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      {props.company} - {props.time}
      <p>{props.children}</p>
      <p>{props.keywords && props.keywords.split(",").map((keyword) => { return <span class="keyword">{keyword}</span> })}</p>
    </article>
  )
}


function Education(props) {
  return (
    <article>
      <h3>{props.degree}</h3>
      <h4>{props.school} - {props.time}</h4>
      {/*<p>{props.children}</p>*/}
      <p>{props.keywords && props.keywords.split(",").map((keyword) => { return <span class="keyword">{keyword}</span> })}</p>
    </article>
  )
}

function Language(props) {
  return (
    <div class="language">
      <p>{props.name}</p>
      <div class="levelBars">
        <div class={props.level >= 1 ? "filled" : ""}></div>
        <div class={props.level >= 2 ? "filled" : ""}></div>
        <div class={props.level >= 3 ? "filled" : ""}></div>
        <div class={props.level >= 4 ? "filled" : ""}></div>
        <div class={props.level >= 5 ? "filled" : ""}></div>
      </div>
    </div>
  )
}

export default App;
