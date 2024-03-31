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
        <div className="user-profile-dashboard">
            <h2>User Profile Dashboard</h2>

            <section className="profile-picture">
                <img src={avatar} alt="Profile" />
            </section>

            {/* User Details */}
            <section className="user-details">
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
            </section>

            <section className="skills">
                <h3>Skills</h3>
                <ul>
                    {userData.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>

            {/* Experience */}
            <section className="experience">
                <h3>Experience</h3>
                <p>{userData.experience}</p>
            </section>
        </div>
    );
}
