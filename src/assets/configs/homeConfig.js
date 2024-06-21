import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Rishabh Pareek</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "An Open Source Contributor",
        "A Backend Developer",
        "A Rajasthani"
    ],
    about: {
        start: "Highly motivated final year BTech CSE student specializing in Data Science. Possess a strong foundation in machine learning principles and practical skills in Python, along with proficiency in libraries like TensorFlow/PyTorch and data analysis tools. Eager to leverage my analytical and problem-solving abilities to contribute as a Machine Learning Engineer and tackle real-world challenges. ," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Head Market Research",
            company: "Global Hosiery",
            description: "Led market research, identified challenges, automated order processing, enhanced inventory management..",
            date: "Nov-2023-Present",
            icon: <BiRocket/>,
            tags: ["ml", "python", "aws"]
        },
        {
            id: "work-3",
            title: "Junior Content Writer",
            company: "Learnbay",
            description: "Enhanced SEO with engaging content, targeted keywords, and increased organic traffic for Learnbay's growth. ",
            date: "Apr-2023-Oct-2023",
            icon: <DiCodeigniter/>,
            tags: ["Content Writing", "SEO", "RankMath",]
        },
        {
            id: "work-2",
            title: "Web Developer",
            company: "Global Hosiery",
            description: "Developed user-centric e-commerce site, optimized UX, boosted sales with secure payments and analytics-driven enhancements.",
            date: "Jan-2023-Mar-2023",
            icon: <FaMobileAlt/>,
            tags: ["WebDev", "eCommerce", "UI/UX","Rest-API"]
        },
    ],
    resumeButton: {
        url: "https://drive.google.com/file/d/1-B9-rL_Du8rRl451LByUc-Vue2EXJrLa/view?usp=sharing",
        text: "View Resume"
    }
}


export default homeConfig