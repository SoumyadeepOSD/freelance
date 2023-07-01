/* eslint-disable react/no-unescaped-entities */
import '../../src/Footer/Footer.css';
import CustomButton from '../Button';



const Footer = () => {
    return (
        <div className=' flex flex-col mx-5 xl:mx-28 justify-around'>
            <h1 className='font-bold text-4xl xl:text-7xl text-center xl:text-start text-teal-800'>
                Users love Dreambill
            </h1>
            {/* CEO Section */}
            <section className='flex gap-x-72 flex-col xl:flex-row mt-20'>
                <div className='flex flex-col items-center justify-center xl:justify-start xl:items-start'>
                    <img src="src/assets/CEO2.png" alt="" />
                    <p className=' text-center xl:text-start uppercase my-3 font-semibold text-teal-800'>Sarah N., CEO of XYZ Company</p>
                    <p className=' text-center xl:text-start '>Efficient, reliable, and hassle-free. This payroll platform<br/> has revolutionized our payroll management. Highly<br/> recommended</p>
                </div>

                <div className='flex flex-col items-center mt-20 justify-center xl:justify-start xl:items-start xl:mt-0'>
                    <img src="src/assets/CEO.png" alt="" />
                    <p className=' text-center xl:text-start uppercase my-3 font-semibold text-teal-800'>Sarah N., CEO of XYZ Company</p>
                    <p className=' text-center xl:text-start '>Using this payroll platform has been a game-changer for<br/> our company. It's efficient, user-friendly, and has<br/> streamlined our payroll process.</p>
                </div>



            </section>
        </div>
    );
}

export { Footer, BottomCard };


const BottomCard = () => {
    return (
        <div className='bottom-card space'>
            <h1 className='medium-line' style={{ color: 'white' }}>
                Get started with Dreambill
            </h1>
            <section className='button-section'>
                <CustomButton label='Create an account' type="green" />
                <CustomButton label='Request a demo' type="white" />
            </section>
        </div>
    );
}

