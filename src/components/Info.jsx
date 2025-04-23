import img from '../assets/headgirl.jpg'


const Info = () => {
    return (
        <section className="join-us">
            <div className="image-stack">
                <img className="image-stack-1" src={img} alt="" />
                <img className="image-stack-2" src={img} alt="" />
            </div>
            <h1>Key Information</h1>
                <div className="join-list">
                    <li>
                        <h1 className="stroke-double">01</h1>
                        <div className="item">
                            <h5 className="list-header">Public Examinations</h5>
                            <p className="list-text">
                                As a Lagos State Government-approved School, we are registered with the Lagos tate Examinations Board. Thus, our grade six pupils are usually registered for CASS/PLACEMENT EXAMS that leads to the award of the FIRST SCHOOL LEAVING CERTIFICATE
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1 className="stroke-double">02</h1>
                        <div className="item">
                            <h5 className="list-header">Support Staff</h5>
                            <p className="list-text">
                                The importance and roles of the support staff in a school system cannot be overemphasized, hence, the need to employ the services of responsible, kind, and professional non-teaching staff.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1 className="stroke-double">03</h1>
                        <div className="item">
                            <h5 className="list-header">Payment of School Fees</h5>
                            <p className="list-text">
                                We expect parents/guardians to pay their children's school fees before the school resumes a new term. This would help the school to pay the staff as when due, and to also meet all the necessary financial obligations.
                                We appreciate parents/guardians who prioritize the payment of their children's school fees over and above every other obligation.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1 className="stroke-double">04</h1>
                        <div className="item">
                            <h5 className="list-header">Open Day</h5>
                            <p className="list-text">
                                We are not ignorant of the fact that the school and parents are partners in progress, therefore, at a given day, parents/guardians are expected to visit the school for the purpose of feedback. Constructive criticism is necessary for the growth and development of the school.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1 className="stroke-double">05</h1>
                        <div className="item">
                            <h5 className="list-header">Pedagogical method</h5>
                            <p className="list-text">
                                The school uses Montessori method, especially at the nursery, kindergarten, and lower primary classes to achieve pupils' learning outcomes. The school also organises a periodic intra and inter class quiz and debate competitions to promote a healthy academic rivalry among the pupils.
                            </p>
                        </div>
                    </li>
                </div>
        </section>
    )
}

export default Info;