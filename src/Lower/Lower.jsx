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
        <div className="Lower-Container space">
            <h1 className='medium-line font-bold'>Why choose Dreambill</h1>
            <p className='hero-desc  text-center compress'>Our guaranteed top-tier service and industry-leading worldwide coverage<br />provide peace of mind for any global team.</p>
            <div className='Lower-Container-section'>
                {
                    TestiData.map((e, i) => {
                        return (
                            <div key={i}>
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
        <div className='Support-Container space'>
            <p style={{color:'#657085'}}>MEET OUR CUSTOMERS</p>
            <h1 style={{fontSize:'40px'}}>Supporting <span style={{color:'#085C60', marginTop:'20px',fontSize:'40px'}}>9,000 growing companies</span> to<br/> manage their HR.</h1>

            <div className='brands'>
                <img src="src/assets/KHM.png" alt="" />
                <img src="src/assets/DSA.png" alt="" />
                <img src="src/assets/Pal.png" alt="" />
                <img src="src/assets/Para.png" alt="" />
                <img src="src/assets/VD.png" alt="" />
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

