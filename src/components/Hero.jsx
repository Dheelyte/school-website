import arrowRight from '../assets/arrow_right.svg'
import heroImage from '../assets/hero-image-cropped.jpg'
import head1 from '../assets/head1.svg'
import head2 from '../assets/head2.svg'
import head3 from '../assets/head3.svg'

const Hero = () => {
    return (
        <div className="hero">
            <img className="head-doodle" src={head1} alt="" />
            <img className="head-doodle" src={head2} alt="" />
            <img className="head-doodle" src={head3} alt="" />
            <div className="hero-text-container">
                <h1>Raising a <span>new generation</span> of pupils!</h1>
                <p className="sub-title">
                    <span>Vision statement:</span> to raise a new generation of pupils with functional education and morals
                </p>
                <p className="sub-title">
                    <span>Mission statement:</span> to expose pupils to in-depth cognitive, affective, and psychomotor domains of learning.</p>
                <a href="https://wa.me/+2348083963085" className="hero-cta"><div className="content"><span>Contact the school</span> <img src={arrowRight} alt="" /></div></a>

            </div>
            
            <img className="hero-image" src={heroImage} alt="" />
        </div>
    )
}

export default Hero;