import React from 'react'
import MySketch from './MySketch'

// Introduction with animation
export default function Intro() {
    return (
        <section id="intro-container" className="section-container">
            <div id="intro-text">
                <h1>Erol Bickici</h1>
                <p>Technology, Finance, and all that in between</p>
            </div>
            {/* Main Sketch Import (the star animation) */}
            <MySketch />
        </section >
    )
}
