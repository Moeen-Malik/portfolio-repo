/* eslint-disable react/no-unescaped-entities */
import { Star } from 'lucide-react';
import { HeadingCompo } from './HeadingCompo';

export const ClientsReview = () => {
  return (
    <>
      <div id='clients' className='reviews-section pt-24 lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <HeadingCompo headingSmall='clients reviews' headingLarge='reviews' />

          <div className='swiper-holder'>
            <div className='swiper swiper-initialized swiper-horizontal swiper-backface-hidden'>
              <div
                className='swiper-wrapper transition-all duration-0'
                // style='transition-duration: 0ms; transform: translate3d(-850.667px, 0px, 0px); transition-delay: 0ms;'
              >
                <div className='swiper-slide  w-[397.333px] mr-[28px] gap-3'>
                  <div className='slider-item'>
                    <div className='review card mt-11 p-4 md:p-5'>
                      <div className='review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16'>
                        <img
                          alt='user image'
                          loading='lazy'
                          width='80px'
                          height='100%'
                          decoding='async'
                          data-nimg='1'
                          src='/src/assets/imgs/Moeen-bg-white-center-.png'
                          className='text-transparent bg-cover bg-no-repeat  '
                        />
                      </div>
                      <h5 className='mb-0'>Mark Bartolo</h5>
                      <p className='mb-2 text-body'>
                        <small>Client - Linkdin.com</small>
                      </p>
                      <div className='review-stars mb-3'>
                        <div className='star-ratings s' title='5 Stars'>
                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>

                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>
                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>

                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>

                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              stroke='yellow'
                              fill='yellow'
                              strokeWidth='0.2px'
                            />
                          </div>
                        </div>
                      </div>
                      <p>
                        Working with Moeen is very good experience for me. He s
                        a good person. If I need developer in future, I'll
                        definately hire him.
                      </p>
                    </div>
                  </div>
                  <div className='slider-item'>
                    <div className='review card mt-11 p-4 md:p-5'>
                      <div className='review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16'>
                        <img
                          alt='user image'
                          loading='lazy'
                          width='80'
                          height='80'
                          decoding='async'
                          data-nimg='1'
                          src='/src/assets/imgs/Moeen-bg-white-.png'
                          className='text-transparent bg-cover '
                        />
                      </div>
                      <h5 className='mb-0'>Mark Bartolo</h5>
                      <p className='mb-2 text-body'>
                        <small>Client - UpWork.com</small>
                      </p>
                      <div className='review-stars mb-3'>
                        <div className='star-ratings s' title='5 Stars'>
                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>

                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>
                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>

                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>

                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              stroke='yellow'
                              fill='yellow'
                              strokeWidth='0.2px'
                            />
                          </div>
                        </div>
                      </div>
                      <p>
                        Working with Moeen is very good experience for me. He s
                        a good person. If I need developer in future, I'll
                        definately hire him.
                      </p>
                    </div>
                  </div>
                  <div className='slider-item'>
                    <div className='review card mt-11 p-4 md:p-5'>
                      <div className='review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16'>
                        <img
                          alt='user image'
                          loading='lazy'
                          width='80px'
                          height='80px'
                          decoding='async'
                          data-nimg='1'
                          src='/src/assets/imgs/DSC_0681.JPG'
                          className='text-transparent bg-cover bg-no-repeat '
                        />
                      </div>
                      <h5 className='mb-0'>Mark Bartolo</h5>
                      <p className='mb-2 text-body'>
                        <small>Client - Fiverr.com</small>
                      </p>
                      <div className='review-stars mb-3'>
                        <div className='star-ratings s' title='5 Stars'>
                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>

                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>
                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>

                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star
                              fill='yellow'
                              strokeWidth='0.2px'
                              stroke='yellow'
                            />
                          </div>

                          <div className='star-container relative inline-block align-middle pl-0.5'>
                            <Star stroke='yellow' strokeWidth='0.2px' />
                          </div>
                        </div>
                      </div>
                      <p>
                        Working with Moeen is very good experience for me. He is
                        a good person. If I need developer in future, I'll
                        definately hire him.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className='swiper-button-prev'></button>
            <button className='swiper-button-next'></button> */}
          </div>
        </div>
      </div>
    </>
  );
};
