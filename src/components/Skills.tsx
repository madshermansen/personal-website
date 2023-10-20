import mySkills from "../assets/otherInfo/skillslist.tsx";

// import styles
import "../styles/componentStyles/Skills.css";

function Skills() {
  return (
    <div>
      <h2>My Skills:</h2>
      {Object.entries(mySkills).map(([category, skills]) => (
        <div key={category}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          {/* This is to capitalize the first letter of the category */}
          <div className="skillContainer">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skillIcon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
