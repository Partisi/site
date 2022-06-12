import React, { useState } from 'react'
import { FiArrowUpRight } from "react-icons/fi";

export default function Research() {

    const reports = [
        {
            title: "Quantifying NFT Communities",
            year: "2022",
            abstract: "As NFTs (non-fungible tokens) continue to explode in popularity, there is a rise in false, misleading, and/or scam-ridden collections with few tools to gauge the legitimacy of these collections and to value growing NFT projects. The NFT world is seemingly dominated by speculation and a mania to get in on this new trend. I argue that this compromises the greater potential that NFTs could provide in the long-term. My approach aims to examine what I believe to be the backbone of NFT collections, the community behind it, and to analyze its relationship to popular collections to justify valuations. My findings suggest that more expensive NFT collections have a more distributed ownership struc- ture based on their Gini coefficients, although their correlation is weaker than expected with a few standout outliers at the higher end. Additionally, there appears to be a certain Ethereum price range for NFT collections (between 0.05 to 0.07) that exhibits a sudden uptick in correlation compared to that of other price ranges, suggesting external price-influencing factors.",
            keywords: ["NFTs", "Collections", "Ownership", "Centralization", "Valuations", "Community"],
            description: "From my NYU Computer Science Capstone, I aimed to address the grand mania and speculation within the NFT space by examining the contribution and importance that NFT collection communities have on their underlying collection price. I would recommend reading the preface and abstract of this essay if you are interested to get my own perception of the current NFT landscape (spoiler alert - large potential in the future but far too much speculation today).",
            githubLink: "https://github.com/Partisi/site/blob/main/reports/Quantifying%20NFT%20Communities.pdf",
            additionalLink: "https://drive.google.com/file/d/1W3QFNJkjqqKb1li0Kri5M9Dm-DvBtc_G/view",
            additionalNote: "Video Presentation & Slides",
        },
        {
            title: "How REITs Contribute to Emerging Market Economic Development",
            year: "2022",
            abstract: "Every economy, from developing to developed, can have its growth be attributed to its real estate which provides the bedrock that propels economic development of all industries. Emerging markets are especially eager to develop their real estate market to slowly evolve into becoming a developed, more globally influential market. One growth driver of real estate are REITs (real estate investment trusts) that serve as a vehicle to financially expose investors to the real estate market, serve as an alternative source of funding for development, and ultimately advance the real estate market. Surprisingly, there is a lack of existing research into REITs and their effects on emerging markets that leave little guidance on its potential further adoption and utilization. My research focuses on the potency of the effect that REITs have on emerging markets, specifically analyzing Mexico and Turkey, by examining the countries’ GDP, job creation, and affordable housing among other economic metrics. My results show that REIT growth does correspond with overall GDP growth while also influencing employment during times of high volatility. Additionally, while REITs do have the framework in place to develop affordable housing, it appears emerging markets are not developed enough to fully capitalize on this opportunity. My research points to an indication of REITs fueling emerging market economic development but more studies must be conducted to definitively assert this influence.",
            keywords: ["REITs", "Emerging Markets", "Economic Development", "Real Estate"],
            description: "This report was apart of my NYU Finance Thesis where I examined the relationship between REITs (Real Estate Investment Trusts) and emerging markets - specially Turkey and Mexico. To draw this relationship, I examined multiple economic vertices such as job creation, GDP growth, market returns, and affordable housing, amongst other factors.",
            githubLink: "https://github.com/Partisi/site/blob/main/reports/How%20REITs%20Contribute%20to%20Emerging%20Market%20Economic%20Development.pdf",
            additionalLink: "",
            additionalNote: "",
        },
        {
            title: "Has the Chinese Government Set Themselves on a Path of an Inevitable Real Estate Crisis?",
            year: "2021",
            abstract: "The notion of China being a ‘sleeping dragon’ has historically been used as a whim for sarcasm, but recent years may have proved that this dragon awoke. Today, China has catapulted itself into being the 2nd largest economy in the world with a GDP of nearly $14.7 trillion with a 30-year average YoY GDP growth of roughly 13.2%. With this massive economic growth, many journalists, economists, and political theorists have now turned their research into focusing on the main economic catalyst: Chinese real estate. As one of these many researchers, I aim to dissect the Chinese real estate market to see if this economic driver of growth is a palpable stimulant for global economic dominance or has been artificially expanded to mask a weak, inefficient economy that will eventually burst. To answer this question, I aimed to collectively view the market from a variety of different sources to compile a ‘flow’ that starts with the history of the Chinese real estate market to then moving towards the current market setting in China, and then hypothesizing what a real estate crisis could result in for both the world and the Chinese Communist Party (CCP). My analysis concluded that there is currently a real estate bubble in China that was spurred on by the government’s ambitious plans to wield global economic influence combined with financial incentive from both Chinese households and businesses alike. The CCP has begun to rein in on this real estate boom as global economic catastrophe and internal political stability risk is likely to emerge if this bubble were to suddenly burst. Although Evergrande’s recent turmoil may signify that the crash is right around the corner, there is hope that the CCP will isolate, and eliminate this doomsday.",
            keywords: ["China", "Real Estate", "Bubble", "Evergrande"],
            description: "This essay dissects the Chinese real estate market (as of Fall 2021) to gauge whether the market is a bubble, how it was grown (from both the consumers' and government's perspectives), its current state, and how its potential bubble burst may affect China's market and the global economy.",
            githubLink: "https://github.com/Partisi/site/blob/main/reports/Has%20the%20Chinese%20Government%20Set%20Themselves%20on%20a%20Path%20of%20an%20Inevitable%20Real%20Estate%20Crisis%3F.pdf",
            additionalLink: "",
            additionalNote: "",
        },
        {
            title: "Remote Mania - A Cost & Reward Analysis of Software Companies Moving to Remote",
            year: "2021",
            abstract: "The recent COVID pandemic forced many companies to shift their focus and thinking into truly trying to understand how work within their organization was accomplished. The traditional model of coming into the office to work has been coming under scrutiny as many employees, as well as some employers, advocate for working remotely at home. The software industry, in particularly, has been a massive proponent of this movement as they are able to complete most of their work digitally. The focus of my research was, in essence - what are the effects of software companies moving to remote from both a developer and managerial perspective? Throughout this research, there was sufficient evidence to conclude that with rising office costs, higher employee productivity and a higher natural ability for software professionals to work remotely, that remote work is a net positive for software professionals.",
            keywords: ["Remote Work", "Software Industry", "COVID", "Workplace Effects"],
            description: "This was my first real attempt at conducting research while simultaneously stretching my data analytic skills (primarly using the Hadoop ecosystem). My goal was to focus on the software industry's change of moving to remote work due to the the pandemic and analyze the shift's effect on both the developers and the company stakeholders.",
            githubLink: "https://github.com/Partisi/site/blob/main/reports/Remote%20Mania-%20A%20Cost:Reward%20Analysis%20of%20Software%20Companies%20Moving%20to%20Remote.pdf",
            additionalLink: "https://github.com/Partisi/Project-DARS",
            additionalNote: "Repository for Analytic Portion",
        },
    ]


    const [viewingReport, setViewingReport] = useState(reports[0])

    return (
        <section id="research-container" className="section-container">
            <h1 className="section-subtitle">Research</h1>
            <div id="inner-research-container">
                <ul id="report-list">
                    {reports.map((eachReport, index) => {
                        return (
                            <li key={index} onClick={() => setViewingReport(eachReport)}>
                                <p className="report-year">({eachReport.year})</p>
                                <p className="report-title">{eachReport.title}</p>
                            </li>
                        )
                    })}
                </ul>

                <div id="viewing-report">
                    <div id="report-info">
                        <div className="report-header">
                            <h2>({viewingReport.year}) {viewingReport.title}</h2>
                            <ul className="report-keywords">
                                {viewingReport.keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}
                            </ul>

                        </div>
                        <p className="report-description">{viewingReport.description}</p>
                        <p className="report-abstract"><span className="abstract-key">Abstract - </span>{viewingReport.abstract}</p>
                        <div id="bottom-buffer" />
                    </div>

                    <div className="redirect-bottom">
                        {!!viewingReport.additionalNote && (
                            <div id="viewing-additional-info">
                                <a href={viewingReport.additionalLink} target="_blank" rel="noreffer">
                                    <button className="read-additional-bttn"><p>{viewingReport.additionalNote} </p><FiArrowUpRight className="redirect-read-icon" /></button>
                                </a>
                            </div>
                        )}
                        <a href={viewingReport.githubLink} target="_blank" rel="noreffer">
                            <button className="read-report-bttn"><p>Read Report</p> <FiArrowUpRight className="redirect-read-icon" /></button>
                        </a>

                    </div>

                </div>


            </div>

        </section>
    )
}
