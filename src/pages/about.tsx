import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const About = () => (
  <Main>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <div className="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-white">About</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute top-0 left-0 z-[-1]">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute top-0 right-0 z-[-1]">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
    </div>
    <section className="bg-[#f3f4fe] py-20 lg:py-[120px]">
      <div className="container">
        <div className="bg-white">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="items-center justify-between overflow-hidden border lg:flex">
                <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                    Starter Page
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias autem consectetur consequatur doloremque doloribus
                    eius eligendi ipsum iusto, maxime molestias mollitia,
                    provident quaerat quidem repellat repudiandae similique,
                    ullam voluptas voluptatibus.
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusamus autem deserunt eligendi fugiat iste, neque
                    nesciunt quam, sit temporibus velit vero. Ab dolor error est
                    facere, recusandae ut velit.
                  </p>
                </div>
                <div className="text-center">
                  <div className="relative z-10 inline-block">
                    <img
                      src="https://picsum.photos/490/630/?blur"
                      alt="image"
                      className="mx-auto lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Main>
);

export default About;
