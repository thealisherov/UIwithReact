// import React from 'react'
// import Logo from '../assets/logo.png'
// const Header = () => {
//   return (
//     <React.Fragment>
//         <header className='shadow-xl/30 p-5'> 
// <div className='headercontainer m-auto max-w-[1200px] w-[100%] flex justify-between pl-4 pr-6 '>
// <div className='header_logo w-[122px] h-[55px]'  >
// <img className='w-[100%] h-[100%]' src={Logo} alt="Logo" />
// </div>
// <div className="links  flex justify-between  gap-5 mt-3 ">
//     <a className='nav_link text-2xl hover:text-amber-300' href="#">Продукция</a>
//     <a className='nav_link text-2xl hover:text-amber-300' href="#">Сертификаты</a>
//     <a className='nav_link text-2xl hover:text-amber-300' href="#">Наша команда</a>
//     <a className='nav_link text-2xl hover:text-amber-300' href="#">О нас</a>
//     <a className='nav_link text-2xl hover:text-amber-300' href="#">Новости</a>
//     <a className='nav_link text-2xl hover:text-amber-300' href="#">Вакансии</a>
//     <a className='nav_link text-2xl hover:text-amber-300' href="#">Контакты</a>
// </div>
// <div className="language w-[50px] h-[30px] mt-1.5" >
//     <select className='w-[100%] h-[100%] rounded-2xl bg-gray-300' name="language" id="language" >
//         <option  value="ru">RU</option>
//         <option  value="en">EN</option>

//     </select>
// </div>
// </div>
//         </header>
//     </React.Fragment>


//   )
// }

// export default Header




import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='shadow-xl/30 p-5 sticky top-0 bg-white z-50'>
      <div className='headercontainer m-auto max-w-[1200px] w-[100%] flex justify-between items-center pl-4 pr-6'>
        <div className='header_logo w-[122px] h-[55px]'>
          <img className='w-[100%] h-[100%]' src={Logo} alt="Logo" />
        </div>
        
        
        <div className="hidden md:flex justify-between gap-5 items-center">
          <a className='nav_link text-xl lg:text-2xl hover:text-amber-300' href="#">Продукция</a>
          <a className='nav_link text-xl lg:text-2xl hover:text-amber-300' href="#">Сертификаты</a>
          <a className='nav_link text-xl lg:text-2xl hover:text-amber-300' href="#">Наша команда</a>
          <a className='nav_link text-xl lg:text-2xl hover:text-amber-300' href="#">О нас</a>
          <a className='nav_link text-xl lg:text-2xl hover:text-amber-300' href="#">Новости</a>
          <a className='nav_link text-xl lg:text-2xl hover:text-amber-300' href="#">Вакансии</a>
          <a className='nav_link text-xl lg:text-2xl hover:text-amber-300' href="#">Контакты</a>
          
          <div className="language w-[50px] h-[30px] ml-4">
            <select className='w-[100%] h-[100%] rounded-2xl bg-gray-300' name="language" id="language">
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      
     
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <a className='nav_link text-xl hover:text-amber-300' href="#" onClick={toggleMenu}>Продукция</a>
            <a className='nav_link text-xl hover:text-amber-300' href="#" onClick={toggleMenu}>Сертификаты</a>
            <a className='nav_link text-xl hover:text-amber-300' href="#" onClick={toggleMenu}>Наша команда</a>
            <a className='nav_link text-xl hover:text-amber-300' href="#" onClick={toggleMenu}>О нас</a>
            <a className='nav_link text-xl hover:text-amber-300' href="#" onClick={toggleMenu}>Новости</a>
            <a className='nav_link text-xl hover:text-amber-300' href="#" onClick={toggleMenu}>Вакансии</a>
            <a className='nav_link text-xl hover:text-amber-300' href="#" onClick={toggleMenu}>Контакты</a>
            
            <div className="language w-[50px] h-[30px] mt-2">
              <select className='w-[100%] h-[100%] rounded-2xl bg-gray-300' name="language" id="language">
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;