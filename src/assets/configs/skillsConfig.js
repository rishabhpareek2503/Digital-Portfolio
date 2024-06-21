import {
    SiPython,
    SiCplusplus,
    SiPytorch,
    SiDocker,
    SiTensorflow,
    SiGit,
    SiMysql,
    SiDatabricks,
    SiWordpress,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiReact,
    SiNodedotjs,
    SiPowerbi,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiCplusplus size={50}/>,
            text: "C++"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiPytorch size={50}/>,
            text: "Pytorch"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiTensorflow size={50}/>,
            text: "TensorFlow"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiDatabricks size={50}/>,
            text: "Big Data"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiDatabricks size={50}/>,
            text: "Data Visualization"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiWordpress size={50}/>,
            text: "Wordpress"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiDatabricks size={50}/>,
            text: "Data Analytics"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JavaScript"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiNodedotjs size={50}/>,
            text: "Node.js"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        }
    ]
};

export default skillsConfig;
