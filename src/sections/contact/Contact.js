import React, { useState } from 'react'
import ProfilePicture from "../../assets/pic.jpeg"
import emailjs from 'emailjs-com';

// Bottom Contact Form
export default function Contact() {

    const [submitError, setSubmitError] = useState("")

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    // Handles end submit
    async function handleSubmit(e) {
        e.preventDefault()
        
        // Takes the form data and turns into obj
        const formData = Object.fromEntries(new FormData(e.target))
        setSubmitting(true) // for loading
        try {

            // Calls emailjs API to send email from eroldontreply@ to primary email
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                process.env.REACT_APP_PUBLIC_KEY
            )
            setFormSubmitted(true)
        } catch (error) { console.log(error); setSubmitError("There was an error submitting the form, please try again later!") }
        setSubmitting(false)
    }

    return (
        <section id="contact-container" className="section-container">
            <div className="inner-contact-container">
                <div className="img-container">
                    <img src={ProfilePicture} />
                    <div className="pic-border" />
                </div>

                {!!formSubmitted ? ( // If success after form submitted
                    <div id="form-success"className="form-container">
                        <h2>Form Submitted</h2>
                        <p>Thanks for the message! I'll get back to you as soon as possible!</p>
                    </div>
                ) : (
                    <div className="form-container">
                        <h2 className="reachout-header">Want to Reach Out?</h2>
                        <form onSubmit={handleSubmit}>

                            <InputBox inputKey={"name"} disabled={submitting} />
                            <InputBox inputKey={"email"} disabled={submitting} />
                            <InputBox inputKey={"subject"} disabled={submitting} />
                            <InputBox inputKey={"message"} size="l" disabled={submitting} />

                            <button
                                type="submit"
                                className="submit-bttn"
                                disabled={submitting}
                            >{submitting ? "Loading" : "Submit"}</button>
                            {!!submitError && <div className="error-message">{submitError}</div>}
                        </form>
                    </div>
                )
                }

            </div >
        </section >
    )
}

// Each input with special design and label
const InputBox = ({ inputKey, disabled, size = "s" }) => {
    return (
        <div className="inputbox">
            {size === "l" ? (
                <textarea
                    type="text"
                    placeholder=" "
                    name={inputKey}
                    required
                    rows="3"
                    cols="10"
                    autoComplete="off"
                    disabled={disabled}
                />
            ) : (
                <input
                    type="text"
                    placeholder=" "
                    name={inputKey}
                    required
                    autoComplete="off"
                    disabled={disabled}
                />
            )}

            <label>{inputKey}<span className="required">*</span></label>
            <span className="underline-item"></span>
        </div>
    )
}
