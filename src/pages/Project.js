import React from 'react'
import dedster from '../images/dedster.png'
import makeasip from '../images/makeasip.png'
import fashion from '../images/fashion.png'
import giggle from '../images/giggle.png'
import wayfarer from '../images/wayfarer.png'
import spades from '../images/spades.png'
import './Project.css'

const Project = function() {


    return (
    <div>
        <h2>My Projects</h2>
        <div className="slideshow-container">
            <div className="mySlides fade">
                <div className="numbertext">1 / 6</div>
                <img src={dedster} alt='dedster'/>
                <div className="text">Dedster</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">2 / 6</div>
                <img src={makeasip} alt='Make-A-Sip'/>
                <div className="text">Make-A-Sip</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 6</div>
                <img src={fashion} alt='Your Fashion Career'/>
                <div className="text">Your Fashion Career</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">4 / 6</div>
                <img src={giggle} alt='Giggle Productions'/>
                <div className="text">Giggle Productions</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">5 / 6</div>
                <img src={wayfarer} alt='Wayfarer'/>
                <div className="text">Wayfarer</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">6 / 6</div>
                <img src={spades} alt='Spades'/>
                <div className="text">Spades</div>
            </div>

            {/* <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a className="next" onclick="plusSlides(1)">&#10095;</a> */}
        </div>
        <br/>

        <div className='div'>
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
        </div>
    </div> 
    )
}

export default Project