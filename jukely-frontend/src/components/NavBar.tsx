import Jukely from "./Jukely";
import JukelyLogo from "./JukelyLogo";

function NavBar() {
  return (
    <>
      <div className="">
        <div className=" text-white bg-[#061120] px-4 max-w-fit h-screen">
          <div className="flex self-center pb-3 pt-6 px-3 border-b-2 border-[#000000] font-black font-display text-3xl ">
            <JukelyLogo className="flex justify-start fill-lightblue mr-2 w-7" />
            <div className="pt-1">
              <Jukely className="fill-lightblue" />
            </div>
          </div>
          <h2 className="flex  p-4 px-7 border-b-2 border-[#000000] hover:underline underline-offset-4">
            <img
              src="../src/assets/home-icon.svg"
              alt="Home Icon"
              className="pr-2"
            ></img>
            Home
          </h2>
          <h2 className="flex  p-4 px-7 border-b-2 border-[#000000] hover:underline underline-offset-4">
            <img
              src="../src/assets/library-icon.svg"
              alt="Library Icon"
              className="pr-2"
            ></img>
            Library
          </h2>
          <h2 className="flex  p-4 px-7 border-b-2 border-[#000000] hover:underline underline-offset-4">
            <img
              src="../src/assets/radio-icon.svg"
              alt="Radio Icon"
              className="pr-2"
            ></img>
            Radio
          </h2>
        </div>
      </div>
    </>
  );
}

export default NavBar;
