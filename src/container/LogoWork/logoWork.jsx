import React from 'react';
import Nav from '../../components/NavBar/nav'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Logo1 from '../../public/images/Logos/Logos-01.png'
import Logo2 from '../../public/images/Logos/Logos-02.png'
import Logo3 from '../../public/images/Logos/Logos-03.png'
import Logo4 from '../../public/images/Logos/Logos-04.png'
import Logo5 from '../../public/images/Logos/Logos-05.png'
import Logo6 from '../../public/images/Logos/Logos-06.png'
import Logo7 from '../../public/images/Logos/Logos-07.png'
import Logo8 from '../../public/images/Logos/Logos-08.png'
import Logo9 from '../../public/images/Logos/Logos-09.png'
import Logo10 from '../../public/images/Logos/Logos-10.png'
import Logo11 from '../../public/images/Logos/Logos-11.png'
import './logoWork.css'



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
                            <img className="d-block" style={{width: '320px'}} src={Logo1} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block" style={{width: '320px'}} src={Logo2} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block" style={{width: '320px'}} src={Logo3} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block" style={{width: '320px'}} src={Logo4} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block" style={{width: '320px'}} src={Logo5} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block" style={{width: '320px'}} src={Logo6} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block" style={{width: '320px'}} src={Logo7} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block" style={{width: '320px'}} src={Logo8} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block" style={{width: '320px'}} src={Logo9} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block" style={{width: '320px'}} src={Logo10} alt="First slide"/>
                        </div>
                        <div class="item">
                            <img className="d-block" style={{width: '320px'}} src={Logo11} alt="First slide"/>
                        </div>
                    </OwlCarousel>
                </article>
            </section>
        </React.Fragment>
    )
}
