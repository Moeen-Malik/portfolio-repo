import { HeadingCompo } from './HeadingCompo';

export const Blog = () => {
  return (
    <>
      <div id='blog' className='news-section pt-24 lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <HeadingCompo headingSmall='Latest Blogs' headingLarge='Blogs' />

          <div className='swiper-holder'>
            <div className='swiper swiper-initialized swiper-horizontal swiper-backface-hidden'>
              <div
                className='swiper-wrapper'
                // style='transition-duration: 0ms; transform: translate3d(-425.333px, 0px, 0px); transition-delay: 0ms;'
              >
                <div
                  className='swiper-slide swiper-slide-prev'
                  // style='width: 397.333px; margin-right: 28px;'
                >
                  <div className='slider-item'>
                    <article className='blog card p-4 md:p-5'>
                      <div className='blog-top relative mb-4'>
                        <a
                          className='fiximage hover-scale block'
                          title='What designer can do'
                          href='/demo2/postdetails/what-designer-can-do'
                        >
                          <img
                            alt='Blog Image'
                            loading='lazy'
                            width='600'
                            height='289'
                            decoding='async'
                            data-nimg='1'
                            className='object-cover object-center'
                            // srcset='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-1.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-1.jpg&amp;w=1200&amp;q=75 2x'
                            src='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-1.jpg&amp;w=1200&amp;q=75'
                            // // style="color: transparent; background-size: cover; background-position: 50% 50%; background-repeat: no-repeat; background-image: url(&quot;data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 289'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWRlZGVkIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2U1ZTVlNSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNkYWRhZGEiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgZmlsbD0iIzFhMmMzOCIgLz4KICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgZmlsbD0idXJsKCNnKSIgZmlsbC1vcGFjaXR5PSIwLjEiIC8+CiAgICA8YW5pbWF0ZSB4bGluazpocmVmPSIjciIgYXR0cmlidXRlTmFtZT0ieCIgZnJvbT0iLTQwMCIgdG89IjQwMCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiICAvPgo8L3N2Zz4='/%3E%3C/svg%3E&quot;);"
                          />
                        </a>
                        <div className='blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey'>
                          <span className='month block text-sm uppercase leading-none'>
                            May
                          </span>
                          <span className='date block text-2xl leading-none'>
                            11
                          </span>
                          <span className='year block text-sm leading-none'>
                            2022
                          </span>
                        </div>
                      </div>
                      <h5 className='mb-0'>
                        <a
                          className=' block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary'
                          title='What designer can do'
                          href='/demo2/postdetails/what-designer-can-do'
                        >
                          What designer can do
                        </a>
                      </h5>
                      <div className='flex list-none gap-1.5 text-sm'>
                        <span className="after:content-[','] last:after:hidden">
                          <a
                            className=' hover:text-primary'
                            href='/demo2/category/trend/1'
                          >
                            Trend
                          </a>
                        </span>
                      </div>
                    </article>
                  </div>
                </div>

                <div
                  className='swiper-slide swiper-slide-active'
                  // style='width: 397.333px; margin-right: 28px;'
                >
                  <div className='slider-item'>
                    <article className='blog card p-4 md:p-5'>
                      <div className='blog-top relative mb-4'>
                        <a
                          className='fiximage hover-scale block'
                          title='What you need to learn in 2022'
                          href='/demo2/postdetails/what-you-need-to-learn-in-2022'
                        >
                          <img
                            alt='Blog Image'
                            loading='lazy'
                            width='600'
                            height='289'
                            decoding='async'
                            data-nimg='1'
                            className='object-cover object-center'
                            // srcset='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-2.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-2.jpg&amp;w=1200&amp;q=75 2x'
                            src='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-2.jpg&amp;w=1200&amp;q=75'
                            // // style="color: transparent; background-size: cover; background-position: 50% 50%; background-repeat: no-repeat; background-image: url(&quot;data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 289'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWRlZGVkIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2U1ZTVlNSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNkYWRhZGEiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgZmlsbD0iIzFhMmMzOCIgLz4KICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgZmlsbD0idXJsKCNnKSIgZmlsbC1vcGFjaXR5PSIwLjEiIC8+CiAgICA8YW5pbWF0ZSB4bGluazpocmVmPSIjciIgYXR0cmlidXRlTmFtZT0ieCIgZnJvbT0iLTQwMCIgdG89IjQwMCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiICAvPgo8L3N2Zz4='/%3E%3C/svg%3E&quot;);"
                          />
                        </a>
                        <div className='blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey'>
                          <span className='month block text-sm uppercase leading-none'>
                            May
                          </span>
                          <span className='date block text-2xl leading-none'>
                            11
                          </span>
                          <span className='year block text-sm leading-none'>
                            2022
                          </span>
                        </div>
                      </div>
                      <h5 className='mb-0'>
                        <a
                          className=' block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary'
                          title='What you need to learn in 2022'
                          href='/demo2/postdetails/what-you-need-to-learn-in-2022'
                        >
                          What you need to learn in 2022
                        </a>
                      </h5>
                      <div className='flex list-none gap-1.5 text-sm'>
                        <span className="after:content-[','] last:after:hidden">
                          <a
                            className=' hover:text-primary'
                            href='/demo2/category/trend/1'
                          >
                            Trend
                          </a>
                        </span>
                      </div>
                    </article>
                  </div>
                </div>

                <div
                  className='swiper-slide swiper-slide-next'
                  // style='width: 397.333px; margin-right: 28px;'
                >
                  <div className='slider-item'>
                    <article className='blog card p-4 md:p-5'>
                      <div className='blog-top relative mb-4'>
                        <a
                          className='fiximage hover-scale block'
                          title='Learn programming easy way'
                          href='/demo2/postdetails/learn-programming-easy-way'
                        >
                          <img
                            alt='Blog Image'
                            loading='lazy'
                            width='600'
                            height='289'
                            decoding='async'
                            data-nimg='1'
                            className='object-cover object-center'
                            // srcset='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-3.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-3.jpg&amp;w=1200&amp;q=75 2x'
                            src='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-3.jpg&amp;w=1200&amp;q=75'
                            // // style="color: transparent; background-size: cover; background-position: 50% 50%; background-repeat: no-repeat; background-image: url(&quot;data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 289'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWRlZGVkIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2U1ZTVlNSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNkYWRhZGEiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgZmlsbD0iIzFhMmMzOCIgLz4KICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgZmlsbD0idXJsKCNnKSIgZmlsbC1vcGFjaXR5PSIwLjEiIC8+CiAgICA8YW5pbWF0ZSB4bGluazpocmVmPSIjciIgYXR0cmlidXRlTmFtZT0ieCIgZnJvbT0iLTQwMCIgdG89IjQwMCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiICAvPgo8L3N2Zz4='/%3E%3C/svg%3E&quot;);"
                          />
                        </a>
                        <div className='blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey'>
                          <span className='month block text-sm uppercase leading-none'>
                            May
                          </span>
                          <span className='date block text-2xl leading-none'>
                            08
                          </span>
                          <span className='year block text-sm leading-none'>
                            2022
                          </span>
                        </div>
                      </div>
                      <h5 className='mb-0'>
                        <a
                          className=' block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary'
                          title='Learn programming easy way'
                          href='/demo2/postdetails/learn-programming-easy-way'
                        >
                          Learn programming easy way
                        </a>
                      </h5>
                      <div className='flex list-none gap-1.5 text-sm'>
                        <span className="after:content-[','] last:after:hidden">
                          <a
                            className=' hover:text-primary'
                            href='/demo2/category/technology/1'
                          >
                            Technology
                          </a>
                        </span>
                      </div>
                    </article>
                  </div>
                </div>

                <div
                  className='swiper-slide'
                  // style='width: 397.333px; margin-right: 28px;'
                >
                  <div className='slider-item'>
                    <article className='blog card p-4 md:p-5'>
                      <div className='blog-top relative mb-4'>
                        <a
                          className='fiximage hover-scale block'
                          title='How to choose javascript framework for your project'
                          href='/demo2/postdetails/how-to-choose-javascript-framework'
                        >
                          <img
                            alt='Blog Image'
                            loading='lazy'
                            width='600'
                            height='289'
                            decoding='async'
                            data-nimg='1'
                            className='object-cover object-center'
                            // srcset='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-4.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-4.jpg&amp;w=1200&amp;q=75 2x'
                            src='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-4.jpg&amp;w=1200&amp;q=75'
                          />
                        </a>
                        <div className='blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey'>
                          <span className='month block text-sm uppercase leading-none'>
                            May
                          </span>
                          <span className='date block text-2xl leading-none'>
                            01
                          </span>
                          <span className='year block text-sm leading-none'>
                            2022
                          </span>
                        </div>
                      </div>
                      <h5 className='mb-0'>
                        <a
                          className=' block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary'
                          title='How to choose javascript framework for your project'
                          href='/demo2/postdetails/how-to-choose-javascript-framework'
                        >
                          How to choose javascript framework for your project
                        </a>
                      </h5>
                      <div className='flex list-none gap-1.5 text-sm'>
                        <span className="after:content-[','] last:after:hidden">
                          <a
                            className=' hover:text-primary'
                            href='/demo2/category/javascript/1'
                          >
                            Javascript
                          </a>
                        </span>
                        <span className="after:content-[','] last:after:hidden">
                          <a
                            className=' hover:text-primary'
                            href='/demo2/category/technology/1'
                          >
                            Technology
                          </a>
                        </span>
                      </div>
                    </article>
                  </div>
                </div>

                <div className='swiper-slide w-[397.333px] mr-[28px]'>
                  <div className='slider-item'>
                    <article className='blog card p-4 md:p-5'>
                      <div className='blog-top relative mb-4'>
                        <a
                          className='fiximage hover-scale block'
                          title='NodeJs application testing'
                          href='/demo2/postdetails/nodejs-application-testing'
                        >
                          <img
                            alt='Blog Image'
                            loading='lazy'
                            width='600'
                            height='289'
                            decoding='async'
                            data-nimg='1'
                            className='object-cover object-center'
                            // srcset='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-5.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-5.jpg&amp;w=1200&amp;q=75 2x'
                            src='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-5.jpg&amp;w=1200&amp;q=75'
                          />
                        </a>
                        <div className='blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey'>
                          <span className='month block text-sm uppercase leading-none'>
                            May
                          </span>
                          <span className='date block text-2xl leading-none'>
                            01
                          </span>
                          <span className='year block text-sm leading-none'>
                            2022
                          </span>
                        </div>
                      </div>
                      <h5 className='mb-0'>
                        <a
                          className=' block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary'
                          title='NodeJs application testing'
                          href='/demo2/postdetails/nodejs-application-testing'
                        >
                          NodeJs application testing
                        </a>
                      </h5>
                      <div className='flex list-none gap-1.5 text-sm'>
                        <span className="after:content-[','] last:after:hidden">
                          <a
                            className=' hover:text-primary'
                            href='/demo2/category/javascript/1'
                          >
                            Javascript
                          </a>
                        </span>
                      </div>
                    </article>
                  </div>
                </div>

                <div
                  className='swiper-slide w-[397.333px] mr-[28px]'
                  // style='width: 397.333px; margin-right: 28px;'
                >
                  <div className='slider-item'>
                    <article className='blog card p-4 md:p-5'>
                      <div className='blog-top relative mb-4'>
                        <a
                          className='fiximage hover-scale block'
                          title='Testing in javascript'
                          href='/demo2/postdetails/testing-in-javascript'
                        >
                          <img
                            alt='Blog Image'
                            loading='lazy'
                            width='600'
                            height='289'
                            decoding='async'
                            data-nimg='1'
                            className='object-cover object-center'
                            // srcset='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-6.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-6.jpg&amp;w=1200&amp;q=75 2x'
                            src='/_next/image?url=%2Fimages%2Fblog%2Fsm%2Fblog-image-6.jpg&amp;w=1200&amp;q=75'
                          />
                        </a>
                        <div className='blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey'>
                          <span className='month block text-sm uppercase leading-none'>
                            May
                          </span>
                          <span className='date block text-2xl leading-none'>
                            01
                          </span>
                          <span className='year block text-sm leading-none'>
                            2022
                          </span>
                        </div>
                      </div>
                      <h5 className='mb-0'>
                        <a
                          className=' block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary'
                          title='Testing in javascript'
                          href='/demo2/postdetails/testing-in-javascript'
                        >
                          Testing in javascript
                        </a>
                      </h5>
                      <div className='flex list-none gap-1.5 text-sm'>
                        <span className="after:content-[','] last:after:hidden">
                          <a
                            className=' hover:text-primary'
                            href='/demo2/category/javascript/1'
                          >
                            Javascript
                          </a>
                        </span>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <button className='swiper-button-prev'></button>
            <button className='swiper-button-next'></button>
          </div>
        </div>
      </div>
    </>
  );
};
