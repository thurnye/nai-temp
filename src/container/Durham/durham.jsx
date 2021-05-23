import React from 'react';
import Nav from '../../components/NavBar/nav'
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from "react-owl-carousel";
import './durham.css'
import studentHandbook1 from '../../public/images/Durham College/1First/durhamCollege-01.png'
import studentHandbook2 from '../../public/images/Durham College/1First/durhamCollege-02.png'
import studentHandbook3 from '../../public/images/Durham College/1First/durhamCollege-03.png'
import vIE1 from '../../public/images/Durham College/2Second/durhamCollege-04.png'
import vIE2 from '../../public/images/Durham College/2Second/durhamCollege-05.png'
import stpgcpt1 from '../../public/images/Durham College/3Third/durhamCollege-06.png'
import stpgcpt2 from '../../public/images/Durham College/3Third/durhamCollege-07.png'
import progBarEl1 from '../../public/images/Durham College/4Fourth/durhamCollege-08.png'
import progBarEl2 from '../../public/images/Durham College/4Fourth/durhamCollege-09.png'
import progBarEl3 from '../../public/images/Durham College/4Fourth/durhamCollege-10.png'
import encouraQuotes1 from '../../public/images/Durham College/Calendar/durhamCollege-11.png'
import encouraQuotes2 from '../../public/images/Durham College/Calendar/durhamCollege-12.png'
import calendar3 from '../../public/images/Durham College/Calendar/durhamCollege-13.png'
import calendar4 from '../../public/images/Durham College/Calendar/durhamCollege-14.png'
import calendar5 from '../../public/images/Durham College/Calendar/durhamCollege-15.png'
import calendar6 from '../../public/images/Durham College/Calendar/durhamCollege-16.png'
import calendar7 from '../../public/images/Durham College/Calendar/durhamCollege-17.png'

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
                <div className="bootstrap-durhamCarousel">

                    {/* STUDENT HANDBOOK */}
                    <article className="  durhamCarousel1 container" style={{marginTop: '22px;'}}>
                        <Carousel>
                            <Carousel.Item interval={5000}>
                                <img className="d-block w-100" src={studentHandbook1} alt="First slide" style={{height: "55vh"}}/>
                                <Carousel.Caption>
                                    <div className="sometxt">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero distinctio repudiandae recusandae assumenda, libero eum tempora veritatis! Fugit, commodi.</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img className="d-block w-100" src={studentHandbook2} alt="First slide" style={{height: "55vh"}}/>
                                <Carousel.Caption>
                                    <div className="sometxt">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero distinctio repudiandae recusandae assumenda, libero eum tempora veritatis! Fugit, commodi.</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img className="d-block w-100" src={studentHandbook3} alt="First slide" style={{height: "55vh"}}/>
                                <Carousel.Caption>
                                    <div className="sometxt">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero distinctio repudiandae recusandae assumenda, libero eum tempora veritatis! Fugit, commodi.</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </article>

                    {/* VISUAL ICONGRAPHIC ELEMENT */}
                    <article className="  durhamCarousel2 container">
                        <Carousel>
                            <Carousel.Item interval={4000}>
                                <img className="d-block w-100" src={vIE1} alt="First slide" style={{height: "60vh"}}/>
                            </Carousel.Item>
                            <Carousel.Item interval={4000}>
                                <img className="d-block w-100" src={vIE2} alt="First slide" style={{height: "60vh"}}/>
                                
                            </Carousel.Item>
                        </Carousel>

                        <p className="visualIconText"><span><strong>Visual Iconography Element:</strong></span> I added an element of visual icons to the main informational pages for a visual representation of the contents</p>
                    </article>

                    {/* STUDENT PAGE CONCEPT */}
                    <article className="  durhamCarousel1 container">
                        <Carousel>
                            <Carousel.Item interval={5000}>
                                <img className="d-block w-100" src={stpgcpt1} alt="First slide" style={{height: "55vh"}}/>
                                <Carousel.Caption>
                                    <div className="sometxt">
                                    <p className="visualIconText card-text"><span><strong>Semester Page Concept/Elemet:</strong></span> I implemented the concept of a semester page before the month of each new semester where students can have space to write out goals and input their own personal schedule.</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img className="d-block w-100" src={stpgcpt2} alt="First slide" style={{height: "58vh"}}/>
                                <Carousel.Caption>
                                    <div className="sometxt">
                                    <p className="visualIconText card-text"><span><strong>Semester Page Concept/Elemet:</strong></span> I implemented promotion and easy access of the College's social media pages in the footer of each "month at a glance pages".</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </article>

                    {/* Progressive Bar  */}
                    <article className="  durhamCarousel2 container">
                        <Carousel>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={progBarEl1} alt="First slide" style={{height: "60vh"}}/>
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={progBarEl2} alt="First slide" style={{height: "60vh"}}/>
                                
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={progBarEl3} alt="First slide" style={{height: "60vh"}}/>
                            </Carousel.Item>
                        </Carousel>
                        <p className="visualIconText"><span><strong>Progressive Bar Element:</strong></span> The side bar wwith the month progressively gets "filled" as the months near the end of the semester.</p>
                    </article>

                    {/* ENCOURAGING QUOTES */}
                    <article className="  durhamCarousel2 container">
                        <Carousel>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={encouraQuotes1} alt="First slide" style={{height: "58vh"}}/>
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={encouraQuotes1} alt="First slide" style={{height: "58vh"}}/>
                                
                            </Carousel.Item>
                        </Carousel>
                        <p className="visualIconText"><span><strong>Implementation Encouraging Quotes Element:</strong></span> On each weekly page I implemented an element of encouraging/positibe quotes with the idea that students would be inspired/pushed to continue their studies/life goals that they have planned for themselves.</p>
                    </article>

                    {/* CALENDAR */}
                    <article className="  durhamCarousel2 container">
                        <div className="calendar">
                            <h2>The 2019-2020 Durham College Calendar</h2>
                        </div>
                        <Carousel>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={calendar3} alt="First slide" style={{height: "60vh"}}/>
                                
                            </Carousel.Item>

                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={calendar4} alt="First slide" style={{height: "60vh"}}/>
                                
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={calendar5} alt="First slide" style={{height: "60vh"}}/>
                                
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={calendar6} alt="First slide" style={{height: "60vh"}}/>
                                
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={calendar7} alt="First slide" style={{height: "60vh"}}/>
                            </Carousel.Item>
                        </Carousel>
                        <p className="previewImages">
                            <div className="carousel-indicator"></div> 
                            <div className="carousel-indicator"></div> 
                            <div className="carousel-indicator"></div> 
                        </p>
                        
                    </article>
                </div>      
                
                
                <div className="desktop-view">
                    {/* Student Handbook */}
                    <article className="container durham-owl-carousel" style={{marginTop: '22px;'}}>
                        <OwlCarousel 
                        className="owl-theme" 
                        loop 
                        margin={30} nav
                        autoWidth=''
                        dots=''
                        >
                            <div class="item">
                                <img className="d-block w-100" src={studentHandbook1} alt="First slide"/>
                            </div>
                            <div class="item">
                                <img className="d-block w-100" src={studentHandbook2} alt="First slide"/>
                            </div>
                            <div class="item">
                                <img className="d-block w-100" src={studentHandbook3} alt="First slide"/>
                            </div>
                        </OwlCarousel>
                    </article>

                     {/* VisualIcon Text */}
                     <article className="container durham-owl-carousel Icongraphic">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src={vIE1} class="card-img-top" alt="..."/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={vIE2} class="card-img-top" alt="..."/>
                                </div>
                            </div>
                        </div>
                        
                        <p className="visualIconText text-center"><span><strong>Visual Iconography Element:</strong></span> I added an element of visual icons to the main informational pages for a visual representation of the contents</p>
                    </article>

                    {/* Semester Page Concept */}
                    <article className="container durham-owl-carousel Icongraphic">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card">
                                <img src={stpgcpt1} class="card-img-top" alt="..." style={{height: '66vh', marginTop: '18px'}}/>
                                <div class="card-body">
                                <p className="visualIconText card-text"><span><strong>Semester Page Concept/Elemet:</strong></span> I implemented the concept of a semester page before the month of eacj new semester where students can have space to write out goals and input their own personal schedule.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                <img src={stpgcpt2} class="card-img-top" alt="..." style={{height: '66vh', marginTop: '18px'}}/>
                                <div class="card-body">
                                <p className="visualIconText card-text">Promotion and easy access of the College's social media pages in the footer of each "month at a glance pages".</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </article>
                    
                    
                    {/* Progressive Bar Element */}
                    <article className="container durham-owl-carousel Icongraphic">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col-md-4">
                                <div class="card">
                                <img src={progBarEl1} class="card-img-top" alt="..."/>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card">
                                <img src={progBarEl2} class="card-img-top" alt="..."/>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card">
                                <img src={progBarEl3} class="card-img-top" alt="..."/>
                                </div>
                            </div>
                            
                        </div>
                        
                        <p className="visualIconText text-center"><span><strong>Progressive Side Bar Element:</strong></span> The side bar with the month progressively gets "filled" as the months near the end of the semester.</p>
                        
                    </article>
                   
                   
                   {/* Encouraging Quotes */}
                    <article className="container durham-owl-carousel Icongraphic">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src={encouraQuotes1} class="card-img-top" alt="..."/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={encouraQuotes2} class="card-img-top" alt="..."/>
                                </div>
                            </div>
                        </div>
                        
                        <p className="visualIconText text-center"><span><strong>Implementation Encouraging Quotes Element:</strong></span> On each weekly page I implemented an element of encouraging positive quotes with the idea that students would be inspired/pushed to continue their studies, life goals that they have planned for themselves.</p>
                    </article>

                    
                    {/* CALENDAR */}
                    <article className="   desktop-carousel durhamCarousel2 container" >
                        <div className="calendar">
                            <h2>The 2019-2020 Durham College Calendar</h2>
                        </div>
                        <Carousel style={{height: '67vh', width: '38vw'}}>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={calendar3} alt="First slide" style={{height: "60vh"}}/>
                                
                            </Carousel.Item>

                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={calendar4} alt="First slide" style={{height: "60vh"}}/>
                                
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={calendar5} alt="First slide" style={{height: "60vh"}}/>
                                
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={calendar6} alt="First slide" style={{height: "60vh"}}/>
                                
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img className="d-block w-100" src={calendar7} alt="First slide" style={{height: "60vh"}}/>
                            </Carousel.Item>
                        </Carousel>
                    </article>
                </div>
            </section>
        </React.Fragment>
    )
}
