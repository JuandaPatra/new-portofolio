import {useState} from 'react'
import axios from "axios";
function Contact() {
  const [state, setState] = useState({
    email: "",
    name : "",
    message : "",
    show: "",
  });

  const namehandleChange = (e) => {
    setState({
      ...state, 
      name: e.target.value,
      
     });
  };
  const emailhandleChange = (e) => {
    setState({ ...state, email: e.target.value, });
  };
  const messagehandleChange = (e) => {
    setState({ ...state,message: e.target.value });
  };

  const submit = () => {
    setState({ show: state.value });
  };
  function emailButton() {
    let name = state.name;
    let email = state.email;
    let message = state.message;
    const API = `https://api.portofolio.juandap.com/api/send`

    axios
      .post(API, {
        name,
        email,
        message,
      })
      .then((res) => {
        console.log(res);
        setState({
          name : '',
          email : '',
          message : ''
        })
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <h3 className="text-white text-center text-4xl mb-5 lg:mb-10">
        Love to hear from you,
        <br />
        Get in touch
      </h3>

      <div className=" container mx-auto px-3 lg:px-0">
        <div className="w-full lg:w-1/2 mx-auto ">
          <div className="flex flex-wrap">
            <div className="basis-full lg:basis-1/2">
              <div class="group relative w-100 md:w-80 lg:w-[95%] ">
                <label
                  for="1"
                  class="block w-full pb-1 text-sm font-medium text-teal-300 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                >
                  Your Name
                </label>
                <input
                  id="1"
                  type="text"
                  value={state.name} onChange={(e)=>namehandleChange(e)}
                  class="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="basis-full lg:basis-1/2">
              <div class="group relative w-100 md:w-80 lg:w-[96%] ">
                <label
                  for="1"
                  class="block w-full pb-1 text-sm font-medium text-teal-300 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                >
                  Email
                </label>
                <input
                  id="1"
                  type="email"
                  value={state.email} onChange={(e)=>emailhandleChange(e)}
                  class="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div className=" basis-full mt-[10px] group">
              <label
                for="1"
                class="block w-full pb-1 text-sm font-medium text-teal-300 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
              >
                Message
              </label>
              <textarea
                name=""
                id="1"
                cols="30"
                rows="10"
                value={state.message} onChange={(e)=>messagehandleChange(e)}
                className="w-full lg:w-[98%] rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <div className="basis-full mt-[10px] group">
              <div className="">
                <button
                  onClick={emailButton}
                  className="text-white flex mx-auto bg-teal-400 dark:text-black dark:bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className=" basis-full mt-[20px]">
              <p class=" text-center">
                <span className="text-white text-center text-sm">OR</span>
              </p>
              <p class=" text-center mt-[15px]">
                <span className="text-white text-center text-sm">
                  email to : <a href="">patrajuanda10@gmail.com</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
