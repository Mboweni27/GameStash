import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event?.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <label className="flex items-center w-full rounded-full border border-gray-300 px-3 py-1 min-w-0">
        <svg
          className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          ref={ref}
          type="search"
          placeholder="Search"
          className="flex-grow bg-transparent outline-none min-w-0"
        />
        <kbd className="kbd kbd-sm ml-2 flex-shrink-0 whitespace-nowrap">
          Mb
        </kbd>
      </label>
    </form>
  );
};

export default SearchInput;
