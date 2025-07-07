import pic from "../assets/peepo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <div className="flex items-center w-full px-4 py-2 gap-4">
      <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden mt-1">
        <img src={pic} alt="Avatar" className="w-full h-full object-cover" />
      </div>

      <div className="flex-grow min-w-0">
        <SearchInput onSearch={onSearch} />
      </div>

      <div className="flex-shrink-0 w-20 mr-4">
        <ColorModeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
