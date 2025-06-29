import { useContext, useState } from 'react';
import Logo from '../assets/logo2.png';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { HiMenuAlt1, HiMenuAlt3, } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import { NavbarMenu } from './Navbar';
import { ShopContext } from '../context/ShopContext';

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='text-black py-2 bg-gray-100 z-10 dark:bg-[#010101]'>
      <div className='container flex justify-between items-center '>
        {/* logo section */}
        <div className='dark:bg-gray-100 rounded'>
          <img src={Logo} alt="" className='max-w-[100px]' />
        </div>
        {/* menu section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-4 relative z-40 dark:text-[#9dffe8]'>
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                  <Link to={item.link} className='inline-block text-base font-semibold py-2 px-3 uppercase'>
                    {item.title}
                  </Link>
              </li>
            ))}
              <Link to='/cart'> <div className='relative dark:bg-[#00042b]'>
                <ShoppingCart /> <div className='bg-[#138695] w-5 absolute -top-3 -right-2 flex items-center justify-center rounded-full text-white'>{getTotalCartItems()}</div>
              </div>
              </Link>
              {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </ul>
        </div>
        <div className='flex gap-8 md:hidden z-50 dark:text-[#24ffe5]'>
          <Link to={'/cart'}><div className='relative w-10 z-50'>
          <ShoppingCart /> <div className='bg-[#138695] z-40 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white'>{getTotalCartItems()}</div>
            </div></Link>
          {/* mobile hamburger menu */}
          {
            showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden z-50' size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden z-50' size={30} />
            )
          }
          {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
        </div>        
      </div>
      <div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  )
}

export default Navbar2
