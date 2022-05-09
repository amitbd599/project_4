import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HelmetData from '../components/common/Helmet'
import PageIntro from '../components/common/PageIntro'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'
import BrandLogoData from '../Elements/BrandLogo/BrandLogoData'

export default class ServiceDetails extends Component {
  render() {
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
    )
  }
}
