import React from 'react'

export default function Projects() {

    const myProjects = [
        {
            name: "Interactive Museum Project - Merchant House",
            description: "A VR/AR web app designed to teach people about the historical Merchant House in New York City. This app was designed as an iSpy-like game for families to both learn and enjoy the museum from anywhere in the world! This project was apart of my Individual Studies Computer Science class at NYU for my Senior year.",
            year: "2022",
            toolsUsed: "HTML, LESS, JavaScript, p5.js, A-Frame",
        },
        {
            name: "Market Sentiment Calculator & Display",
            description: "With a team of 4 other developers, we managed to create an MVP that scrapped Twitter to suggest which publicly traded companies were gaining momentum or 'hype' on social media. Our goal was to take advantage of the rising trend of investors to turn to social media for general investment advice.",
            year: "2021",
            toolsUsed: "ReactJS, SCSS, NodeJS, Express, Chai, Mocha, Jenkins, MongoDB, Twitter API",
        },
        {
            name: "Discount Cash Flow Calculator",
            description: "Useful tool that scraps financial information from a wide variety of sources and displays the results with calculations to project future valuation.",
            year: "2021",
            toolsUsed: "ReactJS, SCSS, Python, BeautifulSoup, Google Cloud (Cloud Storage, Firebase Auth, and Cloud Functions)",
        },
        {
            name: "eCommerce Food Delivery Service for Rural Communities",
            description: "This project (eventually turning into a business) was an eCommerce Web App that was focused on bulk buying for densely packed communities that were far from large urban centers. With a lack of infrastructure to handle traditional eCommerce, our app focused on streamlining the process of shopping online for these communities.",
            year: "2021",
            toolsUsed: "ReactJS, Firebase, Google Cloud (Cloud Functions), NodeJS",
        },
        {
            name: "Tile-Based Game",
            description: "This project was the first purely fun project I worked on being a video game consisting of a story, combat, and exploration.",
            year: "2021",
            toolsUsed: "HTML, CSS, p5.js",
        },
        {
            name: "Industry-Wide Synergetic Map",
            description: "This project took a specified country and specified the correlation amongst its industries using data from a Bloomberg Terminal. The idea here was to serve as a starting point for finding how closely related industries could possibily work on synergetic products and services together. Also was the predecessor to Coopsight.",
            year: "2018-2019",
            toolsUsed: "Python, Bloomberg Terminal",
        },
    ]

    return (
        
        <section id="projects-container" className="section-container">
            <h1 className="section-subtitle">Projects</h1>
            <ul>
                {myProjects.map((eachProject, index) => {
                    return (
                        <li key={index}>

                            <p className="time-length">{eachProject.year}</p>
                            <div className="project-header-container">
                                <h2 className="project-header">{eachProject.name}</h2>
                            </div>
                            <p className="project-desc">{eachProject.description}</p>
                            <p className="technologies-used"><span className="tech-header">Technologies:</span> {eachProject.toolsUsed}</p>
                        </li>
                    )
                })}
            </ul>
            
        </section>
    )
}
