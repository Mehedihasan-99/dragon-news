import logo from '../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-[50px]'>
            <img src={logo} alt="" className='max-w-[470px] max-h-[60px] mx-auto mb-5' />
            <h3 className='text-gray-400 text-xl mb-[10px]'>Journalism Without Fear or Favour</h3>
            <p className='font-medium text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;