import React from 'react'
import MySketch from './MySketch'

export default function Intro() {
    return (
        <section id="intro-container" className="section-container">
            <div id="intro-text">
                <h1>Erol Bickici</h1>
                <p>I do some business stuff and some tech stuff</p>
            </div>
            <MySketch />
        </section >
    )
}
