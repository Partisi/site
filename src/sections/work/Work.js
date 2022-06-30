import React from 'react'

// Employment information
export default function Work() {

    // Full Employment
    const myEmployment = [
        {
            employer: "Coopsight",
            length: "2019 - 2021",
            title: "CTO & Cofounder",
            companyDescription: "Matchmaking platform for tech startups that match companies based on their industry, location, areas of interests, and products among others.",
            jobDescription: "Headed the techincal product development while also helping to guide the overall vision and business stategies.",
            link: "https://www.coopsight.com/",
        },
        {
            employer: "Filli Go",
            length: "2021 - Present",
            title: "Software Engineer",
            companyDescription: "Online store and delivery for construction professionals onsite based in NYC.",
            jobDescription: "Led development and technical strategy including the production and maintainence of its mobile app.",
            link: "https://filli-go.com/"
        },
    ]
    return (
        <section id="work-container" className="section-container">
            <h1 className="section-subtitle">Employment</h1>
            <ul>
                {myEmployment.map((eachEmployment, index) => {
                    return (
                        <li key={index}>
                            <a href={eachEmployment.link} target="_blank" rel="noreferrer">
                                <p className="time-length">{eachEmployment.length}</p>
                                <div className="top-employment">
                                    <h2>{eachEmployment.employer}</h2>
                                    <p>{eachEmployment.companyDescription}</p>
                                </div>
                                <div className="bottom-employment">
                                    <p className="title">{eachEmployment.title}</p>
                                    <p>{eachEmployment.jobDescription}</p>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
