import Link from 'next/link';
import { useRouter } from 'next/router';

import { Logo } from '@/components/Logo';
import { AppConfig } from '@/utils/AppConfig';

const Header = () => {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Logo
              image={`${router.basePath}/assets/images/logo.svg`}
              alt={AppConfig.title}
              link="/"
            />
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6">
                <ul className="block lg:flex">
                  <li className="group relative">
                    <Link href="/">
                      <a className="mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="group relative">
                    <Link href="/about">
                      <a className="mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12">
                        About
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
