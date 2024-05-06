import { HeadingCompo } from './HeadingCompo';

export const MyResume = () => {
  return (
    <>
      <div id='resume' className='resume-section pt-24 lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <HeadingCompo headingSmall='My Resume' headingLarge='Resume' />
          <div className='grid grid-cols-2 gap-14 lg:gap-7'>
            <div className='col-span-2 lg:col-span-1'>
              <div className='education-timeline'>
                <h4>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    // stroke-width='0'
                    viewBox='0 0 24 24'
                    className='mr-2 inline-block text-primary'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z'></path>
                  </svg>
                  Educational Qualification
                </h4>
                <div
                  className='timeline-wrap'
                  // style='opacity: 1; transform: none;'
                >
                  <div className='timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex'>
                    <span className='timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0'>
                      2008 - 2010
                    </span>
                    <div className='timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6'>
                      <span className='absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20'>
                        <span className='absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey'></span>
                        <span className='absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2'></span>
                      </span>
                      <h5 className='mb-0 text-primary'>
                        Higher School Graduation
                      </h5>
                      <p className='mb-2 text-heading'>Abc College.</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur donec gravida ullamcorper cum id. Sit
                        viverra donec in ornare euismod.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className='timeline-wrap'
                  // style='opacity: 1; transform: none;'
                >
                  <div className='timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex'>
                    <span className='timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0'>
                      2010 - 2014
                    </span>
                    <div className='timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6'>
                      <span className='absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20'>
                        <span className='absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey'></span>
                        <span className='absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2'></span>
                      </span>
                      <h5 className='mb-0 text-primary'>
                        Bachelor of Sciences
                      </h5>
                      <p className='mb-2 text-heading'>Def University.</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur donec gravida ullamcorper cum id. Sit
                        viverra donec in ornare euismod.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className='timeline-wrap'
                  // style='opacity: 1; transform: none;'
                >
                  <div className='timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex'>
                    <span className='timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0'>
                      2014 - 2016
                    </span>
                    <div className='timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6'>
                      <span className='absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20'>
                        <span className='absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey'></span>
                        <span className='absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2'></span>
                      </span>
                      <h5 className='mb-0 text-primary'>Masters of Sciences</h5>
                      <p className='mb-2 text-heading'>Def University.</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur donec gravida ullamcorper cum id. Sit
                        viverra donec in ornare euismod.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-2 lg:col-span-1'>
              <div className='job-experience'>
                <h4>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    // stroke-width='0'
                    viewBox='0 0 24 24'
                    className='mr-2 inline-block text-primary'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z'></path>
                  </svg>
                  Working Experience
                </h4>
                <div
                  className='timeline-wrap'
                  // style='opacity: 1; transform: none;'
                >
                  <div className='timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex'>
                    <span className='timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0'>
                      2015 - 2017
                    </span>
                    <div className='timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6'>
                      <span className='absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20'>
                        <span className='absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey'></span>
                        <span className='absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2'></span>
                      </span>
                      <h5 className='mb-0 text-primary'>UI/UX Designer</h5>
                      <p className='mb-2 text-heading'>Abc Company.</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur donec gravida ullamcorper cum id. Sit
                        viverra donec in ornare euismod.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className='timeline-wrap'
                  // style='opacity: 1; transform: none;'
                >
                  <div className='timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex'>
                    <span className='timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0'>
                      2017 - 2019
                    </span>
                    <div className='timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6'>
                      <span className='absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20'>
                        <span className='absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey'></span>
                        <span className='absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2'></span>
                      </span>
                      <h5 className='mb-0 text-primary'>Front-end Developer</h5>
                      <p className='mb-2 text-heading'>Def Company.</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur donec gravida ullamcorper cum id. Sit
                        viverra donec in ornare euismod.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className='timeline-wrap'
                  // style='opacity: 1; transform: none;'
                >
                  <div className='timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex'>
                    <span className='timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0'>
                      2019 - Present
                    </span>
                    <div className='timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6'>
                      <span className='absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20'>
                        <span className='absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey'></span>
                        <span className='absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2'></span>
                      </span>
                      <h5 className='mb-0 text-primary'>Back-end Developer</h5>
                      <p className='mb-2 text-heading'>Ghi Company.</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur donec gravida ullamcorper cum id. Sit
                        viverra donec in ornare euismod.
                      </p>
                    </div>
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
