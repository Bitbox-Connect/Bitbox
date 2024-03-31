import React, { useState } from "react";
import "./Myprofile.css";
import avatar from '../../../assets/images/Dropdown/avatar.jpg';

export default function Myprofile() {
    const [isPrivate, setIsPrivate] = useState(false);
    const [userData,] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        location: "New York, USA",
        college: "ABC University",
        skills: ["React", "JavaScript", "HTML", "CSS"],
        experience: "2+ years",
        links: {
            facebook: "https://www.facebook.com",
            github: "https://github.com",
            leetcode: "https://leetcode.com",
            hackerrank: "https://www.hackerrank.com",
            codeforces: "https://codeforces.com",
        },
    });

    const togglePrivacy = () => {
        setIsPrivate(!isPrivate);
    };
    return (
        <>
            <h2>User Profile Dashboard</h2>
            <div className="user-profile-dashboard">
                <div className="user-details"> 
                        <div className="left">

                            <div className="profile-picture">
                                <img src={avatar} alt="Profile" />
                            </div>
                            <div className="bio">
                                <h3>{userData.name}</h3>
                                <p>Email: {userData.email}</p>
                                <p>Location: {userData.location}</p>
                                <p>College: {userData.college}</p>
                            </div>
                            <button onClick={togglePrivacy}>
                                {isPrivate ? "Make Public" : "Make Private"}
                            </button>
                            <div className="links">
                                <a href={userData.links.facebook} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <br />
                                <a href={userData.links.github} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <br />
                                <a href={userData.links.leetcode} target="_blank" rel="noopener noreferrer">
                                    LeetCode
                                </a>
                                <br />
                                <a href={userData.links.hackerrank} target="_blank" rel="noopener noreferrer">
                                    HackerRank
                                </a>
                                <br />
                                <a href={userData.links.codeforces} target="_blank" rel="noopener noreferrer">
                                    Codeforces
                                </a>
                            </div>

                            <div className="skills">
                                <h3>Skills</h3>
                                <ul>
                                    {userData.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Experience */}
                            <div className="experience">
                                <h3>Experience</h3>
                                <p>{userData.experience}</p>
                            </div>
                        </div>
                    
                        <div className="right">

                            <h2>About</h2>
                            <section className="projects">
                <h3>Projects</h3>
                <div className="project-list">
                    <div className="project">
                        <h4>Project 1</h4>
                        <p>Description of Project 1</p>
                    </div>
                    <div className="project">
                        <h4>Project 2</h4>
                        <p>Description of Project 2</p>
                    </div>
                </div>
            </section>
                        </div>
                </div>
            </div>
        </>
    );
}
