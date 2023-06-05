import logo from "../../assets/images/profile2.jpg";
import {Helmet} from "react-helmet"
function About() {
  return (
    <div className="container flex flex-row">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me</title>
        <link rel="canonical" href="http://juandap.com/about" />
      </Helmet>

      <div className="basis-1/3">
        <div className="container">
          <div className=" flex justify-center text-white">
            <div className=" py-5">
              <img
                src={logo}
                alt=""
                className="rounded-full h-[200px] w-[200px] object-cover"
              />
            </div>
          </div>
          <h1 className="text-center text-4xl text-white">
            Rahmad Juanda Patra
          </h1>
          <h3 className="text-center text-sn text-white mt-3">
            Web Programmer at
            <span>
              <a href="owlfoxes.id" className="text-white"></a> Owl&Foxes
            </span>
          </h3>
          <p className="text-center text-white mt-3">
            I build robust, accesible products and digital Experiences for the
            Web
          </p>
        </div>
      </div>
      <div className=" basis-2/3 px-10 pb-10">
        <div className="container text-white  mt-10  text-justify cursor-auto">
          <p className="text-sn mb-4">
            I'm Rahmad Juanda Patra, a developer from Jakarta, Indonesia. My
            expertise on Laravel, react , and Nodejs. I also writes technical
            articles in medium.I'm currently working as web programmer at
            advertising agency in South Jakarta Owl&Foxes where i help develop
            and create many websites for our clients using Laravel Framework.
          </p>
          <p className="text-sn mb-4">
            My degree's Bachelor in Mechanical Engineering at Universitas
            Muhammadiyah Malang. after finished my study i'm interested in
            digital product like website, app, and social media, so I take Web
            Development Bootcamp className in Purwadhika Digital School and now work
            as Fullstack Programmer.
          </p>
          <p className="text-sn mb-4">
            When i'm not at the computer, I'm usually playing football, Enjoying
            Japan Pop culture(Anime, Dorama, Manga, Tokusatsu) and hanging out
            or just enjoy my small rented apartement life.
          </p>
        </div>
        <div className="mt-24">
          <ol>
            <li className="text-white mb-5">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="2021 to Present"
                >
                  2021 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://www.owlandfoxes.co.id/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label=""
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Web Programmer 
                          <span className="inline-block ml-2">
                            Owl&Foxes
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                    
                    <div>
                      <div className="text-slate-500" aria-hidden="true">
                        fullstack programmer
                      </div>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Deliver high-quality, robust production code for a diverse
                    array of projects for clients including Bintarojaya, Sariroti, BNM, Travelbliss , and more.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Laravel
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        SCSS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Javascript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        PHP
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Linux
                      </div>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </li>
            <li className="text-white mb-5">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="2021 to Present"
                >
                  2020
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://purwadhika.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label=""
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Fullstack Bootcamp student 
                          <span className="inline-block ml-2">
                            Purwadhika Digital School
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                    
                    <div>
                      <div className="text-slate-500" aria-hidden="true">
                        student
                      </div>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Fullstack Javascript intensive Bootcamp class. learn fundamental programming using Javascript Language and Library (React js and express) 
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Laravel
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        SCSS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Javascript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        PHP
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Linux
                      </div>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default About;
