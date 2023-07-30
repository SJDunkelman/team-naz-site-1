import AvatarImage1 from "../images/avatar1.jpg";
import AvatarImage2 from "../images/avatar2.jpg";
import AvatarImage3 from "../images/avatar3.jpg";
import AvatarImage4 from "../images/avatar4.jpg";
import AvatarImage5 from "../images/avatar5.jpg";
import EmptyAvatarImage from "../images/empty-avatar.png";
import BackgroundGradientImage from "../images/BackgroundGradientImage.jpg"
import SurveyButton from "./SurveyButton.jsx";


export default function CallToAction(){
    return (
        <section className='py-24 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap lg:items-center -m-8'>
              <div className='w-full md:w-1/2 p-8'>
                <div className='max-w-xl'>
                  <h2 className='font-heading mb-6 text-5xl text-gray-700 tracking-tighter'>
                  "I was struggling to grow in my current position and felt like I hit the glass ceiling. I found Maria through Path, she helped me move into a new role where I doubled my salary"
                  </h2>
                  <p className='mb-8 text-2xl font-light tracking-tight'>
                  <span className="italic">Tim</span>, Head of User Experience at Loom
                  </p>
                  <SurveyButton />
                </div>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='relative max-w-max overflow-hidden rounded-2xl'>
                  <img
                    className='mix-blend-color absolute top-0 left-0 w-full h-full'
                    src={BackgroundGradientImage}
                    alt=''
                  />
                  <div className='flex flex-wrap gap-px'>
                    <div className='w-auto'>
                      <img src={AvatarImage1} alt='' />
                    </div>
                    <div className='w-auto'>
                      <img src={AvatarImage3} alt='' />
                    </div>
                    <div className='w-auto'>
                      <img
                        src={EmptyAvatarImage}
                        alt=''
                      />
                    </div>
                    <div className='w-auto'>
                      <img src={AvatarImage2} alt='' />
                    </div>
                    <div className='w-auto'>
                      <img src={AvatarImage4} alt='' />
                    </div>
                    <div className='w-auto'>
                      <img src={AvatarImage5} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}