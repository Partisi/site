import React, { useState } from 'react'

import ProfilePicture from "../../assets/pic.jpeg"
export default function Contact() {


    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [submitError, setSubmitError] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target))


        console.log(formData)
    }

    return (
        <section id="contact-container" className="section-container">
            <div className="inner-contact-container">
                <div className="img-container">
                    <img src={ProfilePicture} />
                    <div className="pic-border" />
                </div>
                <div className="form-container">
                    <h2 className="reachout-header">Want to Reach Out?</h2>
                    <form onSubmit={handleSubmit}>

                        <InputBox inputKey={"name"} />
                        <InputBox inputKey={"email"} />
                        <InputBox inputKey={"subject"} />
                        <InputBox inputKey={"message"} size="l" />

                        <button type="submit" className="submit-bttn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

const InputBox = ({ inputKey, size = "s" }) => {
    return (
        <div className="inputbox">
            {size === "l" ? (
                <textarea type="text" name={inputKey} required rows="3" cols="10" />
            ) : (
                <input type="text" name={inputKey} required />
            )}

            <label>{inputKey}<span className="required">*</span></label>
            <span className="underline-item"></span>
        </div>
    )
}
