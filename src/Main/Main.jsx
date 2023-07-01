/* eslint-disable react/no-unescaped-entities */
import '../../src/Main/Main.css';
import PropTypes from 'prop-types';


const CardText =
    [
        {
            "id": 1,
            "title": "People data & Analytics",
            "desc": "Connect all your people together in one place and gain powerful insights"
        },
        {
            "id": 2,
            "title": "Performance and Culture",
            "desc": "Create a culture of high performance teams and see your business scale"
        },
        {
            "id": 3,
            "title": "Hiring and Onboarding",
            "desc": "Continue to hire and onboard great talent remotely during these times"
        }
    ];

const Main = () => {
    return (
        <div className=' mt-96 xl:my-48 flex flex-col items-center justify-around'>



            <h1 className='mt-48 text-teal-800 text-center text-4xl xl:text-6xl font-bold'>Smart HR to outsmart the<br /> changing world</h1>
            <p className=' text-center mt-5 mx-4 xl:mx-96 mb-20'>The world has changed, and it's going to keep changing. Dreambill helps your teams to adapt,
                <br />evolve, and scale by working more effectively. Spend less time on mundane tasks and focus more<br />
                on strategy. Turn data into smarter decisions and create experiences your employees will love.</p>





            <section className=' flex flex-col xl:flex-row'>
                <div className='flex flex-col h-4/5 mb-20'>
                    {
                        CardText.map((e, i) => {
                            return (
                                <div key={i} className={e.id === 2 ? 'shadow-lg my-5 py-10' :''}>
                                    <CardItem title={e.title} desc={e.desc} />
                                </div>
                            );
                        })
                    }
                </div>

                <div className=' mx-5 xl:mx-0'>
                    <img src="public/static/images/hr-image.png" alt="" />
                </div>
            </section>




            {/* middle */}

            <section className='flex mt-10 flex-col xl:flex-row w-full items-center justify-center'>
                <img src="public/static/images/more_work.png" alt="" className='my-10'/>
                <img src="public/static/images/middle.png" alt="" />
            </section>
            <div className='middle-bottom bg-teal-100 py-5 w-11/12 text-center '>
                <p className='green-text'>Get Started</p>
            </div>




            {/* Lower Middle */}
            <section className=' flex flex-col my-20 xl:my-40'>
                <h1 className=' text-center font-bold text-4xl xl:text-7xl text-teal-800'>Everything you need to create a high<br/>performance culture</h1>
                <div className='lower-middle-image'>
                    <img src="public/static/images/div.large-box-f.png" alt="" />
                    <img src="public/static/images/sec.png" alt="" />
                    <img src="public/static/images/div.large-box-t.png" alt="" />
                </div>
            </section>


        </div>
    );
}

export default Main;




const CardItem = ({ title, desc }) => {
    return (
        <div>
            <h2 className='font-bold text-center xl:text-start'>{title}</h2>
            <p className='desc text-center xl:text-start px-10'>{desc}</p>
        </div>
    );
}

CardItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}