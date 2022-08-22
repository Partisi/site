import React, { useEffect, useState } from 'react'
import MySketch from './MySketch'
import TextTransition, { presets } from "react-text-transition"

// Introduction with animation
export default function Intro() {
    const TEXTS = [
        "Fullstack Development",
        "Blockchain",
        "Proptech",
        "Fintech",
        "Venture Capital",
        "Cloud Engineer"
    ];
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            5000
        );
        return () => clearTimeout(intervalId);
    }, [])
    return (
        <section id="intro-container" className="section-container">
            <div id="intro-text">
                <h1>Erol Bickici</h1>
                <p><span id="software-title">Software</span> and <span id="finance-title">Finance</span></p>
                <TextTransition springConfig={presets.wobbly}>
                    <p className="text-shuffle"><span className="arrow-notch">&#10148;</span>{TEXTS[index % TEXTS.length]}</p>
                </TextTransition>
            </div>
            {/* Main Sketch Import (the star animation) */}
            <MySketch />
        </section >
    )
}
