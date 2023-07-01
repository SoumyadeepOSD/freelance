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
        <div className='bg-teal-800 mt-40 xl:mx-24 rounded-2xl flex flex-col items-center justify-center py-20 gap-y-16' >
            <h1 className=' text-center text-white font-bold text-4xl xl:text-6xl'>
                Get started with Dreambill
            </h1>
            <section className='flex flex-row items-center justify-center gap-x-5'>
                <CustomButton label='Create an account' type="white" />
                <CustomButton label='Request a demo' type="green" />
            </section>
        </div>
    );
}

const DownPortion = () => {
    return(
        <div className=' flex flex-col items-center justify-center gap-10 mx-24'>
        <section className='flex flex-col gap-y-10 xl:flex-row justify-between mt-10 w-full'>
                <img src="src/assets/logo.png" alt="" />
                <img src="src/assets/Frame.png" alt="" />
        
        </section>
        <div className=' w-full h-1 bg-slate-400'></div>
        </div>
    );
}



const PrivacySection = () => {
    return(
        <div className=' flex flex-wrap-reverse flex-col xl:flex-row items-center  justify-center xl:justify-between gap-10 mx-24 my-8'>
        <section className=' order-2 xl:order-1'>
                <p>© Copyright 2023. All Rights Reserved.</p>
        </section>
        <section className='order-1 flex flex-col xl:flex-row gap-x-5' >
            <p>About us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </section>
        </div> 
    );
}
export {PrivacySection, DownPortion};