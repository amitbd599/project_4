import React, { Component, Fragment, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MdEmail } from "react-icons/md";
import { sendEmail } from "../API/API";
import { ErrorTost, IsEmail, IsEmpty, SuccessTost } from "../Helper/FormHelper";
const Contact = () => {
  let { nameRef, subjectRef, emailRef, massageRef } = useRef();
  const containerStyle = {
    width: "auto",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const sendMail = () => {
    let name = nameRef.value;
    let subject = subjectRef.value;
    let email = emailRef.value;
    let massage = massageRef.value;

    if (IsEmpty(name)) {
      ErrorTost("Name Required!");
    } else if (IsEmail(email)) {
      ErrorTost("Email Required!");
    } else if (IsEmpty(subject)) {
      ErrorTost("Subject Required!");
    } else if (IsEmpty(massage)) {
      ErrorTost("Massage Required!");
    } else {
      sendEmail(name, email, subject, massage).then((res) => {
        if (res === true) {
          nameRef.value = "";
          subjectRef.value = "";
          emailRef.value = "";
          massageRef.value = "";
          SuccessTost("Massage Send Successful");
        }
      });
    }
  };
  return (
    <Fragment>
      {/* Helmat Data Start*/}
      <HelmetData pageTitle="Contact" />
      {/* Helmat Data End*/}
      {/* Header section start */}
      <Header logo="dark" />
      {/* Header section End */}

      {/* Page intro start */}
      <PageIntro title="Contact" />
      {/* Page intro End */}

      {/* Contact Info Start */}
      <div className="contactSection">
        <div className="wrapper">
          <div className="wrapperBody">
            <div className="wrapperBody__Inner">
              <Container className="contact__info">
                <Row>
                  <Col lg={4}>
                    <div className="inner">
                      <div className="items">
                        <div className="icon">
                          <img src="/assets/images/Contact/email.png" alt="" />
                        </div>
                        <div className="text">
                          <h3>Contact us</h3>
                          <span>admin@amitjs.com</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="inner">
                      <div className="items">
                        <div className="icon">
                          <img
                            src="/assets/images/Contact/location.png"
                            alt=""
                          />
                        </div>
                        <div className="text">
                          <h3>Our Location</h3>
                          <span>Hera Road 2344-78</span> <br />
                          <span>South Side Melbon</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="inner">
                      <div className="items">
                        <div className="icon">
                          <img src="/assets/images/Contact/clock.png" alt="" />
                        </div>
                        <div className="text">
                          <h3>Opening HOurs</h3>
                          <span>Mon - Sat (8:00 - 6:00)</span> <br />
                          <span>Sunday - Closed</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                {/* Contact form */}

                <div className="contact__Form">
                  <div>
                    <div className="input__group">
                      <input
                        className="name"
                        type="text"
                        placeholder="Your Name"
                        ref={(input) => (nameRef = input)}
                      />
                      <input
                        className="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        ref={(input) => (emailRef = input)}
                      />
                    </div>
                    <div className="input__group">
                      <input
                        className="name w-100"
                        type="text"
                        placeholder="Enter Your Subject :"
                        ref={(input) => (subjectRef = input)}
                      />
                    </div>
                    <div className="input__group">
                      <textarea
                        className="w-100"
                        name="comment"
                        form="usrform"
                        rows={10}
                        placeholder="Enter Your Massage :"
                        ref={(input) => (massageRef = input)}
                      ></textarea>
                    </div>
                    <button
                      className="medium_solid_color"
                      type="submit"
                      onClick={sendMail}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info End */}

      {/* Google Map Start */}
      <div className="google__map">
        <div className="wrapper">
          <div className="wrapperBody">
            <Container>
              <Row>
                <Col lg={6}>
                  <div>
                    <LoadScript googleMapsApiKey="AIzaSyBDT7r2QNoiPFHtEGzIH7TNjfgKwpqgiTE">
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                      >
                        {/* Child components, such as markers, info windows, etc. */}
                        <></>
                      </GoogleMap>
                    </LoadScript>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mapData">
                    <h3>Contact Us</h3>
                    <p>
                      Claritas est etiam processus dynamicus, qui sequitur
                      mutationem consuetudium lectorum. Mirum est notare quam
                      littera gothica, quam nunc putamus parum claram
                      anteposuerit litterarum formas human.
                    </p>
                    <span>Address : No 40 Baria Sreet 133/2 NewYork City</span>
                    <hr />
                    <p>
                      {" "}
                      <span>
                        <MdEmail className="mr-10" />
                      </span>{" "}
                      info@yourdomain.com
                    </p>{" "}
                    <hr />
                    <p>+99 251 36256</p> <hr />
                    <h4>Working Hours</h4>
                    <p>Monday – Saturday:08AM – 22PM</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* Google Map End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </Fragment>
  );
};

export default Contact;
