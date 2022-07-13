import React, { useState } from 'react'
import Sketch from 'react-p5'

const sketchHeight = 1200 // canvas height

// Star obj that is init z times
class Star {
    constructor(p5) {

        // id (used for each unique id)
        this.id = Math.random()

        // Star position
        this.x = p5.random(0, p5.width)
        this.y = p5.random(0, sketchHeight)

        // Star movement speed & direction
        this.xSpeed = p5.random(-0.15, 0.15)
        this.ySpeed = p5.random(-0.15, 0.15)

        // The 3 possible colors this star can dominate
        let colorCategories = [
            { r: 255, g: 23, b: 201 },
            { r: 23, g: 255, b: 166 },
            { r: 99, g: 32, b: 238 }
        ]

        // Depending on the stars initial location, set its color
        // note. to get more fancy, can have coords for each color and find closest color to star
        if (this.x < document.getElementById("intro-container").clientWidth / 2) { // if star on left
            this.color = colorCategories[0]
        } else if (this.y < 300) { // if star top right
            this.color = colorCategories[1]
        } else { // bottom right
            this.color = colorCategories[2]
        }
    }

    // Display func that runs every frame (60fps)
    display(p5, allDots) {

        // Connects the points
        this.connect(p5, allDots)

        // Movement (with bounce functionality)
        this.x += this.xSpeed
        this.y += this.ySpeed
        if (this.x < 0 || this.x > document.getElementById("intro-container").clientWidth) {
            this.xSpeed *= -1
        }
        if (this.y < 0 || this.y > sketchHeight) {
            this.ySpeed *= -1
        }
    }

    // Draws the line between points nearby
    connect(p5, allDots) {
        const dDistance = 200 // distance to start connect
        const connectedStars = [this.id]
        for (let i = 0; i < allDots.length; i++) {
            let eachDot = allDots[i]

            // if connection already exists OR to self, just ignore
            // note. this helps with performance (if a connects b is same as b connects a)
            if (eachDot.id in connectedStars) {
                continue
            }

            if (this.x === eachDot.x && this.y === eachDot.y) continue
            let distanceBetween = p5.dist(this.x, this.y, eachDot.x, eachDot.y)
            if (distanceBetween < dDistance) {
                let percentFilled = ((distanceBetween / dDistance) - 1) * -1
                let lineOpacity = 255 * percentFilled // opacity 0 - 1 depending on distance between two points

                // The colors of two points
                let color1 = p5.color(this.color.r, this.color.g, this.color.b, lineOpacity)
                let color2 = p5.color(eachDot.color.r, eachDot.color.g, eachDot.color.b, lineOpacity)

                let lineColor

                // hiearchy of colors (one always beats the other)
                if (color1 > color2) { lineColor = color1 }
                else { lineColor = color2 }

                // Draw the connection line
                p5.stroke(lineColor)
                p5.strokeWeight(2)
                p5.line(this.x, this.y, eachDot.x, eachDot.y)

                // Adds id to already checked
                connectedStars.push(eachDot.id)
            }
        }

    }
}

// Creates a gradient
function setGradient({ x, y, w, h, c1, c2, axis, p5 }) {
    p5.noFill()
    if (axis == "Y") {  // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            var inter = p5.map(i, y, y + h, 0, 1);
            var c = p5.lerpColor(c1, c2, inter);
            p5.stroke(c);
            p5.line(x, i, x + w, i);
        }
    }
    else if (axis == "X") {  // Left to right gradient
        for (let j = x; j <= x + w; j++) {
            var inter2 = p5.map(j, x, x + w, 0, 1);
            var d = p5.lerpColor(c1, c2, inter2);
            p5.stroke(d);
            p5.line(j, y, j, y + h);
        }
    }
}

// Main Sketch Component
export default function MySketch() {
    const [stars, changeStars] = useState([]) // each 'dot'

    // Populates the screen with dots depending on the current width
    // i.e. a larger screen size has more dots compared to that of a smaller screen
    function populateStars(currentWidth, p5) {
        let amount = 0
        if (currentWidth <= 400) {
            amount = 30
        } else if (currentWidth <= sketchHeight) {
            amount = 50
        } else if (currentWidth <= 1200) {
            amount = 70
        } else {
            amount = 100
        }
        let newStars = [] // sets in new list to clear current stars
        for (let i = 0; i < amount; i++) newStars.push(new Star(p5))
        changeStars([...newStars])
    }

    return (
        <Sketch

            // Runs on initial setup
            setup={(p5) => {
                // Create canvas and populates initial stars
                p5.createCanvas(document.getElementById("intro-container").clientWidth, sketchHeight)
                populateStars(document.getElementById("intro-container").clientWidth, p5)
            }}

            // Runs every frame (60fps)
            draw={(p5) => {
                p5.background("black")
                let currentWidth = document.getElementById("intro-container").clientWidth
                if (p5.width !== currentWidth) { // if the screen size changes
                    p5.resizeCanvas(currentWidth, sketchHeight)
                    populateStars(currentWidth, p5)
                }

                // Gradient colors
                let topColor = p5.color(0, 0, 0)
                let bottomColor = p5.color(99, 32, 238)
                setGradient({
                    x: 0, y: 400,
                    w: currentWidth, h: sketchHeight - 400,
                    c1: topColor, c2: bottomColor,
                    axis: "Y",
                    p5
                })

                // Display each star and their connections
                stars.forEach(eachStar => {
                    eachStar.display(p5, stars)
                })

            }}

            // Runs ANYTIME the mouse moves (even if not on canvas!)
            mouseMoved={(p5) => {
                if (p5.mouseY <= sketchHeight) {

                    // Some future functionality to handle mouse movement/interaction
                    //...

                }
            }}
        />
    )
}