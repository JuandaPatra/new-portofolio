// import "./App.css";
import "../../App.css";

function Header() {
//   let toggleBtn = document.querySelector("#navbar-toggle");
//   let collapse = document.querySelector("#navbar-collapse");

//   toggleBtn.onclick = () => {
//     collapse.classNameList.toggle("hidden");
//     collapse.classNameList.toggle("flex");
//   };

  return (
    <>
    {/* <header></header> */}
      <div className="header-2">
        <nav className="bg-white py-2 px-5 w-full md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <a href="/" className="font-bold text-xl text-indigo-600">
                JP
              </a>
              <span className=" ml-4">Rahmad Juanda Patra</span>
              <button
                className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div
              className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <a
                href="/"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded "
              >
                Home
              </a>
              <a
                href="/about"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                About Me
              </a>
             
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Blog
              </a>
              <a
                href="/project"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Contact
              </a>
             
            </div>
          </div>
        </nav>

      </div>
    </>
  );
}

export default Header;
