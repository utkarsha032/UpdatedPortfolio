import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel } from "react-icons/si";

const ICONS = {
  react: <FaReact />,
  "node": <DiNodejs />,
  "nodejs": <DiNodejs />,
  "node.js": <DiNodejs />,
  express: <SiExpress />,
  javascript: <DiJavascript1 />,
  js: <DiJavascript1 />,
  mongodb: <SiMongodb />,
  mongo: <SiMongodb />,
  git: <FaGitAlt />,
  github: <FaGithub />,
  npm: <FaNpm />,
  figma: <FaFigma />,
  bootstrap: <FaBootstrap />,
  vercel: <SiVercel />,
  "c++": <CgCPlusPlus />,
  python: <FaPython />,
  postman: <SiPostman />,
};

function getIcon(label = "") {
  const raw = label.trim();
  const k1 = raw.toLowerCase();
  const k2 = k1.replace(/\s+/g, ""); // remove spaces (e.g., "mongo db" -> "mongodb")
  return ICONS[k1] || ICONS[k2] || null;
}

const Skills = ({ skill }) => {
  const icon = getIcon(skill);

  return (
    <div title={skill} className="SkillBox">
      {icon ? (
        icon
      ) : (
        <span className="skill-fallback">
          {String(skill).slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default Skills;
