import '../../src/Header/Header.css';
import CustomButton from '../Button';
const Header = () => {
    return(
        <div className='mx-3 rounded-full mt-8 flex items-center justify-around flex-col bg-white px-8 lg:flex-row lg:mt-2 shadow-lg lg:mx-24'>
            {/* logo */}
            <div className=' pr-16'>
                <img src="public/static/images/logo.png" alt="" className='h-10 w-30'/>
            </div>
            {/* logo */}

             {/*Middle*/}
            <div className='hidden xl:block w-11/12'>
                <ul className='flex flex-row  justify-center gap-x-20 items-center m-w-max'>
                    <li>Why Dreambill</li>
                    <li>Contact us</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
            </div>
            {/* middle */}

            {/* Last corner */}
            <div className=' w-96 flex flex-row items-center justify-center gap-3'>
                <p className='font-bold text-teal-800'>Sign In</p>
                <CustomButton label='Get Started' type="green"/>
            </div>
            {/* Last corner */}
        </div>
    );
}

export default Header;