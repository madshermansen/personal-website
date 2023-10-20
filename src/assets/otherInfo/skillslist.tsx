import { FaReact, FaNodeJs, FaNpm, FaFigma, FaGithub, FaGitlab} from "react-icons/fa";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { SiEslint, SiPrettier, SiMysql, SiApache, SiPycharm, SiSublimetext, SiNotion } from "react-icons/si";
import { BiLogoCss3, BiLogoTypescript, BiLogoPython, BiLogoPhp, BiLogoAws } from "react-icons/bi";
import { AiFillHtml5, AiFillSlackCircle } from "react-icons/ai";
import { RiJavascriptFill } from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import { DiScrum } from "react-icons/di";

const mySkills = {
    languages: [
        {name: "TypeScript", icon: <BiLogoTypescript />},
        {name: "JavaScript", icon: <RiJavascriptFill />},
        {name: "CSS", icon: <BiLogoCss3 />},
        {name: "HTML", icon: <AiFillHtml5 />},
        {name: "Python", icon: <BiLogoPython />},
        {name: "PHP", icon: <BiLogoPhp />}

    ],
    frontend: [
        {name: "React", icon: <FaReact />},
        {name: "npm", icon: <FaNpm />},
        {name: "Next.js", icon: <TbBrandNextjs />},

    ],
    backend: [
        {name: "Node.js", icon: <FaNodeJs />},
        {name: "MySQL", icon: <SiMysql />},
        {name: "Apache", icon: <SiApache />},
        {name: "AWS", icon: <BiLogoAws />}

    ],
    other: [
        {name: "Figma", icon: <FaFigma />},
        {name: "Git", icon: <BsGit />},
        {name: "VSCode", icon: <TbBrandVscode />},
        {name: "GitHub", icon: <FaGithub />},
        {name: "GitLab", icon: <FaGitlab />},
        {name: "PyCharm", icon: <SiPycharm />},
        {name: "Sublime Text", icon: <SiSublimetext />},
        {name: "Notion", icon: <SiNotion />},
        {name: "ESLint", icon: <SiEslint />},
        {name: "Prettier", icon: <SiPrettier />}
    ],
    teamwork: [
        {name: "Slack", icon: <AiFillSlackCircle />},
        {name: "Scrum", icon: <DiScrum />}
    ]

}

export default mySkills;