// components/Skills.jsx

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <i className="fa-brands fa-html5 html-icon"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt css-icon"></i>
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <i className="fa-brands fa-js-square js-icon"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <i className="fa-brands fa-react react-icon"></i>
          <p>React</p>
        </div>
        <div className="skill-card node">
          <i className="fa-brands fa-node-js node-icon"></i>
          <p>Node</p>
        </div>
        <div className="skill-card mysql">
          <i className="fa-solid fa-database"></i>
          <p>Mysql</p>
        </div>
        <div className="skill-card php">
          <i className="fa-brands fa-php php-icon"></i>
          <p>PHP</p>
        </div>
        <div className="skill-card laravel">
          <i className="fa-brands fa-laravel laravel-icon"></i>
          <p>Laravel</p>
        </div>
        <div className="skill-card drupal">
          <i className="fa-brands fa-drupal drupal-icon"></i>
          <p>Drupal</p>
        </div>
        <div className="skill-card github">
          <i className="fa-brands fa-github github-icon"></i>
          <p>Github</p>
        </div>
        <div className="skill-card posgresql">
          <i className="fa-regular fa-database postgresql-icon"></i>
          <p>PostgreSql</p>
        </div>
        <div className="skill-card gitlab">
          <i className="fa-brands fa-gitlab gitlab-icon"></i>
          <p>Gitlab</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
