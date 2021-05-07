import React from 'react'
import NavBar from '../../components/NavBar/nav';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import './home.css'

export default function home(props) {
    return (
        <React.Fragment>
            <NavBar />
            <section className="">

            <Carousel className="home-carousel"> 

            {props.contents.map(el => {
                           return <Carousel.Item key="el.name">
                           <div>
                                <h5>{el.name}</h5>
                                <p>{el.description}</p>
                           </div>
                           <div className="">
                           <Nav.Link className="nav-link" aria-current="page" href={el.link}>Enter</Nav.Link>
                           </div>
                         </Carousel.Item>

                        })}
          
         
         
        </Carousel>





                {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {props.contents.map(el => {
                           return <div className="carousel-item " key="el.name">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{el.name}</h5>
                                <p>{el.description}</p>
                            </div>
                        </div>
                        })}
                        

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}

            </section>
        </React.Fragment>
    )
}
