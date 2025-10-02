import RocketIcon from "../../assets/images/rocket_24.svg";
function Modal({ openPopUp, closePopUp }) {
  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
        console.log('tes')
      closePopUp();
    }
  };

  if (openPopUp !== true) return null

  return (
    <>
      <div
        id="ModelContainer"
        className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
      >
       

        <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
          <div className="w-full py-3 pb-3 pt-1 justify-center items-center">
            <div className="pb-3 flex justify-end mr-3">
              <span className=" cursor-pointer" onClick={closePopUp}>X</span>
            </div>
            <div className="flex justify-center">
              <img src={RocketIcon} alt="" className="w-[50px] h-[50px]" />
            </div>
            <h2 className="font-semibold py-3 text-center text-xl">
              Thankyou for submit message. Please wait our response ASAP !
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

