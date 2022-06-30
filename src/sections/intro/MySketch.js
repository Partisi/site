import React, { useState } from 'react'
import Sketch from 'react-p5'


const sketchHeight = 1200

class Star {
    constructor(p5) {
        this.x = p5.random(0, p5.width)
        this.y = p5.random(0, sketchHeight)
        this.brightness = p5.random(0, 100)
        this.brightChange = 1

        this.size = 3

        this.xSpeed = p5.random(-0.3, 0.3)
        this.ySpeed = p5.random(-0.3, 0.3)

        let colorCategories = [
            { r: 255, g: 23, b: 201 },
            { r: 23, g: 255, b: 166 },
            { r: 99, g: 32, b: 238 }
        ]

        if (this.x < document.getElementById("intro-container").clientWidth / 2) {
            this.color = colorCategories[0]
        } else if (this.y < 300) {
            this.color = colorCategories[1]
        } else {
            this.color = colorCategories[2]
        }
    }
    display(p5, allDots) {



        // Does the connect
        this.connect(p5, allDots)


        // Main
        p5.noStroke()
        p5.fill("white")



        //p5.ellipse(this.x, this.y, this.size, this.size)
        if (this.brightness === 100 || this.brightness === 0) {
            this.brightChange = this.brightChange * -1
        }
        this.brightness += this.brightChange



        // Movement
        this.x += this.xSpeed
        this.y += this.ySpeed

        if (this.x < 0 || this.x > document.getElementById("intro-container").clientWidth) {
            this.xSpeed *= -1
        }
        if (this.y < 0 || this.y > sketchHeight) {
            this.ySpeed *= -1
        }
    }

    connect(p5, allDots) {

        const dDistance = 200
        let copyDots = [...allDots]
        for (let i = 0; i < copyDots.length; i++) {
            let eachDot = copyDots[i]
            if (this.x === eachDot.x && this.y === eachDot.y) continue
            let distanceBetween = p5.dist(this.x, this.y, eachDot.x, eachDot.y)
            if (distanceBetween < dDistance) {
                let percentFilled = ((distanceBetween / dDistance) - 1) * -1

                let lineOpacity = 255 * percentFilled

                let color1 = p5.color(this.color.r, this.color.g, this.color.b, lineOpacity)
                let color2 = p5.color(eachDot.color.r, eachDot.color.g, eachDot.color.b, lineOpacity)

                let lineColor

                if (color1 > color2) {
                    lineColor = color1
                } else {
                    lineColor = color2
                }

                p5.stroke(lineColor)
                p5.strokeWeight(2)
                p5.line(this.x, this.y, eachDot.x, eachDot.y)
            }
        }

    }
}
function midpoint(x1, y1, x2, y2) {
    return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 }
}


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

export default function MySketch() {
    const [stars, changeStars] = useState([])
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


        let newStars = []
        for (let i = 0; i < amount; i++) {
            newStars.push(new Star(p5))
        }
        changeStars([...newStars])
    }


    return (
        <Sketch
            setup={(p5) => {
                p5.createCanvas(document.getElementById("intro-container").clientWidth, sketchHeight)
                populateStars(document.getElementById("intro-container").clientWidth, p5)

            }}
            draw={(p5) => {
                p5.background("black")
                let currentWidth = document.getElementById("intro-container").clientWidth
                if (p5.width !== currentWidth) { // if the screen size changes
                    p5.resizeCanvas(currentWidth, sketchHeight)
                    populateStars(currentWidth, p5)
                }

                let topColor = p5.color(0, 0, 0)
                let bottomColor = p5.color(99, 32, 238)

                setGradient({
                    x: 0, y: 400,
                    w: currentWidth, h: sketchHeight - 400,
                    c1: topColor, c2: bottomColor,
                    axis: "Y",
                    p5
                })

                stars.forEach(eachStar => {
                    eachStar.display(p5, stars)
                })



                // bubbles.forEach(eachBubble => {
                //     eachBubble.display(p5)
                //     if (eachBubble.x - 100 >= p5.width) { // resets to start
                //         eachBubble.startUp(p5)
                //     }
                // })
            }}
            mouseMoved={(p5) => {
                if (p5.mouseY <= sketchHeight) {
                    const pushDistance = 100
                    for (let i = 0; i < stars.length; i++) {
                        let particle = stars[i]
                        if (p5.dist(p5.mouseX, p5.mouseY, particle.x, particle.y) <= pushDistance) {


                        }
                    }
                }

            }}
        />
    )
}