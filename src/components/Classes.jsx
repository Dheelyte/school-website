import Marquee from "react-fast-marquee";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/party.jpg'
import img3 from '../assets/headboy.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img3.jpg'
import img6 from '../assets/img2.jpg'
import img7 from '../assets/about2.jpg'
import img8 from '../assets/excursion.jpg'
import img9 from '../assets/excursion2.jpg'



const Classes = () => {
    const classes = [
        {
            "name": "Nursery 1",
            "image": img1
        },
        {
            "name": "Nursery 2",
            "image": img2
        },
        {
            "name": "Kindergarten",
            "image": img8
        },
        {
            "name": "Grade 1",
            "image": img9
        },
        {
            "name": "Grade 2",
            "image": img4
        },
        {
            "name": "Grade 3",
            "image": img7
        },
        {
            "name": "Grade 4",
            "image": img6
        },
        {
            "name": "Grade 5",
            "image": img5
        },
        {
            "name": "Grade 6",
            "image": img3
        }        
    ]

    return (
        <div className="classes">
            <h1 className="min-[1280px]:max-w-[1200px] mx-auto max-[1280px]:px-6 mb-16 text-[70px] font-bold leading-[65px] tracking-[-4.5px]">
                <span className="block">Classes </span>
                <span className="block">we offer</span>
            </h1>
            <Marquee speed={80}>
                <div className="class-row">
                    {
                        classes.map((classitem, idx) => (
                            <ClassItem key={idx} idx={idx} classitem={classitem} />
                        ))
                    }
                </div>
            </Marquee>
        </div>
    );
};

const ClassItem = ({ classitem }) => {
  return (
    <div className="class-item border-[#211212] border-t-[2px] border-r-[8px] border-b-[8px] border-l-[1px] rounded-3xl w-[310px] mr-4 shrink-0">
      <div>
        <img
          className="h-[275px] w-full rounded-tl-[1.3rem] rounded-tr-[1.1rem] object-cover object-center"
          src={classitem.image}
          alt=""
        />
      </div>
      <div className="meta">
        <h2>{classitem.name}</h2>
      </div>
    </div>
  );
};


export default Classes;