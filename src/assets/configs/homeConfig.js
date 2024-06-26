import React from 'react';
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { FaMobileAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import ContactCard from '../../components/contactcard';
import myImage from '../../assets/images/myImage.jpeg'; 

const homeConfig = {
    greeting: (
        <div className="greeting-container">
            <img src={myImage} alt="Rishabh Pareek" className="profile-image" />
            <h1 className="heading">
                Hi! I'm <strong className="main-name"> Rishabh Pareek</strong>
            </h1>
        </div>
    ),
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
            description: "Led market research, identified challenges, automated order processing, enhanced inventory management.",
            date: "Nov-2023-Present",
            icon: <BiRocket />, 
            tags: ["ml", "python", "aws"]
        },
        {
            id: "work-3",
            title: "Junior Content Writer",
            company: "Learnbay",
            description: "Enhanced SEO with engaging content, targeted keywords, and increased organic traffic for Learnbay's growth.",
            date: "Apr-2023-Oct-2023",
            icon: <DiCodeigniter />, 
            tags: ["Content Writing", "SEO", "RankMath"]
        },
        {
            id: "work-2",
            title: "Web Developer",
            company: "Global Hosiery",
            description: "Developed user-centric e-commerce site, optimized UX, boosted sales with secure payments and analytics-driven enhancements.",
            date: "Jan-2023-Mar-2023",
            icon: <FaMobileAlt />,
            tags: ["WebDev", "eCommerce", "UI/UX", "Rest-API"]
        },
    ],
    qualificationsTimeline: [
        {
            id: "qual-1",
            title: "B.Tech CSE with Specialization in Data Science",
            institution: "NIIT University",
            description: "Focused on Data Science, software development, data structures, and algorithms.",
            date: "2021-present",
            icon: <BsClipboardData />,
            tags: ["CSE", "Data Science", "Big Data", "ML"],
            cgpa: "6.75",
            awards: [
                "Earned certification in NGO website development, PrabhuG Mission Foundation(2023)",
                "Certified for NGO volunteering, PrabhuG Mission Foundation(2024)"
            ]
        },
        {
            id: "qual-2",
            title: "Senior Secondary (12th Grade)",
            institution: "BIRLA SCHOOL PILANI",
            description: "Specialized in Science stream with a focus on Physics, Chemistry, and Mathematics.",
            date: "2021",
            icon: <BsClipboardData />,
            tags: ["Science Stream"],
            percentage: "82%",
            awards: [
                "Best Actor Award, Birla School Pilani (2021)",
                
            ]
        },
        {
            id: "qual-3",
            title: "Secondary School (10th Grade)",
            institution: "BIRLA SCHOOL PILANI",
            description: "General education with focus on fundamental subjects.",
            date: "2019",
            icon: <BsClipboardData />,
            tags: ["General Education"],
            percentage: "81%",
            awards: [
                "School Band Captain",
                "Best Trumpeter of School Band"
            ]
        }
    ],
    resumeButton: {
        url: "https://drive.google.com/file/d/1-B9-rL_Du8rRl451LByUc-Vue2EXJrLa/view?usp=sharing",
        text: "View Resume"
    },
    contactInfo: (
    <div className="contact-info">
      <h3>Get in touch!</h3>
      <ContactCard />
    </div>
  ),
}

export default homeConfig;
