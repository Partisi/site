import React from 'react'

export default function Research() {

    const reports = [
        {
            title: "Quantifying NFT Communities",
            year: "2022",
            description: "From my NYU Computer Science Capstone, I aimed to address the grand mania and speculation within the NFT space by examining the contribution and importance that NFT collection communities have on their underlying collection price. I would recommend reading the preface and abstract of this essay if you are interested to get my own perception of the current NFT landscape (spoiler alert - large potential in the future but far too much speculation today).",
            githubLink: "https://github.com/Partisi/site/blob/main/reports/Quantifying%20NFT%20Communities.pdf",
            additionalLink: "https://drive.google.com/file/d/1W3QFNJkjqqKb1li0Kri5M9Dm-DvBtc_G/view",
            additionalNote: "Video Presentation & Slides",
        },
        {
            title: "How REITs Contribute to Emerging Market Economic Development",
            year: "2022",
            description: "This report was apart of my NYU Finance Thesis where I examined the relationship between REITs (Real Estate Investment Trusts) and emerging markets - specially Turkey and Mexico. To draw this relationship, I examined multiple economic vertices such as job creation, GDP growth, market returns, and affordable housing, amongst other factors.",
            githubLink: "https://github.com/Partisi/site/blob/main/reports/How%20REITs%20Contribute%20to%20Emerging%20Market%20Economic%20Development.pdf",
            additionalLink: "",
            additionalNote: "",
        },
        {
            title: "Has the Chinese Government Set Themselves on a Path of an Inevitable Real Estate Crisis?",
            year: "2021",
            description: "This essay dissects the Chinese real estate market (as of Fall 2021) to gauge whether the market is a bubble, how it was grown (from both the consumers' and government's perspectives), its current state, and how its potential bubble burst may affect China's market and the global economy.",
            githubLink: "https://github.com/Partisi/site/blob/main/reports/Has%20the%20Chinese%20Government%20Set%20Themselves%20on%20a%20Path%20of%20an%20Inevitable%20Real%20Estate%20Crisis%3F.pdf",
            additionalLink: "",
            additionalNote: "",
        },
        {
            title: "Remote Mania - A Cost & Reward Analysis of Software Companies Moving to Remote",
            year: "2021",
            description: "This was my first real attempt at conducting research while simultaneously stretching my data analytic skills (primarly using the Hadoop ecosystem). My goal was to focus on the software industry's change of moving to remote work due to the the pandemic and analyze the shift's effect on both the developers and the company stakeholders.",
            githubLink: "https://github.com/Partisi/site/blob/main/reports/Remote%20Mania-%20A%20Cost:Reward%20Analysis%20of%20Software%20Companies%20Moving%20to%20Remote.pdf",
            additionalLink: "https://github.com/Partisi/Project-DARS",
            additionalNote: "Repository for Analytic Portion",
        },
    ]


    return (
        <div>
            <h1>Research Section</h1>

            {reports.map((eachReport, index) => {
                return (
                    <div key={index}>
                        <p>{eachReport.title}</p>
                        <p>{eachReport.year}</p>
                        <p>{eachReport.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
