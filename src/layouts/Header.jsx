import { Menu } from 'lucide-react';

export const Header = () => {
  return (
    <>
      <header className='header top-0 left-0 z-50 h-auto w-full fixed animate-slidedown border-b border-white border-opacity-20 bg-opacity-80 backdrop-blur backdrop-filter"'>
        <div className='container mx-auto'>
          <div className='header-inner flex items-center justify-between'>
            <a className='sitelogo py-2' href='/demo2'>
              <span className=' h-8 max-h-full w-auto self-center md:hover:text-white transition-all duration-200 text-green-300 text-3xl font-semibold'>
                Portfolio
              </span>
            </a>
            <div className='header-mobilenav block lg:hidden'>
              <button className='btn btn-small btn-transparent px-3 text-3xl'>
                <Menu
                  className='h-[1em] w-[1em]'
                  fill='currentColor'
                  stroke='currentColor'
                />
              </button>
            </div>

            <div className='header-nav hidden lg:block'>
              <nav className='flex-grow px-5 text-center'>
                <ul className='mb-0 inline-flex list-none gap-7 pl-0'>
                  <li className='inline-block align-middle'>
                    <a
                      href='#home'
                      className='group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary'
                    >
                      Home
                      <span className='absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100'></span>
                    </a>
                  </li>
                  <li className='inline-block align-middle'>
                    <a
                      href='#about'
                      className='group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary'
                    >
                      About
                      <span className='absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100'></span>
                    </a>
                  </li>
                  <li className='inline-block align-middle'>
                    <a
                      href='#resume'
                      className='group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary'
                    >
                      Resume
                      <span className='absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100'></span>
                    </a>
                  </li>
                  <li className='inline-block align-middle'>
                    <a
                      href='#works'
                      className='group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary'
                    >
                      Works
                      <span className='absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100'></span>
                    </a>
                  </li>
                  <li className='inline-block align-middle'>
                    <a
                      className='group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary'
                      href='#clients'
                    >
                      Clients
                      <span className='absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100'></span>
                    </a>
                  </li>
                  <li className='inline-block align-middle'>
                    <a
                      href='#contact'
                      className='group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary'
                    >
                      Contact
                      <span className='absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100'></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='header-button hidden lg:block'>
              <a className='btn'>
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
