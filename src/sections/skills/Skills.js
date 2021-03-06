import React from 'react'

export default function Skills() {

    // For future use, if want to organize skills by tech category
    // const mySkillCategories = [
    //     "frontend",
    //     "backend",
    //     "blockchain",
    //     "data analytics",
    // ]
    
    const mySkills = {
        "languages": [
            { key: "HTML", categories: ["frontend"] },
            { key: "CSS/SCSS/LESS", categories: ["frontend"] },
            { key: "JavaScript/TypeScript", categories: ["frontend", "backend", "data analytics"] },
            { key: "Python", categories: ["frontend", "backend", "data analytics"] },
            { key: "Solidity", categories: ["blockchain"] },
            { key: "Java", categories: ["backend", "blockchain"] },
            { key: "SQL", categories: ["backend", "data analytics"] },
        ],
        "libraries & frameworks": [
            { key: "ReactJS", categories: ["frontend"] },
            { key: "React Native", categories: ["frontend"] },
            { key: "Angular", categories: ["frontend"] },
            { key: "Bootstrap", categories: ["frontend"] },
            { key: "Tailwind", categories: ["frontend"] },
            { key: "p5.js", categories: ["frontend"] },
            { key: "A-Frame", categories: ["frontend"] },
            { key: "Chai/Mocha", categories: ["frontend", "backend"] },
            { key: "NodeJS", categories: ["backend"] },
            { key: "Express", categories: ["backend"] },
            { key: "Flask", categories: ["backend"] },
        ],
        "platforms & tools": [
            { key: "Google Cloud", categories: ["backend", "data analytics"] },
            { key: "MongoDB", categories: ["backend"] },
            { key: "MySQL", categories: ["backend"] },
            { key: "Firebase", categories: ["backend"] },
            { key: "Kubernetes", categories: ["backend"] },
            { key: "Docker", categories: ["backend"] },
            { key: "Truffle", categories: ["blockchain"] },
            { key: "Hardhat", categories: ["blockchain"] },
            { key: "Hadoop/Spark/Hive", categories: ["data analytics"] },
            { key: "BigQuery", categories: ["data analytics"] },
            { key: "Google Analytics", categories: ["data analytics"] },
        ],
    }
    return (
        <section id="skills-container" className="section-container">
            <h1 className="section-subtitle">Software Skills</h1>
            <div id="all-skill-groups">
                {Object.keys(mySkills).map((eachSkill, index) => {
                    return (
                        <div key={index} className="skill-group">
                            <h2 className="skill-group-header">{eachSkill}</h2>
                            <ul className="skill-list">
                                {mySkills[eachSkill].map((eachSpecific, index) => {
                                    return (
                                        <li key={index}>
                                            <p>{eachSpecific.key}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
