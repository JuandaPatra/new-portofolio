function Project() {
  return (
    <>
      <h3 className="text-white text-center text-lg mb-5 lg:mb-10">
        Projects that I've worked on
      </h3>

      <div className=" px-3 lg:px-0 ">
        <div className="flex flex-row flex-wrap">
          <div className="basis-full md:basis-1/2 lg:basis-1/3 mb-10 ">
            <div class="group max-w-sm w-full lg:w-96 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div class="flex items-center px-6 py-3  bg-teal-300 dark:bg-white">
                <svg
                  class="w-6 h-6 fill-current text-white dark:text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 11H10V13H14V11Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                  ></path>
                </svg>
                <div class="mx-3 text-lg font-semibold text-white dark:text-gray-800">
                  Travelbliss
                </div>
              </div>
              <div class="px-6 py-4 h-[450px]">
                <h1 class="text-lg text-gray-800 dark:text-white flex">
                  Travel Agency E-Commerce
                </h1>
                <h3 class="mt-4 mb-2 dark:text-gray-100 text-xl">
                  Contributions
                </h3>
                <div class="grid">
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Develop Fullstack app
                  </div>
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Develop whole Content Management System, includes implements
                    cron job system
                  </div>
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Integrate with 3rd package Google Login, Google Recaptcha,
                    Laravel Pusher
                  </div>
                </div>
                <h3 class="mt-4 mb-2 dark:text-gray-100 text-xl">
                  {" "}
                  Technologies
                </h3>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Laravel
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Tailwind
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
                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <a class="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg
                      class="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z"></path>
                      <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z"></path>
                      <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z"></path>
                    </svg>
                  </a>
                  <div class="ml-2 text-sm hover:cursor-pointer">
                    Not available (Internal)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" basis-full md:basis-1/2 lg:basis-1/3 mb-10">
            <div class="prose max-w-sm w-full lg:w-96 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div class="flex items-center px-6 py-3  bg-teal-300 dark:bg-white">
                <svg
                  class="w-6 h-6 fill-current text-white dark:text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 11H10V13H14V11Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                  ></path>
                </svg>
                <div class="mx-3 text-lg font-semibold text-white dark:text-gray-800">
                  Bina Niaga Multiusaha
                </div>
              </div>
              <div class="px-6 py-4 h-[450px]">
                <h1 class="text-lg text-gray-800 dark:text-white flex">
                  Company Website
                </h1>
                <h3 class="mt-4 mb-2 dark:text-gray-100 text-xl">
                  Contributions
                </h3>
                <div class="grid">
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Develop and integrate frontend from backend controllers.
                  </div>
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Deploy website in production
                  </div>
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Add email sender , export data features in content
                    management System
                  </div>
                </div>
                <h3 class="mt-4 mb-2 dark:text-gray-100 text-xl">
                  {" "}
                  Technologies
                </h3>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
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
                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <a class="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg
                      class="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z"></path>
                      <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z"></path>
                      <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z"></path>
                    </svg>
                  </a>
                  <div class="ml-2 text-sm hover:cursor-pointer">
                    Not available (Internal)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" basis-full md:basis-1/2 lg:basis-1/3 mb-10">
            <div class="prose max-w-sm w-full lg:w-96 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div class="flex items-center px-6 py-3  bg-teal-300 dark:bg-white">
                <svg
                  class="w-6 h-6 fill-current text-white dark:text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 11H10V13H14V11Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                  ></path>
                </svg>
                <div class="mx-3 text-lg font-semibold text-white dark:text-gray-800">
                  Starfleet
                </div>
              </div>
              <div class="px-6 py-4 h-[450px]">
                <h1 class="text-lg text-gray-800 dark:text-white flex">
                  Driverless vehicle fleet monitoring tool
                </h1>
                <h3 class="mt-4 mb-2 dark:text-gray-100 text-xl">
                  {" "}
                  Contributions
                </h3>
                <div class="grid">
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Designing and building new components
                  </div>
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Writing unit tests using Jest
                  </div>
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Using Redux to manage state
                  </div>
                </div>
                <h3 class="mt-4 mb-2 dark:text-gray-100 text-xl">
                  {" "}
                  Technologies
                </h3>
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
                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <a class="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg
                      class="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z"></path>
                      <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z"></path>
                      <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z"></path>
                    </svg>
                  </a>
                  <div class="ml-2 text-sm hover:cursor-pointer">
                    Not available (Internal)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" basis-full md:basis-1/2 lg:basis-1/3 mb-10">
            <div class="prose max-w-sm w-full lg:w-96 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div class="flex items-center px-6 py-3  bg-teal-300 dark:bg-white">
                <svg
                  class="w-6 h-6 fill-current text-white dark:text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 11H10V13H14V11Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                  ></path>
                </svg>
                <div class="mx-3 text-lg font-semibold text-white dark:text-gray-800">
                  Bintarojayahighrise
                </div>
              </div>
              <div class="px-6 py-4 h-[450px]">
                <h1 class="text-lg text-gray-800 dark:text-white flex">
                  Marketing website
                </h1>
                <h3 class="mt-4 mb-2 dark:text-gray-100 text-xl">
                  {" "}
                  Contributions
                </h3>
                <div class="grid">
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Maintaining anchestor code
                  </div>
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Add styling css based on new design
                  </div>
                  <div class="dark:text-gray-400">
                    <span class="text-gray-500 dark:text-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Create and develop new pages 
                  </div>
                </div>
                <h3 class="mt-4 mb-2 dark:text-gray-100 text-xl">
                  {" "}
                  Technologies
                </h3>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      JQuery
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
                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <a class="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg
                      class="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z"></path>
                      <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z"></path>
                      <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z"></path>
                    </svg>
                  </a>
                  <div class="ml-2 text-sm hover:cursor-pointer">
                    Not available (Internal)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
