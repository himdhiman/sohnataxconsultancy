import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./scss/contact.css";

function Contact() {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send(
        "service_88t64hq",
        "template_rsnn50l",
        templateParams,
        "user_pzPdJGZyBA1nNwyCaG3g4"
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="contact-heading">
        <h1>Contact US</h1>
      </div>

      <div className="main-form-div">
        <div className="container">
          <div className="contactForm">
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Row 1 of form */}
              <div className="row1">
                <input
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or less",
                    },
                  })}
                  className="form-control formInput"
                  placeholder="Name"
                />
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="form-control formInput"
                  placeholder="Email address"
                ></input>
              </div>
              {/* Row 2 of form */}
              <div className="row2">
                <input
                  type="text"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Please enter a subject",
                    },
                    maxLength: {
                      value: 75,
                      message: "Subject cannot exceed 75 characters",
                    },
                  })}
                  className="form-control formInput"
                  placeholder="Subject"
                ></input>
              </div>
              {/* Row 3 of form */}
              <div className="row3">
                <textarea
                  rows={3}
                  name="message"
                  {...register("message", {
                    required: true,
                  })}
                  className="form-control formInput"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="btn-container">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
