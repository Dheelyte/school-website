import img from '../assets/about2.jpg'


const Join = () => {
    return (
        <section className="join-us">
            <div className="image-stack">
                <img className="image-stack-1" src={img} alt="" />
                <img className="image-stack-2" src={img} alt="" />
            </div>
            <h1>Why Brilliant Esteem?</h1>
                <div className="join-list">
                    <li>
                        <h1 className="stroke-double">01</h1>
                        <div className="item">
                            <h5 className="list-header">Conducive Learning Environment</h5>
                            <p className="list-text">
                                The school has a conducive learning environment that is designed to help the pupils have a wholesome exposure to in-depth cognitive, affective, and psychomotor domains of learning.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1 className="stroke-double">02</h1>
                        <div className="item">
                            <h5 className="list-header">Competent Teaching Staff</h5>
                            <p className="list-text">
                                The Management Board of the school is aware of the importance and relevance of a team of professional teachers to the task of grooming pupils with functional education and morals. Therefore, only trained and qualified teachers are recruited into the service of the school.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1 className="stroke-double">03</h1>
                        <div className="item">
                            <h5 className="list-header">Facilities</h5>
                            <p className="list-text">
                                The neccessary facilities, such as ICT room, library, Home economics laboratory, healing bay, playground, are available in the school.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1 className="stroke-double">04</h1>
                        <div className="item">
                            <h5 className="list-header">Affordable School Fees</h5>
                            <p className="list-text">
                                We intentionally offer quality education that is accessible to parents/guardians of all social classes.
                            </p>
                        </div>
                    </li>
                </div>
        </section>
    )
}

export default Join;