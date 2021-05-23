import React from 'react';
import Nav from '../../components/NavBar/nav'

import tokyo1 from '../../public/images/Branding/Tokyo/BRANDING-01.png'
import tokyo2 from '../../public/images/Branding/Tokyo/BRANDING-02.png'
import tokyo3 from '../../public/images/Branding/Tokyo/BRANDING-03.png'
import tokyo4 from '../../public/images/Branding/Tokyo/BRANDING-04.png'
import companyLogo5 from '../../public/images/Branding/ICS/BRANDING-05.png'
import companyLogo6 from '../../public/images/Branding/ICS/BRANDING-06.png'
import companyLogo7 from '../../public/images/Branding/ICS/BRANDING-07.png'
import companyLogo8 from '../../public/images/Branding/ICS/BRANDING-08.png'
import companyLogo9 from '../../public/images/Branding/ICS/BRANDING-09.png'
import companyLogo10 from '../../public/images/Branding/ICS/BRANDING-10.png'
import companyLogo11 from '../../public/images/Branding/ICS/BRANDING-11.png'
import companyLogo12 from '../../public/images/Branding/ICS/BRANDING-12.png'
import companyLogo13 from '../../public/images/Branding/ICS/BRANDING-13.png'
import studioLogo from '../../public/images/Branding/Studio/Salvation-01.png'

import Carousel from 'react-bootstrap/Carousel';
import './branding.css'

export default function branding() {
    return (
        <section className="branding">
            <Nav />

            {/* TOKYO */}
            <article className="olympics">
                <div className="container">
                    <h5 className="olympics">Tokyo 2020 Olympics Design Concept</h5>
                </div>
                <div className="container">
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={tokyo1} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={tokyo2} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={tokyo3} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={tokyo4} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </article>

           {/* STUDIO LOGO */}
           <div className="container">
                    <h5 >Photography Studio Logo Design Breakdown</h5>
            </div>
            <div className="container">
                <div style={{marginTop: '5vh', marginBottom: '5vh'}}>
                    <img className="d-block w-100" src={studioLogo} alt="First slide" />
                </div>
            </div>
            
            {/* Company Logo */}
            <article>
                <div className="container">
                    <h5 className="branding-update">Company Logo and Branding Update</h5>
                    <h6>(Official and Published)</h6>
                </div>
                <div className="container brand-logos">
                    <Carousel>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={companyLogo5} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={companyLogo6} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={companyLogo7} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={companyLogo8} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={companyLogo9} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={companyLogo10} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={companyLogo11} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={companyLogo12} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={companyLogo13} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </article>
                
        </section>
    )
}
