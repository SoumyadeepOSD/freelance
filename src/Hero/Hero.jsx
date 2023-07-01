/* eslint-disable react/no-unescaped-entities */
import '../../src/Hero/Hero.css';
import CustomButton from '../Button';
const Hero = () => {
    return (
        <div className='flex flex-col xl:flex-row relative mt-20 justify-between space'>
            <div className='left-hero'>
                <img src="src/assets/grid.png" alt="grid-vector" className='grid-vector'/>
                <h1 className='bold-line font-bold'>Empower Your<br/> Workforce, Unlock<br/> Africa's Potential</h1>

                <p className='hero-desc'>Empower your business with our comprehensive payroll platform tailored for the African market. Streamline your Payroll Processes, Ensure Compliance, and Focus on Growth</p>

                <section className='flex min-w-max sm:flex-col xl:flex-row gap-x-5 justify-between'>
                    <CustomButton label='Get Started' type="green"/>
                    <CustomButton label='Request a demo' type="white"/>
                </section>
                <p className='hero-desc'>Setup in 5 minutes.</p>
            </div>
            <div className='right-hero w-full'>
                <img src="src/assets/image 2.png" alt="" className='large-hero-img w-11/12 h-2/4'/>
                <section className='green-lower-section px-8 gap-3'>
                <img src="src/assets/image 2.png" alt="" className='flex-1'/>
                <img src="src/assets/image 2.png" alt="" className='flex-1'/>
                </section>
                <img src="src/assets/f_people.png" alt="" className='p1'/>
                <img src="src/assets/fo_people.png" alt="" className='p2'/>
                <img src="src/assets/s_people.png" alt="" className='p3'/>
                <img src="src/assets/t_people.png" alt="" className='p4'/>
            </div>
        </div>
    );
}

export default Hero;