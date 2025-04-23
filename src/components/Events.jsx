import Marquee from "react-fast-marquee";
import img1 from '../assets/about2.jpg'
import party from '../assets/party.jpg'
import img2 from '../assets/img2.jpg'
import excursion from '../assets/excursion.jpg'
import img4 from '../assets/sport.jpg'
import img3 from '../assets/img3.jpg'


const Events = () => {
    const events = [
        {
            "name": "Excursions",
            "image": excursion
        },
        {
            "name": "Annual Prize Giving/Graduation Day",
            "image": img1
        },
        {
            "name": "End of Year Party",
            "image": party
        },
        {
            "name": "Bi-annual inter house sports competitions",
            "image": img4
        },
        {
            "name": "Annual Cultural Day",
            "image": img3
        },
        {
            "name": "Career Day",
            "image": img2
        }
    ]

    return (
        <div className="classes">
            <h1>
                <span className="block">Programmes & </span>
                <span className="block">Events</span>
            </h1>
            <Marquee speed={80}>
                <div className="class-row">
                    {
                        events.map((eventitem, idx) => (
                            <EventItem key={idx} idx={idx} eventitem={eventitem} />
                        ))
                    }
                </div>
            </Marquee>
        </div>
    );
};

const EventItem = ({ eventitem }) => {
  return (
    <div className="class-item">
      <div>
        <img
          src={eventitem.image}
          alt=""
        />
      </div>
      <div className="meta">
        <h2>{eventitem.name}</h2>
      </div>
    </div>
  );
};


export default Events;