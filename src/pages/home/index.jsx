import { useRef } from "react";
import logo from "../../assets/images/profile.jpg";
import TextTyping from "./texTyping";
import "../../App.css";
function Home() {
  const buttonRef = useRef();
  return (
    <div className="absolute flex flex-col gap-5 justify-center items-center w-full 2xl:w-4/5">
      <div className=" py-5">
        <img
          src={logo}
          alt=""
          className="rounded-full h-[200px] w-[200px] object-cover"
        />
      </div>

      <div className=" text-center text-white  font-bold tracking-wide ">
        <h1 className="mb-3 text-[30px] lg:text-[40px]">
          Hi I'm Rahmad Juanda Patra
        </h1>
        <TextTyping
          className="block my-4 text-[25px] lg:text-[30px]"
          texts={[
            "Fullstack Developer",
            "Frontend Developer",
            "Backend Developer",
          ]}
        />
        <h4 className="text-[18px] lg:text-[20px] mb-[30px]">
          Laravel | React | NodeJS
        </h4>

        <button class="bg-white text-black font-bold py-3 px-5 mt-3 rounded items-center w-3/4">
          <div className="px-2 inline">
            <span className=" mr-4">Know More </span>
            <span className=" inline-block">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="0.9em"
                width="0.9em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Home;
