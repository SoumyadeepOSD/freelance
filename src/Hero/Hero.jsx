/* eslint-disable react/no-unescaped-entities */
import '../../src/Hero/Hero.css';
import CustomButton from '../Button';
const Hero = () => {
    return (
        <div className='flex flex-col xl:flex-row'>


            {/* Left Section */}
            <div className='flex-col items-center justify-around  mx-3 lg:mx-24 relative mt-12'>
                <img src="./static/images/grid.png" alt="grid-vector" className='absolute left-96 hidden xl:block' />
                <h1 className='text-4xl text-center xl:text-7xl font-bold text-teal-800 xl:text-start'>Empower Your<br /> Workforce, Unlock<br /> Africa's Potential</h1>

                <p className='my-10'>Empower your business with our comprehensive payroll platform tailored for the African market. Streamline your Payroll Processes, Ensure Compliance, and Focus on Growth</p>

                {/*Bottom Button section  */}
                <section className=' flex flex-col xl:flex-row items-center gap-x-5'>
                    <CustomButton label='Get Started' type="green" />
                    <CustomButton label='Request a demo' type="white" />
                </section>

                <p className='text-center my-5 xl:text-left'>Setup in 5 minutes.</p>
                {/*Bottom Button section  */}
            </div>
            {/* Left Section */}



            {/* Right Section */}
            <div className='w-5/6 absolute xl:w-2/6 bg-teal-800 self-center top-full xl:top-36 rounded-3xl pb-5 right-10 xl:right-48'>

                <section className=' flex flex-col items-center justify-center box-border'>
                    <img src="./static/images/image 2.png" alt="" className=' w-11/12 my-5  rounded-lg' />
                    <section className='flex flex-col xl:flex-row items-center justify-center gap-4' >
                        <img src="./static/images/image 2.png" alt=""  className='sw-11/12 rounded-lg'/>
                        <img src="./static/images/image 2.png" alt="" className='w-11/12 rounded-lg' />
                    </section>
                </section>




                <img src="./static/images/f_people.png" alt="" className='h-14 xl:h-16 absolute -right-5 -top-5'/>
                <img src="./static/images/fo_people.png" alt=""className='h-14 xl:h-16 absolute -left-5 top-36' />
                <img src="./static/images/s_people.png" alt=""className=' h-14 xl:h-16 absolute -right-5 bottom-24' />
                <img src="./static/images/t_people.png" alt="" className=' h-14 xl:h-16 absolute -bottom-5 left-24'/>
            </div>
            {/* Right Section */}

        </div>
    );
}

export default Hero;