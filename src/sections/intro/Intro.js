import React from 'react'
import MySketch from './MySketch'

export default function Intro() {
    return (
        <section id="intro-container" className="section-container">
            <div id="intro-text">
                <h1>Erol Bickici</h1>
                <p>Welcome</p>
            </div>
            <MySketch />
            <div id="bottom-wavy"></div>
        </section>
    )
}
