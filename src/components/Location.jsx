import email from '../assets/email.svg'
import phone from '../assets/phone.svg'
import home from '../assets/home.svg'


const Location = () => {
    return (
        <section className="location">
                <div className="join-list">
                    <li>
                        <img src={home} alt="" />
                        <div className="item">
                            <p className="list-header">School Address</p>
                            <p className="list-text">
                                12, Anuoluwapo Street, Off Kajola Road, Obawole, Ifako-Ijaye, Lagos.
                            </p>
                            <a className="direction-link" href="https://maps.app.goo.gl/DyNcXRMJqbpPixLcA">Get directions</a>
                        </div>
                    </li>
                    <li>
                        <img src={phone} alt="" />
                        <div className="item">
                            <p className="list-header">Telephone</p>
                            <p className="list-text">
                                08083963085, 08023327254
                            </p>
                            <a className="direction-link" href="tel:08083963085">Call us</a>
                        </div>
                    </li>
                    <li>
                        <img src={email} alt="" />
                        <div className="item">
                            <p className="list-header">Email</p>
                            <p className="list-text">
                                brilliantesteemschool25@gmail.com
                            </p>
                            <a className="direction-link" href="mailto:brilliantesteemschool25@gmail.com">Email us</a>
                        </div>
                    </li>
            </div>
        </section>
    )
}

export default Location;