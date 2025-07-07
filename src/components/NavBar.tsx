import pic from "../assets/peepo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

// NavBar.tsx
const NavBar = () => {
  return (
    <div className="flex items-center w-full px-4 py-2 gap-4">
      {/* Avatar fixed width */}
      <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden mt-1">
        <img src={pic} alt="Avatar" className="w-full h-full object-cover" />
      </div>

      {/* Search bar fills the remaining space */}
      <div className="flex-grow min-w-0">
        <SearchInput />
      </div>

      {/* Theme button fixed width */}
      <div className="flex-shrink-0 w-20 mr-4">
        <ColorModeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
