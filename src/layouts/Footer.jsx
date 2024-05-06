export const Footer = () => {
  return (
    <>
      <footer className='footer relative z-20 border-t border-white border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter'>
        <div className='container mx-auto'>
          <div className='footer-content flex flex-wrap items-center justify-between gap-y-5 gap-x-7 py-5 text-center md:flex-nowrap'>
            <div className='w-full md:w-auto'>
              <ul className='mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4'>
                <li className='inline-block align-middle'>
                  <a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded'
                  >
                    <span className='front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='inline-block h-[1em] w-[1em]'
                        // height='1em'
                        // width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z'></path>
                      </svg>
                    </span>
                    <span className='back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='inline-block  h-[1em] w-[1em]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z'></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li className='inline-block align-middle'>
                  <a
                    href='https://twitter.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded'
                  >
                    <span className='front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='inline-block h-[1em] w-[1em]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z'></path>
                      </svg>
                    </span>
                    <span className='back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='inline-block h-[1em] w-[1em]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z'></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li className='inline-block align-middle'>
                  <a
                    href='https://github.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded'
                  >
                    <span className='front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='inline-block h-[1em] w-[1em]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z'></path>
                      </svg>
                    </span>
                    <span className='back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='inline-block h-[1em] w-[1em]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z'></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li className='inline-block align-middle'>
                  <a
                    href='https://linkedin.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded'
                  >
                    <span className='front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='inline-block h-[1em] w-[1em]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z'></path>
                      </svg>
                    </span>
                    <span className='back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='inline-block h-[1em] w-[1em]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z'></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li className='inline-block align-middle'>
                  <a
                    href='https://dribbble.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded'
                  >
                    <span className='front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='inline-block h-[1em] w-[1em]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 2C6.47939 2 2 6.47939 2 12C2 17.5206 6.47939 22 12 22C17.5098 22 22 17.5206 22 12C22 6.47939 17.5098 2 12 2ZM18.6052 6.60954C19.7983 8.06291 20.5141 9.91756 20.5358 11.9241C20.2538 11.8699 17.4338 11.295 14.5922 11.6529C14.5271 11.5119 14.4729 11.3601 14.4078 11.2083C14.2343 10.7961 14.0391 10.3731 13.8438 9.97181C16.9891 8.692 18.4208 6.84816 18.6052 6.60954ZM12 3.47506C14.1692 3.47506 16.154 4.28851 17.6616 5.62256C17.5098 5.83948 16.2191 7.56399 13.1822 8.70281C11.7831 6.13232 10.2321 4.0282 9.9935 3.70282C10.6334 3.55097 11.3059 3.47506 12 3.47506ZM8.36662 4.27766C8.59437 4.58134 10.1128 6.69631 11.5336 9.21256C7.5423 10.2755 4.01736 10.2538 3.63774 10.2538C4.19089 7.60738 5.98047 5.40564 8.36662 4.27766ZM3.45336 12.0109C3.45336 11.9241 3.45336 11.8373 3.45336 11.7506C3.82212 11.7614 7.96529 11.8156 12.2277 10.5358C12.4773 11.013 12.705 11.5011 12.9219 11.9891C12.8134 12.0217 12.6941 12.0542 12.5857 12.0868C8.18221 13.5076 5.83948 17.3904 5.64425 17.7158C4.2885 16.2083 3.45336 14.2017 3.45336 12.0109ZM12 20.5466C10.026 20.5466 8.20391 19.8742 6.76139 18.7462C6.91323 18.4317 8.64856 15.0911 13.4642 13.41C13.4859 13.3991 13.4967 13.3991 13.5184 13.3883C14.7223 16.5011 15.2104 19.1149 15.3406 19.8633C14.3102 20.308 13.1822 20.5466 12 20.5466ZM16.7614 19.0824C16.6746 18.5618 16.2191 16.0672 15.1019 12.9978C17.7809 12.5748 20.1236 13.269 20.4165 13.3666C20.0478 15.7419 18.6811 17.7917 16.7614 19.0824Z'></path>
                      </svg>
                    </span>
                    <span className='back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='inline-block h-[1em] w-[1em]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 2C6.47939 2 2 6.47939 2 12C2 17.5206 6.47939 22 12 22C17.5098 22 22 17.5206 22 12C22 6.47939 17.5098 2 12 2ZM18.6052 6.60954C19.7983 8.06291 20.5141 9.91756 20.5358 11.9241C20.2538 11.8699 17.4338 11.295 14.5922 11.6529C14.5271 11.5119 14.4729 11.3601 14.4078 11.2083C14.2343 10.7961 14.0391 10.3731 13.8438 9.97181C16.9891 8.692 18.4208 6.84816 18.6052 6.60954ZM12 3.47506C14.1692 3.47506 16.154 4.28851 17.6616 5.62256C17.5098 5.83948 16.2191 7.56399 13.1822 8.70281C11.7831 6.13232 10.2321 4.0282 9.9935 3.70282C10.6334 3.55097 11.3059 3.47506 12 3.47506ZM8.36662 4.27766C8.59437 4.58134 10.1128 6.69631 11.5336 9.21256C7.5423 10.2755 4.01736 10.2538 3.63774 10.2538C4.19089 7.60738 5.98047 5.40564 8.36662 4.27766ZM3.45336 12.0109C3.45336 11.9241 3.45336 11.8373 3.45336 11.7506C3.82212 11.7614 7.96529 11.8156 12.2277 10.5358C12.4773 11.013 12.705 11.5011 12.9219 11.9891C12.8134 12.0217 12.6941 12.0542 12.5857 12.0868C8.18221 13.5076 5.83948 17.3904 5.64425 17.7158C4.2885 16.2083 3.45336 14.2017 3.45336 12.0109ZM12 20.5466C10.026 20.5466 8.20391 19.8742 6.76139 18.7462C6.91323 18.4317 8.64856 15.0911 13.4642 13.41C13.4859 13.3991 13.4967 13.3991 13.5184 13.3883C14.7223 16.5011 15.2104 19.1149 15.3406 19.8633C14.3102 20.308 13.1822 20.5466 12 20.5466ZM16.7614 19.0824C16.6746 18.5618 16.2191 16.0672 15.1019 12.9978C17.7809 12.5748 20.1236 13.269 20.4165 13.3666C20.0478 15.7419 18.6811 17.7917 16.7614 19.0824Z'></path>
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <p className='mb-0 w-full md:w-auto'>
              © 2024, All right reserved
              <a
                className='pl-1.5 font-medium text-heading no-underline hover:text-primary'
                href='/'
              >
                Awal Solution
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
