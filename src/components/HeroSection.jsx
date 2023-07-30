import CustomerImage from "../images/CustomerImage.png";
import AvatarImage from "../images/big-avatar.jpg";
import BackgroundGradientImage from "../images/BackgroundGradientImage.jpg";
import SurveyButton from "./SurveyButton.jsx";


export default function HeroSection(){
    return (
      <div className='pt-16 pb-28 bg-white overflow-hidden'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-2xl mx-auto text-center'>
          <h1 className='font-heading mb-4 text-6xl md:text-7xl tracking-tighter'>
            Navigate Life's Crossroads with Confidence
          </h1>
          <p className='mb-10 max-w-xl mx-auto'>
          Unlock your potential with Pathio. Our platform connects you with the right coach tailored to your needs, helping you take your next step with confidence. 
          </p>
          <SurveyButton />
          <p className='mt-4 mb-20 text-gray-600 text-sm tracking-tight'>
            First session for free
          </p>
        </div>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center justify-center'>
            <div className='relative z-10 flex-1'>
              <div
                className='rounded-full'
                style={{
                  background:
                    'url("/bg-gradient.jpg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <div className='flex flex-wrap items-center justify-between'>
                  <div className='w-auto mx-auto'>
                    <div className='relative py-8 w-56 text-center'>
                      <h2 className='mb-3 text-7xl font-semibold text-white tracking-tighter'>
                        84%
                      </h2>
                      <h3 className='mb-3 text-2xl font-semibold text-white'>
                        More Fulfilled
                      </h3>
                      <p className='text-white font-medium'>
                        Reported by career movers
                      </p>
                      <svg
                        className='absolute top-0 -right-16'
                        width={48}
                        height={29}
                        viewBox='0 0 48 29'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M46.9768 3.48213C41.8293 0.969009 36.4787 0.900369 35.2041 1.6363C32.1879 3.37769 31.3644 5.04466 29.5283 8.4754C28.4845 10.4255 27.5211 14.1488 26.0573 15.56C23.9487 17.5928 22.6869 18.5625 19.5593 18.5658C16.5467 18.569 10.9507 15.639 7.3183 17.7362C3.6859 19.8333 3.38771 26.3985 1.76915 27.333'
                          stroke='white'
                          strokeWidth={2}
                          strokeLinecap='round'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='w-auto mx-auto xl:-mr-px'>
                    <img
                      className='relative -right-px transform hover:translate-x-5 trannsition duration-500'
                      src={CustomerImage}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-auto -ml-8'>
              <img
                className='rounded-full'
                src={AvatarImage}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}