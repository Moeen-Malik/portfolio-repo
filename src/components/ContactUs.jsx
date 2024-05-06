import { HeadingCompo } from './HeadingCompo';

export const ContectUs = () => {
  return (
    <>
      <div id='contact' className='contact-section pt-24 lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <HeadingCompo headingSmall='Contact Us' headingLarge='Contact' />

          <div className='grid grid-cols-9 gap-7'>
            <div className='col-span-9 lg:col-span-4 '>
              <div className='contact-information'>
                <h4>Contact Information</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  omnis, iusto harum possimus non praesentium qui facere.
                </p>
                <span className='inline-block h-1 w-20 rounded-full bg-primary bg-opacity-20'></span>
                <div className='contact-blocks mt-5 space-y-5'>
                  <div className='contact-block card flex p-4 md:p-5'>
                    <span className='icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='h-[1em] '
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z'></path>
                      </svg>
                    </span>
                    <div className='content'>
                      <h5 className='mb-2'>Contact on phone</h5>
                      <p className='mb-0 flex flex-col'>
                        <a className='no-underline' href='tel:+01234567891'>
                          +92 315 6314364
                        </a>
                        <a className='no-underline' href='tel:+01234567891'>
                          +92 315 6314364
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className='contact-block card flex p-4 md:p-5 overflow-auto break-words'>
                    <span className='icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='h-[1em] '
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z'></path>
                      </svg>
                    </span>
                    <div className='content'>
                      <h5 className='mb-2'>Contact on mail</h5>
                      <p className='mb-0 flex flex-col w-full break-words'>
                        <a
                          className='no-underline break-words '
                          href='mailto:moeenmalik1764@gmail.com'
                        >
                          moeenmalik1764@gmail.com
                        </a>
                        <a
                          className='no-underline'
                          href='mailto:moeenmalik1764@gmail.com'
                        >
                          moeenmalik1764@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className='contact-block card flex p-4 md:p-5'>
                    <span className='icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='h-[1em] '
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z'></path>
                      </svg>
                    </span>
                    <div className='content'>
                      <h5 className='mb-2'>Contact address</h5>
                      <p className='mb-0'>Lahore , Punjab , Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-9 lg:col-span-5 opacity-100 transform-none'>
              <form
                name='form'
                id='form'
                className='card -mt-1.5  space-y-4 p-4 md:p-5'
              >
                <div className='inputbox'>
                  <label htmlFor='name'>Name</label>
                  <input
                    placeholder='Enter your name...'
                    id='name'
                    type='text'
                    // name='name'
                  />
                </div>

                <div className='inputbox'>
                  <label htmlFor='email'>Email</label>
                  <input
                    placeholder='Enter your email...'
                    id='email'
                    type='email'
                    name='email'
                  />
                </div>

                <div className='inputbox'>
                  <label htmlFor='subject'>Subject</label>
                  <input
                    placeholder='Enter subject...'
                    id='subject'
                    type='text'
                    name='subject'
                  />
                </div>

                <div className='inputbox'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    placeholder='Enter you message...'
                    cols='1'
                    rows='5'
                    id='message'
                    name='message'
                  ></textarea>
                </div>
                <button type='submit' className='btn'>
                  <span>Send Mail</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <span className='block pb-24 lg:pb-28 xl:pb-32'></span>
    </>
  );
};
