import { useRef } from "react";
import usePlatforms from "../hooks/usePlatforms";
import type { Platform } from "../hooks/useGames";

interface Props {
  onSelectedPlatform: (Platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  if (error) return null;

  return (
    <>
      <div className="w-40">
        <h3 className="mb-2 font-semibold text-lg px-2">Filter By:</h3>
        <details ref={detailsRef} className="dropdown w-full px-2">
          {" "}
          <summary className="btn btn-primary w-full h-12">
            {selectedPlatform?.name || "Platform"}
          </summary>
          <ul className="menu dropdown-content bg-primary text-primary-content rounded-box z-10 w-full p-2 shadow-sm">
            {data.map((platform) => (
              <li
                key={platform.id}
                onClick={() => {
                  const fixedPlatform =
                    platform.id === 2
                      ? { id: 187, name: "PlayStation 5", slug: "playstation5" } // override to PS5
                      : platform;

                  onSelectedPlatform(fixedPlatform);
                  detailsRef.current?.removeAttribute("open");
                }}
              >
                <a className="hover:bg-blue-700 w-full h-12">{platform.name}</a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </>
  );
};
export default PlatformSelector;
