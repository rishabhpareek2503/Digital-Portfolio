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
        "Full-Stack Developer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Cloud & DevOps Enthusiast",
        "AI Solutions Builder",
        "Open Source Contributor",
        "Tech Explorer"
    ],
    about: {
        start: "Energetic Computer Science student at NIIT University, I build dynamic web applications, boosting user engagement by 20% at ScoutBetter using Next.js, React, TypeScript, and Tailwind CSS. My expertise in FastAPI, Postgres, and AWS drives scalable, high-performance solutions like job-tracking platforms and parking systems, thriving in collaborative teams with a passion for clean, innovative code.",
        // exit: "I'm fluent in Python, JavaScript, SQL databases, BI tools, and more, with a deep interest in full-stack development, cloud infrastructure, and modern web technologies."
    },
    workTimeline: [
        {
            id: "work-5",
            title: "Full-Stack Developer Intern",
            company: "ScoutBetter (Hybrid)",
            description: (
                <>
                    <ul style={{marginBottom: 0}}>
                        <li>Developing an <strong>AI-driven platform</strong> to generate ATS-friendly resumes and track job applications through a job board.</li>
                        <li>Built a <strong>responsive frontend</strong> using <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, integrated with a robust backend powered by <strong>Django</strong>.</li>
                        <li>Deployed cloud infrastructure on <strong>Azure</strong> and utilized <strong>MongoDB</strong> for efficient data storage and management.</li>
                    </ul>
                </>
            ),
            date: "Jan 2025 - Present",
            icon: <DiCodeigniter />,
            tags: ["Full-Stack", "Next.js", "Tailwind CSS", "Django", "Azure", "MongoDB", "AI"]
        },
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
        url: "https://docs.google.com/document/d/1mrsNhyEerGyinq_1R7U-CHOGJI2jxt4g2WqzJYYIDl8/edit?usp=sharing",
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
