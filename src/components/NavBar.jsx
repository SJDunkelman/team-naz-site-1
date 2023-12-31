import { useState } from "react"
// import Logo from "../images/logo.png";
import { MAILTO_LINK } from "../consts";
import SurveyButton from "./SurveyButton.jsx";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
    <>
        <div className='container px-4 mx-auto'>
              <div className='flex items-center justify-between py-5'>
                <div className='w-auto'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-auto pr-2'>
                      <a href='#' className="text-xl font-bold tracking-wide">
                        {/* <img
                          src={Logo}
                          alt=''
                        /> */}
                        PATHIO
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-auto'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-auto hidden lg:block'>
                      <ul className='flex items-center mr-8'>
                        <li className='mr-14 font-medium hover:text-gray-900 tracking-tight'>
                          <a href='#how-it-works'>How it Works</a>
                        </li>
                        <li className='mr-8 font-medium hover:text-gray-900 tracking-tight border-r pr-8'>
                          <a href={MAILTO_LINK}>Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div className='w-auto hidden lg:block'>
                      <div className='inline-block'>
                        <SurveyButton /> 
                      </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className='w-auto lg:hidden' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                      <a href='#'>
                        <svg
                          className='navbar-burger text-indigo-600'
                          width={51}
                          height={51}
                          viewBox='0 0 56 56'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            width={56}
                            height={56}
                            rx={28}
                            fill='currentColor'
                          />
                          <path
                            d='M37 32H19M37 24H19'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu bar dropdown */}
            {isMobileMenuOpen && 
            <div className='navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
            <nav className='relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto'>
              <div className='flex flex-wrap justify-between h-full'>
                <div className='w-full'>
                  <div className='flex items-center justify-between -m-2'>
                    <div className='w-auto p-2'>
                      <a className='inline-block' href='#'>
                        <img
                          src='basko-assets/logos/basko-logo-dark.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='w-auto p-2'>
                    <a className='navbar-burger' href='#' onClick={() => setIsMobileMenuOpen(false)}>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6 18L18 6M6 6L18 18'
                            stroke='#111827'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center py-16 w-full'>
                  <ul>
                    <li className='mb-12 font-medium hover:text-gray-900 tracking-tight'>
                      <a href='#how-it-works'>How it Works</a>
                    </li>
                    <li className='mb-12 font-medium hover:text-gray-900 tracking-tight'>
                      <a href={MAILTO_LINK}>Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className='flex flex-col justify-end w-full pb-8'>
                  <SurveyButton />
                </div>
              </div>
            </nav>
          </div>
        }
    </>
    )
}