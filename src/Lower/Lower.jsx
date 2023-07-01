/* eslint-disable react/no-unescaped-entities */
import '../../src/Lower/Lower.css';
import PropTypes from 'prop-types';


const TestiData =
    [
        {
            "id": 1,
            "number": "1.25min",
            "testi": `First response time with 24/7 in-app support`
        },
        {
            "id": 2,
            "number": "200+",
            "testi": "In-house tax, payroll and legal specialists"
        },
        {
            "id": 3,
            "number": "100+",
            "testi": "Owned entities worldwide to hire and pay anywhere"
        },
        {
            "id": 4,
            "number": "86hrs",
            "testi": "Saved by customers monthly automating HR admin"
        },
        {
            "id": 5,
            "number": "15+",
            "testi": "Flexible payment methods to pay your team"
        },
        {
            "id": 6,
            "number": "$210,000+",
            "testi": "Of entity set up costs saved per country"
        }
    ];

const Lower = () => {
    return (
        <div className=" flex flex-col items-center justify-center bg-purple-50 mx-5 xl:mx-32 rounded-2xl">
            <h1 className=' text-center text-4xl xl:text-6xl text-teal-800 font-bold mt-5'>Why choose Dreambill</h1>
            <p className='text-center mt-10'>Our guaranteed top-tier service and industry-leading worldwide coverage<br />provide peace of mind for any global team.</p>
            <div className='flex flex-col xl:grid grid-cols-3 grid-rows-2'>
                {
                    TestiData.map((e, i) => {
                        return (
                            <div key={i} className=' my-10 xl:mt-10'>
                                <Numbers number={e.number} testi={e.testi} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export { Lower, Support };




const Support = () => {
    return (
        <div className=' flex flex-col items-center xl:items-start justify-around mx-0 xl:mx-32 my-20'>
            <p >MEET OUR CUSTOMERS</p>
            <h1 className='text-center mt-5 text-2xl xl:text-4xl font-bold xl:text-start'>Supporting <span className=' text-teal-800'>9,000 growing companies</span> to<br/> manage their HR.</h1>

            <div className=' flex flex-col xl:flex-row items-center justify-around my-10 w-9/12'>
                <img src="src/assets/KHM.png" alt="" className='my-10 xl:my-0' />
                <img src="src/assets/DSA.png" alt="" className='my-10 xl:my-0'/>
                <img src="src/assets/Pal.png" alt=""className='my-10 xl:my-0' />
                <img src="src/assets/Para.png" alt="" className='my-10 xl:my-0'/>
                <img src="src/assets/VD.png" alt="" className='my-10 xl:my-0'/>
            </div>
            <span className='line'></span>
        </div>
    );
}


const Numbers = ({ number, testi }) => {
    return (
        <div>
            <h1 className='medium-line font-bold'>
                {number}
            </h1>
            <p className='lower-desc'>
                {testi}
            </p>
        </div>
    );
}

Numbers.propTypes = {
    number: PropTypes.string.isRequired,
    testi: PropTypes.string.isRequired
}

