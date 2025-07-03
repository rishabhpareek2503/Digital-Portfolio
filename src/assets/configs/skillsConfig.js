import {
    SiPython,
    SiDjango,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiAzuredevops,
    SiDocker,
    SiMongodb,
    SiMysql,
    SiGit,
    SiTensorflow,
    SiPytorch,
    SiCplusplus,
    SiDatabricks,
    SiPowerbi,
    SiWordpress
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-nextjs",
            className: "skill-icon",
            icon: <SiNextdotjs size={50}/> ,
            text: "Next.js"
        },
        {
            id: "skills-react",
            className: "skill-icon",
            icon: <SiReact size={50}/> ,
            text: "React"
        },
        {
            id: "skills-tailwind",
            className: "skill-icon",
            icon: <SiTailwindcss size={50}/> ,
            text: "Tailwind CSS"
        },
        {
            id: "skills-django",
            className: "skill-icon",
            icon: <SiDjango size={50}/> ,
            text: "Django"
        },
        {
            id: "skills-nodejs",
            className: "skill-icon",
            icon: <SiNodedotjs size={50}/> ,
            text: "Node.js"
        },
        {
            id: "skills-python",
            className: "skill-icon",
            icon: <SiPython size={50}/> ,
            text: "Python"
        },
        {
            id: "skills-javascript",
            className: "skill-icon",
            icon: <SiJavascript size={50}/> ,
            text: "JavaScript"
        },
        {
            id: "skills-html5",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/> ,
            text: "HTML5"
        },
        {
            id: "skills-css3",
            className: "skill-icon",
            icon: <SiCss3 size={50}/> ,
            text: "CSS3"
        },
        {
            id: "skills-azure",
            className: "skill-icon",
            icon: <SiAzuredevops size={50}/> ,
            text: "Azure"
        },
        {
            id: "skills-docker",
            className: "skill-icon",
            icon: <SiDocker size={50}/> ,
            text: "Docker"
        },
        {
            id: "skills-mongodb",
            className: "skill-icon",
            icon: <SiMongodb size={50}/> ,
            text: "MongoDB"
        },
        {
            id: "skills-mysql",
            className: "skill-icon",
            icon: <SiMysql size={50}/> ,
            text: "MySQL"
        },
        {
            id: "skills-git",
            className: "skill-icon",
            icon: <SiGit size={50}/> ,
            text: "Git"
        },
        {
            id: "skills-tensorflow",
            className: "skill-icon",
            icon: <SiTensorflow size={50}/> ,
            text: "TensorFlow"
        },
        {
            id: "skills-pytorch",
            className: "skill-icon",
            icon: <SiPytorch size={50}/> ,
            text: "PyTorch"
        }
    ],
    complementarySkills: [
        {
            id: "skills-cplusplus",
            className: "skill-icon",
            icon: <SiCplusplus size={50}/> ,
            text: "C++"
        },
        {
            id: "skills-databricks",
            className: "skill-icon",
            icon: <SiDatabricks size={50}/> ,
            text: "Databricks"
        },
        {
            id: "skills-powerbi",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/> ,
            text: "Power BI"
        },
        {
            id: "skills-wordpress",
            className: "skill-icon",
            icon: <SiWordpress size={50}/> ,
            text: "WordPress"
        },
        {
            id: "skills-data-viz",
            className: "skill-icon",
            icon: <SiDatabricks size={50}/> ,
            text: "Data Visualization"
        },
        {
            id: "skills-data-analytics",
            className: "skill-icon",
            icon: <SiDatabricks size={50}/> ,
            text: "Data Analytics"
        }
    ]
};

export default skillsConfig;
