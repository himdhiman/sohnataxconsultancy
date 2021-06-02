import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

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
    <div>
      <h1
        style={{ textAlign: "center", paddingTop: "1vw", paddingBottom: "1vw" }}
      >
        Contact Us
      </h1>
      <div className="ContactForm">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="contactForm">
                <form
                  id="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  {/* Row 1 of form */}
                  <div className="row formRow pt-2 pb-2">
                    <div className="col-6">
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
                      {/* {errors.name && (
                        <span className="errorMessage">
                          {errors.name.message}
                        </span>
                      )} */}
                    </div>
                    <div className="col-6">
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
                      {/* {errors.email && (
                        <span className="errorMessage">
                          Please enter a valid email address
                        </span>
                      )} */}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className="row formRow pt-2 pb-2">
                    <div className="col">
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
                      {/* {errors.subject && (
                        <span className="errorMessage">
                          {errors.subject.message}
                        </span>
                      )} */}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className="row formRow pt-2 pb-2">
                    <div className="col">
                      <textarea
                        rows={3}
                        name="message"
                        {...register("message", {
                          required: true,
                        })}
                        className="form-control formInput"
                        placeholder="Message"
                      ></textarea>
                      {/* {errors.message && (
                        <span className="errorMessage">
                          Please enter a message
                        </span>
                      )} */}
                    </div>
                  </div>
                  <button className="btn submit-btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
