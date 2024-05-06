import { HeadingCompo } from './HeadingCompo';

export const Services = () => {
  return (
    <>
      <div className='services-section pt-24 lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <HeadingCompo headingSmall='My Services' headingLarge=' Services' />

          <div className='services-wrapper grid grid-cols-3 gap-7'>
            <div
              className='col-span-3 lg:col-span-1'
              // style='opacity: 1; transform: none;'
            >
              <div className='service card hovercard relative overflow-hidden p-4 md:p-5'>
                <span className='service-icon mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary bg-opacity-10 p-5 text-4xl text-primary'>
                  <div className='fill-current text-primary'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='auto'
                        height='auto'
                        className='injected-svg'
                        data-src='/icons/quill-pen-line.svg'
                        // xmlns:xlink='http://www.w3.org/1999/xlink'
                        role='img'
                        fill='currentColor'
                      >
                        <path fill='none' d='M0 0h24v24H0z'></path>
                        <path d='M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z'></path>
                      </svg>
                    </div>
                  </div>
                </span>
                <h5>Ui/Ux Design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                  diam etiam venenatis mi tristique amet cras diam etiam.
                </p>
              </div>
            </div>

            <div
              className='col-span-3 lg:col-span-1'
              // style='opacity: 1; transform: none;'
            >
              <div className='service card hovercard relative overflow-hidden p-4 md:p-5'>
                <span className='service-icon mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary bg-opacity-10 p-5 text-4xl text-primary'>
                  <div className='fill-current text-primary'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='auto'
                        height='auto'
                        className='injected-svg'
                        data-src='/icons/code-s-slash-line.svg'
                        // xmlns:xlink='http://www.w3.org/1999/xlink'
                        role='img'
                        fill='currentColor'
                      >
                        <path fill='none' d='M0 0h24v24H0z'></path>
                        <path d='M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z'></path>
                      </svg>
                    </div>
                  </div>
                </span>
                <h5>Web Development</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                  diam etiam venenatis mi tristique amet cras diam etiam.
                </p>
              </div>
            </div>

            <div
              className='col-span-3 lg:col-span-1'
              // style='opacity: 1; transform: none;'
            >
              <div className='service card hovercard relative overflow-hidden p-4 md:p-5'>
                <span className='service-icon mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary bg-opacity-10 p-5 text-4xl text-primary'>
                  <div className='fill-current text-primary'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='auto'
                        height='auto'
                        className='injected-svg'
                        data-src='/icons/smartphone-line.svg'
                        // xmlns:xlink='http://www.w3.org/1999/xlink'
                        role='img'
                        fill='currentColor'
                      >
                        <path fill='none' d='M0 0h24v24H0z'></path>
                        <path d='M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'></path>
                      </svg>
                    </div>
                  </div>
                </span>
                <h5>Mobile App Development</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                  diam etiam venenatis mi tristique amet cras diam etiam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
