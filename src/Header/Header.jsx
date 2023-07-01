import '../../src/Header/Header.css';
import {CustomButton} from '../Button';
const Header = () => {
    return(
        <div className='space flex flex-row items-center justify-between py-5 px-10 rounded-full shadow-lg'>
            <div>
                <img src="src/assets/logo.png" alt="" className='h-10 w-30'/>
            </div>
            <div>
                <ul className='flex flex-row items-center justify-between w-96'>
                    <li>Why Dreambill</li>
                    <li>Contact us</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='third'>
                <p className='green-text'>Sign In</p>
                <CustomButton label='Get Started'/>
            </div>
        </div>
    );
}

export default Header;