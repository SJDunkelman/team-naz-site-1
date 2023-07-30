
// import Logo from "../images/logo.png";


export default function Footer() {
    return (
        <section className='py-9 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap items-center justify-between -m-4'>
              <div className='w-auto p-4'>
                <div className='flex flex-wrap items-center -m-7'>
                  <div className='w-auto p-7'>
                    <a href='#' className="text-xl font-bold tracking-wide">
                      {/* <img
                        src={Logo}
                        alt=''
                      /> */}
                      PATHIO
                    </a>
                  </div>
                  <div className='w-auto p-7'>
                    <p className='text-sm  tracking-tight'>
                      © Copyright 2023 Pathio
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-auto p-4'>
                <div className='flex flex-wrap items-center -m-4'>
                  <div className='w-auto p-4'>
                    <ul className='flex flex-wrap -m-4'>
                      <li className='p-4'>
                        <a
                          className='text-sm  hover:text-gray-300 tracking-tight transition duration-200'
                          href='#how-it-works'
                        >
                          How it works
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}