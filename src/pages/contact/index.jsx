import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/modal";
import {
  ValidationEmail,
  validationName,
  validationComment,
} from "../../Utils/validation";
function Contact() {
  const [state, setState] = useState({
    email: "",
    name: "",
    message: "",
    show: "",
    errorEmailMessage: false,
    errorNameMessage: false,
    errorName: true,
    errorEmail: true,
    errorMessage: true,
    isButtonEnable: false,
  });

  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);

  useEffect(() => {
    document.title = "Contact Page";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorName = state.errorName;
    let errorMessage = state.errorMessage;
    let errorEmail = state.errorEmailMessage;

    if (name === "name") {
      errorName = !validationName(value);
    }else if(name === 'message'){
      errorMessage = !validationComment(value);
    }else if(name === 'email'){
      errorMessage = !ValidationEmail(value);

    }


    let isButtonEnable = ValidationEmail(state.email) && !errorName && !errorMessage ;     

    setState({
      ...state,
      [name]: value,
      errorEmailMessage : errorMessage,
      errorName, // semua boolean
      errorEmail,
      errorMessage,
      isButtonEnable : isButtonEnable,
    });

  };

  // function emailButton() {
  //   let name = state.name;
  //   let email = state.email;
  //   let message = state.message;
  //   const API = `https://api.portofolio.juandap.com/api/send`;

  //   axios
  //     .post(API, {
  //       name,
  //       email,
  //       message,
  //     })
  //     .then((res) => {
  //       // console.log(res);
  //       setOpenPopup(true);
  //       setState({
  //         name: "",
  //         email: "",
  //         message: "",
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  async function emailButton() {
    const { name, email, message } = state;
    const API ='';
    try {
      await axios.post(API, {name,email,message})
      setOpenPopup(true);
    setState((prev) => ({
      ...prev,
      name: "",
      email: "",
      message: "",
      errorName: true,
      errorEmail: true,
      errorMessage: true,
      isButtonEnable: false,
    }));
    } catch (error) {
      console.error("Failed to send message:", error);
    }
    
  }
  return (
    <>
      <h3 className="text-white text-center text-4xl mb-5 lg:mb-10">
        Love to hear from you,
        <br />
        Get in touch
      </h3>
      <div></div>
      <div class="flex  h-[550px] px-4 pb-2 pt-0 bg-transparent lg:justify-center">
        <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md w-full md:w-auto">
          <div class="p-3 lg:p-5  bg-white  md:flex-1">
            <div className="flex flex-wrap justify-center">
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
                    placeholder="input your name"
                    value={state.name}
                    name="name"
                    onChange={handleChange}
                    class="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none border-2 border-teal-300 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-none"
                  />
                </div>
              </div>
              <div className="basis-full lg:basis-1/2">
                <div class="group relative w-100 md:w-80 lg:w-[96%] ">
                  <label
                    for="2"
                    class="block w-full pb-1 text-sm font-medium text-teal-300 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  >
                    Email
                  </label>
                  <input
                    id="2"
                    type="email"
                    name="email"
                    placeholder="input your email"
                    value={state.email}
                    onChange={handleChange}
                    class="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none border-2 border-teal-300 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-none"
                  />
                </div>
                {state.errorEmailMessage && (
                  <span className="text-red-600 email-text">email salah</span>
                )}
              </div>
              <div className=" basis-full mt-[10px] group">
                <label
                  for="1"
                  class="block w-full pb-1 text-sm font-medium text-teal-300 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="1"
                  cols="30"
                  rows="10"
                  placeholder="write your messages"
                  value={state.message}
                  onChange={handleChange}
                  className="w-full lg:w-[98%] rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm border-2 border-teal-300 transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-none"
                ></textarea>
              </div>
              <div className="basis-full mt-[10px] group">
                <div className="">
                  <button
                    onClick={emailButton}
                    className="text-white flex mx-auto bg-teal-400 dark:text-black dark:bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg disabled:bg-gray-400 "
                    disabled={!state.isButtonEnable}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className=" basis-full mt-[20px]">
                <p class=" text-center">
                  <span className="text-teal-700 text-center text-lg">OR</span>
                </p>
                <p class=" text-center mt-[15px]">
                  <span className="text-teal-700 text-center text-sm">
                    email to : <a href="">patrajuanda10@gmail.com</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
    </>
  );
}

export default Contact;
