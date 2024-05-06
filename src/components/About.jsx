import { HeadingCompo } from './HeadingCompo';

export const About = () => {
  return (
    <>
      <div id='about' className='about-section pt-24 lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <HeadingCompo headingSmall='About' headingLarge='About' />
          <div className='grid grid-cols-2 items-center gap-7'>
            <div className='col-span-2 lg:col-span-1'>
              <div className='about-image opacity-100 transform-none overflow-hidden rounded-lg'>
                <div className='about-image-inner fiximage relative border-10 border-primary border-opacity-20'>
                  <span className='absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-primary'></span>
                  <span className='absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-primary to-transparent'></span>
                  <span className='absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-primary'></span>
                  <span className='absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-primary'></span>
                  <img
                    alt='Moeen Malik'
                    loading='lazy'
                    width='660'
                    height='422'
                    decoding='async'
                    data-nimg='1'
                    src='/src/assets/imgs/aboutme.JPG'
                  />
                </div>
              </div>
            </div>

            <div className='col-span-2 lg:col-span-1'>
              <div className='about-content opacity-100 transform-none'>
                <h3>
                  Hi, I am <span className='text-primary'>Moeen Malik</span>
                </h3>

                <ul className='styledlist'>
                  <li className='text-lg'>
                    <strong className='inline-block min-w-[120px] font-medium'>
                      First Name
                    </strong>
                    : Moeen
                  </li>
                  <li className='text-lg'>
                    <strong className='inline-block min-w-[120px] font-medium'>
                      Last Name
                    </strong>
                    : Malik
                  </li>
                  <li className='text-lg'>
                    <strong className='inline-block min-w-[120px] font-medium'>
                      Age
                    </strong>
                    : 24 years
                  </li>
                  <li className='text-lg'>
                    <strong className='inline-block min-w-[120px] font-medium'>
                      Nationality
                    </strong>
                    : Pakistani
                  </li>
                  <li className='text-lg'>
                    <strong className='inline-block min-w-[120px] font-medium'>
                      Languages
                    </strong>
                    : English, Urdu
                  </li>
                  <li className='text-lg'>
                    <strong className='inline-block min-w-[120px] font-medium'>
                      Address
                    </strong>
                    : Lahore , Punjab , Pakistan
                  </li>
                  <li className='text-lg'>
                    <strong className='inline-block min-w-[120px] font-medium'>
                      Freelance
                    </strong>
                    : Available
                  </li>
                </ul>

                <a
                  href='../assets/moeen-malik.docx'
                  download="moeen'sCV.docs"
                  className='btn mt-3'
                >
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
