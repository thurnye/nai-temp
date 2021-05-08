import React from 'react';
import Nav from '../../components/NavBar/nav'
import Carousel from 'react-bootstrap/Carousel';
import './durham.css'
import Flower1 from '../../public/images/flower1.jpeg'
import Flower2 from '../../public/images/flower2.jpeg'
import Flower3 from '../../public/images/flower3.jpeg'
import Flower4 from '../../public/images/flower4.jpeg'
import Flower5 from '../../public/images/flower5.jpeg'
export default function durham() {
    return (
        <React.Fragment>
            <Nav />
            <section className="durham">
                <div className="container ">
                    <div className="intro">
                        <h1>I designed</h1>
                        <h5>the Durham College 2019-2020</h5>
                        <h2>Student Handbook.</h2>
                    </div>

                    <div className="intro">
                        <p>I implemented many new elements to the Durham College Handbook while adhering to the Durham College Branding Guidelines to promote the following:</p>
                        <ol>
                            <li>Usablilty,</li>
                            <li>Student efficiency and</li>
                            <li>Personalization</li>
                        </ol>
                        <p>
                            No working template to start with - I completed this 180 paged project from scratch
                        </p>
                    </div>
                        
                </div>

                <article className="  durhamCarousel1 container">
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={Flower1} alt="First slide" style={{height: "55vh"}}/>
                            <Carousel.Caption>
                                <div className="sometxt">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero distinctio repudiandae recusandae assumenda, libero eum tempora veritatis! Fugit, commodi.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={Flower2} alt="First slide" style={{height: "55vh"}}/>
                            <Carousel.Caption>
                                <div className="sometxt">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero distinctio repudiandae recusandae assumenda, libero eum tempora veritatis! Fugit, commodi.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={Flower3} alt="First slide" style={{height: "55vh"}}/>
                            <Carousel.Caption>
                                <div className="sometxt">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero distinctio repudiandae recusandae assumenda, libero eum tempora veritatis! Fugit, commodi.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </article>

                <article className="  durhamCarousel2 container">
                    <Carousel>
                        <Carousel.Item interval={4000}>
                            <img className="d-block w-100" src={Flower4} alt="First slide" style={{height: "60vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img className="d-block w-100" src={Flower5} alt="First slide" style={{height: "60vh"}}/>
                            
                        </Carousel.Item>
                    </Carousel>

                    <p className="visualIconText"><span><strong>Visual Iconography Element:</strong></span> I added an element of visual icons to the main informational pages for a visual representation of the contents</p>
                </article>


                <article className="  durhamCarousel2 container">
                    <Carousel>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower4} alt="First slide" style={{height: "60vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower5} alt="First slide" style={{height: "60vh"}}/>
                            
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower3} alt="First slide" style={{height: "60vh"}}/>
                            
                        </Carousel.Item>
                    </Carousel>
                    <p className="visualIconText"><span><strong>Progressive Bar Element:</strong></span> The side bar wwith the month progressively gets "filled" as the months near the end of the semester.</p>
                </article>


                <article className="  durhamCarousel2 container">
                    <Carousel>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower2} alt="First slide" style={{height: "60vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower4} alt="First slide" style={{height: "60vh"}}/>
                            
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower1} alt="First slide" style={{height: "60vh"}}/>
                            
                        </Carousel.Item>
                    </Carousel>
                    <p className="visualIconText"><span><strong>Implementation Encouraging Quotes Element:</strong></span> On each weekly page I implemented an element of encouraging/positibe quotes with the idea that students would be inspired/pushed to continue their studies/life goals that they have planned for themselves.</p>
                </article>


                <article className="  durhamCarousel2 container">
                    <div className="calendar">
                        <h2>The 2019-2020 Durham College Calendar</h2>
                    </div>
                    <Carousel>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower5} alt="First slide" style={{height: "60vh"}}/>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower3} alt="First slide" style={{height: "60vh"}}/>
                            
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img className="d-block w-100" src={Flower4} alt="First slide" style={{height: "60vh"}}/>
                            
                        </Carousel.Item>
                    </Carousel>
                    <p className="previewImages">
                        <div className="carousel-indicator"></div> 
                        <div className="carousel-indicator"></div> 
                        <div className="carousel-indicator"></div> 
                    </p>
                    
                </article>
                    
            
            </section>
        

        
        </React.Fragment>
    )
}
