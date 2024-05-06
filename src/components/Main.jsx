import { Footer } from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { About } from './About';
// import { Blog } from './Blog';
import { ClientsReview } from './ClientsReview';
import { ContectUs } from './ContactUs';
import { HeroSection } from './HeroSection';
import { MyResume } from './MyResume';
import { MySkills } from './MySkills';
import { MyWorks } from './MyWorks';
import { Services } from './Services';

export const Main = () => {
  return (
    <>
      <div className='relative'>
        <div className='wrapper relative min-h-screen w-full bg-grey blurredBg'>
          <Header />
          <main className='page-content relative bg-grey bg-opacity-95 backdrop-blur-lg backdrop-filter'>
            <div className='bglines fixed left-0 top-0 z-20 flex h-screen w-full justify-around'>
              <span className='border-r border-white border-opacity-5'></span>
              <span className='border-r border-white border-opacity-5'></span>
              <span className='border-r border-white border-opacity-5'></span>
              <span className='border-r border-white border-opacity-5'></span>
              <span className='border-r border-white border-opacity-5'></span>
            </div>
            <div className='sitedata relative z-30 min-h-screen'>
              <HeroSection />
              <About />
              <MySkills />
              <Services />
              <MyResume />
              <MyWorks />
              <ClientsReview />
              {/* <Blog /> */}
              <ContectUs />
            </div>
          </main>
          <Footer />
          <a href='#home'>
            <button className='btn fixed bottom-12 left-auto top-auto right-7 z-30 rounded-full p-2.5 text-xl'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                className='h-[1em] w-[1em]'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z'></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
