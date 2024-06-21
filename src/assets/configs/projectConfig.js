import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import ISS from "../images/ISS.png"
import ParkSense from "../images/Parksense.PNG"
import CASSIR from "../images/CASSIR.PNG"
import portfolio from "../images/RishabhPortfolio.PNG"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Inventory Synchonization",
        links: [
            {
                name: "repo",
                url: "https://github.com/rishabhpareek2503/ParkSense",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/rishabhpareek2503/Inventory_Synchronzation/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/rishabhpareek2503/Inventory_Synchronzation/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "",
                icon: <ImBook/>,
            }
        ],
        image: ISS,
        description: "The Inventory Synchronization System is a robust solution designed to streamline and optimize inventory management for e-commerce businesses. This system synchronizes the inventory of the main e-commerce website with other major platforms like Amazon, ensuring real-time updates and consistency across all sales channels.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "ParkSense",
        links: [
            {
                name: "repo",
                url: "https://github.com/rishabhpareek2503/ParkSense",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/rishabhpareek2503/ParkSense/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/rishabhpareek2503/ParkSense/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "",
                icon: <ImBook/>,
            }
        ],
        image: ParkSense,
        description: "ParkSense aims to address the following challenges in the parking industry: ● Limited Parking Space Utilization: ○ Many parking spaces in communities remain underutilized, while users struggle to find available and affordable parking spots, leading to congestion and frustration.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Context Assesment Of Indian Roads",
        links: [
            {
                name: "repo",
                url: "https://github.com/rishabhpareek2503/Context_Assesment_Of_Indian_Road",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rishabhpareek2503/Context_Assesment_Of_Indian_Road/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rishabhpareek2503/Context_Assesment_Of_Indian_Road/Subscription",
                icon: <AiFillEye/>
            }
        ],
        image: CASSIR,
        description: "Road context assessment: Using information from image, video and auxiliary sources, evaluate the various events (one or more) that are currently taking place on the road and/or in the surrounding area, given an Indian road scenario.",
        target: "_blank"
    },
   
    {
        id: "project-1",
        title: "Portfolio Web",
        links: [
            {
                name: "repo",
                url: "https://rishabhpareek2503.github.io/Digital-Portfolio/",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://rishabhpareek2503.github.io/Digital-Portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://rishabhpareek2503.github.io/Digital-Portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: portfolio,
        description: "Source code of my current portfolio web page as data scientist.",
        target: "_blank"
    }
]

export default projectConfig