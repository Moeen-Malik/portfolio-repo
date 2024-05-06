import { HeadingCompo } from './HeadingCompo';

export const MySkills = () => {
  return (
    <>
      <div id='skills' className='skills-section pt-24 lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <HeadingCompo headingSmall='My Skills' headingLarge='Skills' />
          <div className='skills-wrapper'>
            <div className='grid grid-cols-4 gap-7'>
              <div className='col-span-4 sm:col-span-2 lg:col-span-1 opacity-100 transform-none'>
                <div className='circleprogress card hovercard relative p-4 text-center md:p-5'>
                  <div className='relative mb-2 inline-block text-primary'>
                    <svg
                      className='circle'
                      width='120'
                      height='120'
                      viewBox='0 0 120 120'
                    >
                      <circle
                        className='circlebg'
                        cx='60'
                        cy='60'
                        r='54'
                        pathLength='1'
                        strokeLinecap='round'
                        strokeWidth='12'
                      ></circle>
                      <circle
                        cx='60'
                        cy='60'
                        r='54'
                        strokeLinecap='round'
                        strokeWidth='12'
                        opacity='1'
                        pathLength='1'
                        strokeDashoffset='0px'
                        strokeDasharray='0.85px 1px'
                      ></circle>
                    </svg>
                    <span className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body'>
                      85%
                    </span>
                  </div>
                  <h5>UI/UX Design</h5>
                </div>
              </div>

              <div className='col-span-4 sm:col-span-2 lg:col-span-1'>
                <div className='circleprogress card hovercard relative p-4 text-center md:p-5'>
                  <div className='relative mb-2 inline-block text-primary'>
                    <svg
                      className='circle'
                      width='120'
                      height='120'
                      viewBox='0 0 120 120'
                    >
                      <circle
                        className='circlebg'
                        cx='60'
                        cy='60'
                        r='54'
                        pathLength='1'
                        strokeLinecap='round'
                        strokeWidth='12'
                      ></circle>
                      <circle
                        cx='60'
                        cy='60'
                        r='54'
                        strokeLinecap='round'
                        strokeWidth='12'
                        opacity='1'
                        pathLength='1'
                        strokeDashoffset='0px'
                        strokeDasharray='0.8px 1px'
                      ></circle>
                    </svg>
                    <span className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body'>
                      80%
                    </span>
                  </div>
                  <h5>Back-end Development</h5>
                </div>
              </div>

              <div className='col-span-4 sm:col-span-2 lg:col-span-1'>
                <div className='circleprogress card hovercard relative p-4 text-center md:p-5'>
                  <div className='relative mb-2 inline-block text-primary'>
                    <svg
                      className='circle'
                      width='120'
                      height='120'
                      viewBox='0 0 120 120'
                    >
                      <circle
                        className='circlebg'
                        cx='60'
                        cy='60'
                        r='54'
                        pathLength='1'
                        strokeLinecap='round'
                        strokeWidth='12'
                      ></circle>
                      <circle
                        cx='60'
                        cy='60'
                        r='54'
                        strokeLinecap='round'
                        strokeWidth='12'
                        opacity='1'
                        pathLength='1'
                        strokeDashoffset='0px'
                        strokeDasharray='0.95px 1px'
                      ></circle>
                    </svg>
                    <span className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body'>
                      95%
                    </span>
                  </div>
                  <h5>Front-end Development</h5>
                </div>
              </div>

              <div className='col-span-4 sm:col-span-2 lg:col-span-1'>
                <div className='circleprogress card hovercard relative p-4 text-center md:p-5'>
                  <div className='relative mb-2 inline-block text-primary'>
                    <svg
                      className='circle'
                      width='120'
                      height='120'
                      viewBox='0 0 120 120'
                    >
                      <circle
                        className='circlebg'
                        cx='60'
                        cy='60'
                        r='54'
                        pathLength='1'
                        strokeLinecap='round'
                        strokeWidth='12'
                      ></circle>
                      <circle
                        cx='60'
                        cy='60'
                        r='54'
                        strokeLinecap='round'
                        strokeWidth='12'
                        opacity='1'
                        pathLength='1'
                        strokeDashoffset='0px'
                        strokeDasharray='0.75px 1px'
                      ></circle>
                    </svg>
                    <span className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body'>
                      75%
                    </span>
                  </div>
                  <h5>Mobile App Development</h5>
                </div>
              </div>
            </div>

            <div className='py-7'></div>

            <div className='grid grid-cols-2 gap-7'>
              <div className='col-span-2 md:col-span-1'>
                <div className='progress'>
                  <h5>
                    Javascript -<span className='text-primary'>(85%)</span>
                  </h5>
                  <div className='progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20'>
                    <span className='progress-progress w-[85%] absolute left-0 top-0 h-full rounded-full bg-primary'></span>
                  </div>
                </div>
              </div>

              <div className='col-span-2 md:col-span-1'>
                <div className='progress'>
                  <h5>
                    Node Js -<span className='text-primary'>(90%)</span>
                  </h5>
                  <div className='progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20'>
                    <span className='progress-progress w-[90%] absolute left-0 top-0 h-full origin-[0% 50% 0px] rounded-full bg-primary'></span>
                  </div>
                </div>
              </div>

              <div className='col-span-2 md:col-span-1'>
                <div className='progress'>
                  <h5>
                    React Js -<span className='text-primary'>(80%)</span>
                  </h5>
                  <div className='progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20'>
                    <span className='progress-progress w-[80%] absolute origin-[0% 50% 0px] left-0 top-0 h-full rounded-full bg-primary'></span>
                  </div>
                </div>
              </div>

              <div className='col-span-2 md:col-span-1'>
                <div className='progress'>
                  <h5>
                    React Native -<span className='text-primary'>(70%)</span>
                  </h5>
                  <div className='progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20'>
                    <span className='progress-progress w-[70%] absolute left-0 top-0 h-full rounded-full bg-primary'></span>
                  </div>
                </div>
              </div>

              <div className='col-span-2 md:col-span-1'>
                <div className='progress'>
                  <h5>
                    Html &amp; Css -<span className='text-primary'>(95%)</span>
                  </h5>
                  <div className='progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20'>
                    <span className='progress-progress w-[95%] absolute left-0 top-0 h-full rounded-full bg-primary'></span>
                  </div>
                </div>
              </div>

              <div className='col-span-2 md:col-span-1'>
                <div className='progress'>
                  <h5>
                    Photoshop -<span className='text-primary'>(75%)</span>
                  </h5>
                  <div className='progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20'>
                    <span className='progress-progress w-[75%] absolute left-0 top-0 h-full rounded-full bg-primary'></span>
                  </div>
                </div>
              </div>

              <div className='col-span-2 md:col-span-1'>
                <div className=''>
                  <h5>
                    Illustrator -<span className='text-primary'>(70%)</span>
                  </h5>
                  <div className=' relative h-4 w-full rounded-full bg-primary bg-opacity-20'>
                    <span className=' w-[70%] absolute left-0 top-0 h-full rounded-full bg-primary'></span>
                  </div>
                </div>
              </div>

              <div className='col-span-2 md:col-span-1 transform-none'>
                <div className='progress'>
                  <h5>
                    Figma -<span className='text-primary'>(90%)</span>
                  </h5>
                  <div className='progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20'>
                    <span className='progress-progress w-[90%] absolute left-0 top-0 h-full rounded-full bg-primary'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
