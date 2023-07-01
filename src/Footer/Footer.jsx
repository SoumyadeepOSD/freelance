import '../../src/Footer/Footer.css';
import PropTypes from 'prop-types';
import CustomButton from '../Button';



const CEOdata =
    [
        {
            "id": 1,
            "image": "src/assets/CEO2.png",
            "pos": "Sarah N., CEO of XYZ Company",
            "details": "Efficient, reliable, and hassle-free. This payroll platform has revolutionized our payroll management. Highly recommended"
        },
        {
            "id": 2,
            "image": "src/assets/CEO.png",
            "pos": "Sarah N., CEO of XYZ Company",
            "details": "Using this payroll platform has been a game-changer for our company. It's efficient, user-friendly, and has streamlined our payroll process."
        }
    ];

const Footer = () => {
    return (
        <div className='footer-container space'>
            <h1 className='bold-line'>
                Users love Dreambill
            </h1>
            {/* CEO Section */}
            <section className='ceo-section'>
                {
                    CEOdata.map((e, i) => {
                        return (
                            <div key={i}>
                                <CEOCard img={e.image}
                                    pos={e.pos}
                                    desc={e.details} />
                            </div>
                        );
                    })
                }
            </section>
        </div>
    );
}

export { Footer, BottomCard };


const CEOCard = ({ img, pos, desc }) => {
    return (
        <div className='ceo-card'>
            <img src={img} alt="" />
            <p className='ceo-title'>{pos}</p>
            <p className='ceo-lower-desc'>{desc}</p>
        </div>
    );
}


const BottomCard = () => {
    return (
        <div className='bottom-card space'>
            <h1 className='medium-line' style={{color:'white'}}>
                Get started with Dreambill
            </h1>
            <section className='button-section'>
                <CustomButton label='Create an account' type="green"/>
                <CustomButton label='Request a demo' type="white"/>
            </section>
        </div>
    );
}


CEOCard.propTypes = {
    img: PropTypes.string.isRequired,
    pos: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}