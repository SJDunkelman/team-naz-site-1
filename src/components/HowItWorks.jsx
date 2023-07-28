import BenefitLogo1 from '../images/account.svg';
import BenefitLogo2 from '../images/tool.svg';
import BenefitLogo3 from '../images/start.svg';


export default function HowItWorks() {
    return (
        <section className='py-24 bg-white overflow-hidden' id='how-it-works'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-xl text-center mx-auto mb-20'>
              <h2 className='font-heading mb-5 text-6xl tracking-tighter'>
              Embark on Your Success Journey with Pathio
              </h2>
                {/* <p className='text-xl tracking-tight'>
                Navigate Life's Crossroads with Confidence. Pathio Empowers Creative Spirits Like You to Triumph Over Challenges and Transitions, Leading to Unmatched Success and Fulfillment.
                </p> */}
            </div>
            <div className='flex flex-wrap -m-7 mb-14 mx-auto'>
              <div className='w-full md:w-1/3 p-7'>
                <div className='max-w-xs flex flex-col text-center items-center justify-center'>
                  <img
                    className='mb-10'
                    src={BenefitLogo1}
                    alt=''
                  />
                  <h3 className='mb-4 text-xl font-semibold tracking-tight'>
                  Tailor-Made Guidance for Your Unique Journey
                  </h3>
                  <p className='text-gray-600 tracking-tight'>
                  Experience the Precision of Being Paired with the Ideal Coach or Mentor, Catering Specifically to Your Aspirations and Challenges.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/3 p-7'>
                <div className='max-w-xs flex flex-col text-center items-center justify-center'>
                  <img
                    className='mb-10'
                    src={BenefitLogo2}
                    alt=''
                  />
                  <h3 className='mb-4 text-xl font-semibold tracking-tight'>
                  Inspiring Content that Fuels Your Growth
                  </h3>
                  <p className='text-gray-600 tracking-tight'>
                  Dive into a Vast Ocean of Personalized Content, Meticulously Curated to Propel Your Personal and Professional Evolution.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/3 p-7'>
                <div className='max-w-xs flex flex-col text-center items-center justify-center'>
                  <img
                    className='mb-10'
                    src={BenefitLogo3}
                    alt=''
                  />
                  <h3 className='mb-4 text-xl font-semibold tracking-tight'>
                  Navigate Life's Crossroads with Unshakable Confidence
                  </h3>
                  <p className='text-gray-600 tracking-tight'>
                  Leverage Pathio's Expertise to Steer Through Life's Crossroads with Certainty, Empowering You to Make Confident Decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-center'>
              <a
                className='inline-block mx-auto px-5 py-4 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200'
                href='#'
              >
                Begin Your Journey
              </a>
            </div>
          </div>
        </section>
    )
}