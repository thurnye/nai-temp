import React from 'react';
import Nav from '../../components/NavBar/nav'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Flower2 from '../../public/images/flower2.jpeg'
import Flower3 from '../../public/images/flower3.jpeg'
import Flower4 from '../../public/images/flower4.jpeg'
import Flower5 from '../../public/images/flower5.jpeg'
import './logoWork.css'
import reactDom from 'react-dom';
export default function logoWork() {

    return (
        <React.Fragment>
            <Nav />
            <section>
                <article className="logoWork container">
                    <OwlCarousel 
                    className="owl-theme" 
                    loop 
                    margin={15} nav
                    autoWidth='true'
                    dots=''
                    >
                        <div class="item">
                            <img className="d-block w-100" src={Flower5} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block w-100" src={Flower2} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block w-100" src={Flower3} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block w-100" src={Flower4} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block w-100" src={Flower2} alt="First slide"/>
                        </div>
                    </OwlCarousel>
                </article>
            </section>
        </React.Fragment>
    )
}
