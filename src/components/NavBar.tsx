import pic from "../assets/peepo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 w-full">
        <div className="w-20 h-20 rounded-2xl overflow-hidden mt-1">
          <img src={pic} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <ColorModeSwitch />
      </div>

      {/*this is all my tab stuff here*/}
      <div
        role="tablist"
        className="tabs tabs-boxed w-full max-w-screen mx-auto"
      >
        <a role="tab" className="tab flex-1 text-center">
          Tab 1
        </a>
        <a role="tab" className="tab flex-1 text-center">
          Tab 2
        </a>
      </div>
    </>
  );
};

export default NavBar;
