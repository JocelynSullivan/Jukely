import JukelyLogo from "./JukelyLogo";

function NavBar() {
  return (
    <>
      <div>
        <div className="text-white bg-[#061121] px-4 max-w-fit h-screen">
          <h1 className="flex self-center pb-3 pt-6 px-7 border-b-2 border-[#261F22] font-semibold text-blue text-3xl ">
            <JukelyLogo className="flex justify-start fill-blue mt-0.5 mr-2 w-7" />
            JUKELY{" "}
          </h1>
          <h2 className="flex  p-4 px-7 border-b-2 border-[#261F22] hover:underline underline-offset-4">
            <img
              src="src/assets/home-icon.svg"
              alt="Home Icon"
              className="pr-2"
            ></img>
            Home
          </h2>
          <h2 className="flex  p-4 px-7 border-b-2 border-[#261F22] hover:underline underline-offset-4">
            <img
              src="src/assets/library-icon.svg"
              alt="Library Icon"
              className="pr-2"
            ></img>
            Library
          </h2>
          <h2 className="flex  p-4 px-7 border-b-2 border-[#261F22] hover:underline underline-offset-4">
            <img
              src="src/assets/radio-icon.svg"
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
