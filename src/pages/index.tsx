import { useRouter } from 'next/router';

import { HeroDots } from '@/components/HeroDots';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const router = useRouter();

  return (
    <Main>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-8 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
                  Starter Project Template for your <b>NEXT</b> awesome
                  application
                </h1>
                <p className="mx-auto mb-10 max-w-[600px] text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
                  Putting DX first! Made with Next.js, Typescript, Tailwind CSS,
                  ESLint, Prettier and more ...
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center">
                  <li>
                    <a
                      href="https://github.com/erayaydin/next-starter-tailwind"
                      className="inline-flex items-center justify-center rounded-lg bg-white py-4 px-6 text-center text-base font-medium transition duration-300 ease-in-out hover:shadow-lg sm:px-10"
                    >
                      Download Now
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/erayaydin/next-starter-tailwind"
                      target="_blank"
                      className="flex items-center py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:opacity-70 sm:px-10"
                      rel="noreferrer"
                    >
                      Star on Github
                      <span className="pl-2">
                        <svg
                          width="20"
                          height="8"
                          viewBox="0 0 20 8"
                          className="fill-current"
                        >
                          <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="text-center">
                  <img
                    src={`${router.basePath}/assets/images/brand.svg`}
                    alt="image"
                    className="mx-auto w-full max-w-[250px] opacity-50 transition duration-300 ease-in-out hover:opacity-100"
                  />
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="relative z-10 mx-auto max-w-[845px]">
                <div className="mt-16">
                  <img
                    src="https://picsum.photos/1700/600"
                    alt="hero"
                    className="mx-auto max-w-full rounded-t-xl"
                  />
                </div>
                <div className="absolute bottom-0 -left-9 z-[-1]">
                  <HeroDots />
                </div>
                <div className="absolute -top-6 -right-6 z-[-1]">
                  <HeroDots />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
