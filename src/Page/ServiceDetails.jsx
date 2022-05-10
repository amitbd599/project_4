import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import BrandLogoData from "../Elements/BrandLogo/BrandLogoData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import imgScript from "../Script/ImgScript";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export default class ServiceDetails extends Component {
  render() {
    const {
      serviceImg_4,
      serviceImg_5,
      serviceImg_6,
      serviceImg_7,
      serviceImg_8,
      serviceImg_9,
      serviceImg_10,
      serviceImg_11,
    } = imgScript();
    return (
      <>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Service-Details" />
        {/* Helmat Data End*/}

        {/* Header section start  */}
        <Header logo="dark" />
        {/* Header section End  */}

        {/* Page intro start */}
        <PageIntro title="Service Details" />
        {/* Page intro End */}

        {/* Single service data start */}

        <div className="serviceDataSingle">
          <div className="wrapper">
            <Tabs>
              <Container>
                <Row>
                  <Col lg={8} className="part_1">
                    <div className="wrapperBody">
                      <TabPanel>
                        <div className="innter">
                          <div className="option_1">
                            {serviceImg_4}
                            <h1>DIGITAL MARKETING</h1>
                            <h2>WE HAVE EXPERIENCE IN DIGITAL MARKETING</h2>
                            <p>
                              We can help you channel your potential
                              implementing your idea. We take care of all your
                              needs, crafting specific and targeted solutions. A
                              great client experience begins with a great team
                              member It is very easy to customize with a strong
                              admin panel. The theme is highly suitable template
                              for companies that offer web design experience.
                            </p>
                          </div>
                          <br />
                          <div className="option_2">
                            <h4>WHY CHOOSE US :</h4>
                            <p>
                              We can help you channel your potential
                              implementing your idea. We take care of all your
                              needs, crafting specific and targeted solutions. A
                              great client experience begins with a great team
                              member It is very easy to customize with a strong
                              admin panel. The theme is highly suitable template
                              for companies that offer web design experience.
                            </p>
                            <div className="imgCard">
                              {serviceImg_8}
                              <div className="items">
                                <ul>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    Get access to 4,000+ of our top courses
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    Popular topics to learn now
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    Find the right instructor for you
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <h2>FULL SERVICE DIGITAL AGENCY</h2>
                            <p>
                              We can help you channel your potential
                              implementing your idea. We take care of all your
                              needs, crafting specific and targeted solutions. A
                              great client experience begins with a great team
                              member It is very easy to customize with a strong
                              admin panel. The theme.
                            </p>
                          </div>
                          <div className="option_3 pt-40">
                            <div className="accordion">
                              <Accordion allowZeroExpanded>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      IS IT FULL DIGITAL AGENCY??
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      Exercitation in fugiat est ut ad ea
                                      cupidatat ut in cupidatat occaecat ut
                                      occaecat consequat est minim minim esse
                                      tempor laborum consequat esse adipisicing
                                      eu reprehenderit enim.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      Why Should Chose Us?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      In ad velit in ex nostrud dolore cupidatat
                                      consectetur ea in ut nostrud velit in
                                      irure cillum tempor laboris sed
                                      adipisicing eu esse duis nulla non.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      Can Discount Possible In Project?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      In ad velit in ex nostrud dolore cupidatat
                                      consectetur ea in ut nostrud velit in
                                      irure cillum tempor laboris sed
                                      adipisicing eu esse duis nulla non.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="innter">
                          <div className="option_1">
                            {serviceImg_5}
                            <h1>WEB DESIGN</h1>
                            <h2>WE ARE CREATING AWESOME WEB TEMPLATE</h2>
                            <p>
                              We can help you channel your potential
                              implementing your idea. We take care of all your
                              needs, crafting specific and targeted solutions. A
                              great client experience begins with a great team
                              member It is very easy to customize with a strong
                              admin panel. The theme is highly suitable template
                              for companies that offer web design experience.
                            </p>
                          </div>
                          <br />
                          <div className="option_2">
                            <h4>WHY CHOOSE US :</h4>
                            <p>
                              We can help you channel your potential
                              implementing your idea. We take care of all your
                              needs, crafting specific and targeted solutions. A
                              great client experience begins with a great team
                              member It is very easy to customize with a strong
                              admin panel. The theme is highly suitable template
                              for companies that offer web design experience.
                            </p>
                            <div className="imgCard">
                              {serviceImg_9}
                              <div className="items">
                                <ul>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    900 + Web Agency Template Download
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    Theme Forest condition method all Template
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    Find your Template right now!
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <h2>FULL SERVICE DIGITAL AGENCY</h2>
                            <p>
                              We can help you channel your potential
                              implementing your idea. We take care of all your
                              needs, crafting specific and targeted solutions. A
                              great client experience begins with a great team
                              member It is very easy to customize with a strong
                              admin panel. The theme.
                            </p>
                          </div>
                          <div className="option_3 pt-40">
                            <div className="accordion">
                              <Accordion allowZeroExpanded>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      What does a web designer do?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      A web designer creates the layout and
                                      design of a website. In simple terms, a
                                      website designer makes a site look good.
                                      They use design programs to create visual
                                      elements.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      What is meant by web design?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      Image result for web design Web design
                                      refers to the design of websites that are
                                      displayed on the internet. It usually
                                      refers to the user experience aspects of
                                      website development rather than software
                                      development.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      Can I teach myself web design?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      Yes, it is perfectly possible to teach
                                      yourself web design. I asked around this
                                      week to see how people managed to acquire
                                      the skills and I tried to remember what
                                      worked for me. There are three main ways
                                      you can teach yourself web design.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      How long does it take to become a web
                                      designer?{" "}
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      If your goal is to land a web design job
                                      with a good starting salary, then you
                                      should expect to spend four years pursuing
                                      a bachelor's degree. Additionally, it can
                                      take one to three years to complete a
                                      master's degree in web design and several
                                      weeks to obtain certification.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      Do I need to go to school to be a web
                                      designer?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      The short answer is no. You don't need a
                                      degree to be a web designer. However, you
                                      do need to have an amazing portfolio of
                                      work to show. Your portfolio is how you
                                      get hired as a designer, not whether you
                                      earned an online degree from a prestigious
                                      university or not.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="innter">
                          <div className="option_1">
                            {serviceImg_6}
                            <h1>WEB DEVELOPMENT</h1>
                            <h2>Web development is the work involved.</h2>
                            <p>
                              Web development is the work involved in developing
                              a website for the Internet or an intranet. Web
                              development can range from developing a simple
                              single static page of plain text to complex web
                              applications, electronic businesses, and social
                              network services.
                            </p>
                          </div>
                          <br />
                          <div className="option_2">
                            <h4>WHY CHOOSE US :</h4>
                            <p>
                              Web developers create and maintain websites. They
                              are also responsible for the site's technical
                              aspects, such as its performance and capacity,
                              which are measures of a website's speed and how
                              much traffic the site can handle. In addition, web
                              developers may create content for the site. Web
                              development, also known as website development,
                              refers to the tasks associated with creating,
                              building, and maintaining websites and web
                              applications that run online on a browser. It may,
                              however, also include web design, web programming,
                              and database management.
                            </p>
                            <div className="imgCard">
                              {serviceImg_10}
                              <div className="items">
                                <ul>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    Web Developers made a median salary of
                                    $77,200
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    The best-paid 25 percent made $107,620 that
                                    year
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    The lowest-paid 25 percent made $55,390
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <h2>FULL SERVICE DIGITAL AGENCY</h2>
                            <p>
                              We can help you channel your potential
                              implementing your idea. We take care of all your
                              needs, crafting specific and targeted solutions. A
                              great client experience begins with a great team
                              member It is very easy to customize with a strong
                              admin panel. The theme.
                            </p>
                          </div>
                          <div className="option_3 pt-40">
                            <div className="accordion">
                              <Accordion allowZeroExpanded>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      Do I need a degree to be a web developer?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      Many entry-level web developer jobs do not
                                      require a college degree. You can get
                                      started in this high-demand field by
                                      teaching yourself to code through online
                                      coding and web development bootcamps.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      Are web developers in demand 2022?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      Aside from commerce, the demand for
                                      developers in areas like online banking
                                      and remote education is increasing as
                                      those industries continue to expand and
                                      evolve to meet today's needs. Thus it's
                                      crystal clear that becoming a web
                                      developer in 2021 is a smart choice both
                                      for now and in the future.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      How much do beginner web developers make?{" "}
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      According to Skillcrush, for an
                                      entry-level front- end web developer, you
                                      can expect to earn on average
                                      $61,000/year. If you have experience of 3
                                      – 5 years this can go up to $100,000+/year
                                      as you will now be considered a mid-tier
                                      or experienced web developer and will have
                                      a nice portfolio as well.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      How do I become a web developer with no
                                      experience?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                      Register a domain and let your web
                                      development skills get to work. Share your
                                      website with others and offer to build a
                                      site for others (you could start with
                                      family and friends; no experience is bad
                                      experience). You will have the opportunity
                                      to add these projects to your portfolio.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="innter">
                          <div className="option_1">
                            {serviceImg_7}
                            <h1>UI/UX DESIGN</h1>
                            <h2>
                              If you are considering getting into UX/UI design.
                            </h2>
                            <p>
                              A user experience (UX) designer works on a team to
                              create products that provide meaningful and
                              enjoyable experiences for users. They are
                              concerned with the entire process of product
                              design, from branding to design to useability. UI
                              (user interface) designers build interfaces in
                              software or other computerized devices.
                            </p>
                          </div>
                          <br />
                          <div className="option_2">
                            <h4>WHY CHOOSE US :</h4>
                            <p>
                              Image result for ui ux design A UI, UX, and
                              front-end web developer is responsible for
                              applying interactive and visual design principles
                              on websites and web applications for a positive
                              and cohesive user experience. These developers use
                              HTML, CSS, and other design tools to achieve
                              responsive designs.
                            </p>
                            <div className="imgCard">
                              {serviceImg_10}
                              <div className="items">
                                <ul>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    Creating UI designs with attractive features
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    UX design is focused on anything that affects
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillArrowRightCircleFill className="icon" />
                                    UX concepts and guide them through projects
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <h2>UX Bootcamps can take anywhere</h2>
                            <p>
                              We can help you channel your potential
                              implementing your idea. We take care of all your
                              needs, crafting specific and targeted solutions. A
                              great client experience begins with a great team
                              member It is very easy to customize with a strong
                              admin panel. The theme.
                            </p>
                          </div>
                          <div className="option_3 pt-40">
                            <div className="accordion">
                              <Accordion allowZeroExpanded>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What should I learn first UI or UX?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                    UX design usually comes first in the product development process, followed by UI. The UX designer maps out the bare bones of the user journey; the UI designer then fills it in with visual and interactive elements.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Do UX designers make apps?                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                    The UX designer role is to make a product or service usable, enjoyable, and accessible. While many companies design user experiences, the term is most often associated with digital design for websites and apps.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Which font family is best for UI?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                    Roboto. Roboto was interestingly chosen by Google as the main font for its mobile operating system on Android phones, making it a popular choice as a font for app UI design.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Which tool is used for UX design?
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p>
                                    InVision. InVision is a prototyping tool that allows UX/UI designers to design mockups and create interactive prototypes.
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </div>
                  </Col>
                  <Col lg={4} className="part_2">
                    <div className="wrapperBody">
                      <TabList>
                        {" "}
                        <Tab>Digital Marketing</Tab>
                        <Tab>Web Design</Tab>
                        <Tab>Web Development</Tab>
                        <Tab>UI/UX Design</Tab>
                      </TabList>

                      <div className="rightSideBar bgImg-8">
                        <div className="inner">
                          <h2>NEED HELP?</h2>
                          <h3>CALL US NOW</h3>
                          <h3 className="mb-50">+ 99 456 898</h3>
                          <hr />
                          <h3 className="mb-20">DOWNLOAD BROCHURE</h3>
                          <a href="#" className="btn-transparent">
                            Download PDF Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tabs>
          </div>
        </div>
        {/* Single service data End */}
        {/* News letter Start */}
        <div className="newsLetter mt-50">
          <div className="wrapper">
            <Container>
              <Row>
                <Col className="wrapperBody">
                  <div className="inner">
                    {" "}
                    <h2>Subscribe Newsletter & Stay Update</h2>
                    <form action="">
                      <div className="inputGroup pt-30">
                        <input
                          className="email"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          required=""
                        />
                        <button type="submit" className="myBtn">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* News letter End */}

        {/* Brand Logo Start */}
        <div className="brandLogo">
          <div className="wrapper">
            <Container>
              <Row className="part_1">
                <Col>
                  <div className="wrapperBody">
                    <h1>Top Clinets</h1>
                    <h2>We Worked With This Brand</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum commodi optio neque vel sequi hic, dolor esse ea
                      quos ex.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="part_2">
                <div className="wrapperBody">
                  <div className="iconLogo">
                    <BrandLogoData />
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        {/* Brand Logo End */}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </>
    );
  }
}
