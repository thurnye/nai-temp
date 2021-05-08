import React from 'react';
import Nav from '../../components/NavBar/nav'
import Carousel from 'react-bootstrap/Carousel';
import Flower1 from '../../public/images/flower1.jpeg'
import Flower2 from '../../public/images/flower2.jpeg'
import Flower3 from '../../public/images/flower3.jpeg'
import Flower4 from '../../public/images/flower4.jpeg'
import Flower5 from '../../public/images/flower5.jpeg'
import './branding.css'

export default function branding() {
    return (
        <section className="branding">
            <Nav />
            <article>
                <div className="container">
                    <h5 className="olympics">Tokyo 2020 Olympics Design Concept</h5>
                </div>
                <div className="container">
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={Flower1} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={Flower2} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={Flower3} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={Flower4} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={Flower5} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </article>

            <article>
                <div className="container">
                    <h5 className="olympics">Photography Studio Logo Design Breakdown</h5>
                </div>
                <div className="container">
                    <Carousel>
                        <Carousel.Item interval={4000}>
                            <img className="d-block w-100" src={Flower4} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img className="d-block w-100" src={Flower5} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </article>

            <article>
                <div className="container">
                    <h5 className="branding-update">Company Logo and Branding Update</h5>
                    <h6>(Official and Published)</h6>
                </div>
                <div className="container">
                    <Carousel>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower3} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower2} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower4} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower5} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower3} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower2} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower1} alt="First slide" style={{height: "65vh"}}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </article>
        </section>
    )
}
