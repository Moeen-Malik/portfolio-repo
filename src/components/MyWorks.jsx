import { HeadingCompo } from './HeadingCompo';

export const MyWorks = () => {
  return (
    <>
      <div id='works' className='portfolios-section pt-24 lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <HeadingCompo headingSmall='My Works' headingLarge='Works' />
          <div className='portfolio-filters flex flex-wrap justify-center gap-4'>
            <button className='btn btn-small btn-transparent'>
              <span>UI/UX Design</span>
            </button>
            <button className='btn btn-small btn-transparent'>
              <span>Html &amp; Css</span>
            </button>
            <button className='btn btn-small btn-transparent'>
              <span>React Js</span>
            </button>
            <button className='btn btn-small btn-transparent'>
              <span>Node Js</span>
            </button>
          </div>

          <div
            className='mt-12 grid grid-cols-6 gap-7'
            // style='transform: none; transform-origin: 50% 50% 0px;'
          >
            <div
              className='col-span-6 sm:col-span-3 lg:col-span-2'
              // style='transform: none; transform-origin: 50% 50% 0px;'
            >
              <div className='portfolio card hovercard group p-4 md:p-5'>
                <div className='portfolio-top relative overflow-hidden'>
                  <div className='portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur'>
                    <img
                      alt='Candle'
                      loading='lazy'
                      width='550'
                      height='384'
                      decoding='async'
                      data-nimg='1'
                      src='/images/portfolios/portfolio-image-19.jpg'
                    />
                  </div>

                  <div className='portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0'>
                    <button className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        // stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z'></path>
                      </svg>
                    </button>
                    <a
                      target='_blank'
                      className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'
                      href='https://dribbble.com'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        // stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z'></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className='portfolio-content mt-4'>
                  <h5 className='mb-0'>Candle</h5>
                  <p>Creative Candle Light</p>
                </div>
              </div>
            </div>

            <div
              className='col-span-6 sm:col-span-3 lg:col-span-2'
              // style='transform: none; transform-origin: 50% 50% 0px;'
            >
              <div className='portfolio card hovercard group p-4 md:p-5'>
                <div className='portfolio-top relative overflow-hidden'>
                  <div className='portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur'>
                    <img
                      alt='Paint'
                      loading='lazy'
                      width='550'
                      height='384'
                      decoding='async'
                      data-nimg='1'
                      src='/images/portfolios/portfolio-image-2.jpg'
                    />
                  </div>

                  <div className='portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0'>
                    <a
                      target='_blank'
                      className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'
                      href=''
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        // stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z'></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className='portfolio-content mt-4'>
                  <h5 className='mb-0'>Paint</h5>
                  <p>Creative wall painting</p>
                </div>
              </div>
            </div>

            <div
              className='col-span-6 sm:col-span-3 lg:col-span-2'
              // style='transform: none; transform-origin: 50% 50% 0px;'
            >
              <div className='portfolio card hovercard group p-4 md:p-5'>
                <div className='portfolio-top relative overflow-hidden'>
                  <div className='portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur'>
                    <img
                      alt='UI/UX Sample'
                      loading='lazy'
                      width='550'
                      height='384'
                      decoding='async'
                      data-nimg='1'
                      src='/images/portfolios/portfolio-image-3.jpg'
                    />
                  </div>

                  <div className='portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0'>
                    <button className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        // stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z'></path>
                      </svg>
                    </button>
                    <a
                      target='_blank'
                      className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'
                      href='/'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        // stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z'></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className='portfolio-content mt-4'>
                  <h5 className='mb-0'>UI/UX Sample</h5>
                  <p>UI/UX Sample design mockup</p>
                </div>
              </div>
            </div>

            <div
              className='col-span-6 sm:col-span-3 lg:col-span-2'
              // style='transform: none; transform-origin: 50% 50% 0px;'
            >
              <div className='portfolio card hovercard group p-4 md:p-5'>
                <div className='portfolio-top relative overflow-hidden'>
                  <div className='portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur'>
                    <img
                      alt='Packet'
                      loading='lazy'
                      width='550'
                      height='384'
                      decoding='async'
                      data-nimg='1'
                      src='/images/portfolios/portfolio-image-4.jpg'
                    />
                  </div>

                  <div className='portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0'>
                    <button className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        // stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z'></path>
                      </svg>
                    </button>
                    <a
                      target='_blank'
                      className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'
                      href='https://dribbble.com'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        // stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z'></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className='portfolio-content mt-4'>
                  <h5 className='mb-0'>Packet</h5>
                  <p>Packet design mockup</p>
                </div>
              </div>
            </div>

            <div
              className='col-span-6 sm:col-span-3 lg:col-span-2'
              // style='transform: none; transform-origin: 50% 50% 0px;'
            >
              <div className='portfolio card hovercard group p-4 md:p-5'>
                <div className='portfolio-top relative overflow-hidden'>
                  <div className='portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur'>
                    <img
                      alt='Packet'
                      loading='lazy'
                      width='550'
                      height='384'
                      decoding='async'
                      data-nimg='1'
                      src='/images/portfolios/portfolio-image-5.jpg'
                    />
                  </div>

                  <div className='portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0'>
                    <button className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        // stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z'></path>
                      </svg>
                    </button>
                    <button className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        // stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z'></path>
                      </svg>
                    </button>
                    <a
                      target='_blank'
                      className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'
                      href='https://dribbble.com'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        // stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z'></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className='portfolio-content mt-4'>
                  <h5 className='mb-0'>Packet</h5>
                  <p>Another packet design mockup</p>
                </div>
              </div>
            </div>

            <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
              <div className='portfolio card hovercard group p-4 md:p-5'>
                <div className='portfolio-top relative overflow-hidden'>
                  <div className='portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur'>
                    <img
                      alt='Cream'
                      loading='lazy'
                      width='550'
                      height='384'
                      decoding='async'
                      data-nimg='1'
                      src='/images/portfolios/portfolio-image-6.jpg'
                    />
                  </div>

                  <div className='portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0'>
                    <a
                      target='_blank'
                      className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey'
                      href='https://dribbble.com'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z'></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className='portfolio-content mt-4'>
                  <h5 className='mb-0'>Cream</h5>
                  <p>Creative cream box design</p>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-12 text-center'>
            <button className='btn btn-small'>
              <span>Load More</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
