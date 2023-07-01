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
        <div className='Main-Container space'>
            <h1 className='medium-line font-bold'>Smart HR to outsmart the</h1>
            <h1 className='medium-line font-bold'>changing world</h1>
            <p className='hero-desc compress'>The world has changed, and it's going to keep changing. Dreambill helps your teams to adapt,
                evolve, and scale by working more effectively. Spend less time on mundane tasks and focus more
                on strategy. Turn data into smarter decisions and create experiences your employees will love.</p>


            <section className=' grid grid-cols-2 mt-20 w-full justify-between items-start'>
                <div className='flex flex-col h-4/5'>
                    {
                        CardText.map((e, i) => {
                            return (
                                <div key={i} className={e.id === 2 ? 'shadow' : 'white-card'}>
                                    <CardItem title={e.title} desc={e.desc} />
                                </div>
                            );
                        })
                    }
                </div>

                <div>
                    <img src="src/assets/hr-image.png" alt=""/>
                </div>
            </section>


            {/* middle */}

            <section className='bg-teal-50 w-full flex flex-row  flex-wrap items-center justify-between'>
                <img src="src/assets/more_work.png" alt="" />
                <img src="src/assets/middle.png" alt="" />
            </section>
            <div className='middle-bottom'>
                <p className='green-text'>Get Started</p>
            </div>

            {/* Lower Middle */}
            <section className='lower-middle'>
                <h1 className='medium-line font-bold'>Everything you need to create a high</h1>
                <h1 className='medium-line font-bold'>performance culture</h1>

                <div className='lower-middle-image'>
                    <img src="src/assets/div.large-box-f.png" alt="" />
                    <img src="src/assets/sec.png" alt="" />
                    <img src="src/assets/div.large-box-t.png" alt="" />
                </div>
            </section>
        </div>
    );
}

export default Main;




const CardItem = ({ title, desc }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p className='desc'>{desc}</p>
        </div>
    );
}

CardItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}