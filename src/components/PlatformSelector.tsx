import React from "react";
import usePlatforms from "../hooks/usePlatforms";
import type { Platform } from "../hooks/useGames";

interface Props {
  onSelectedPlatform: (Platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <>
      <div className="w-40">
        <h3 className="mb-2 font-semibold text-lg px-2">Filter By Platform</h3>
        <details className="dropdown w-full px-2">
          <summary className="btn btn-primary w-full h-12">
            {selectedPlatform?.name || "Select a Platform"}
          </summary>
          <ul className="menu dropdown-content bg-primary text-primary-content rounded-box z-10 w-full p-2 shadow-sm">
            {data.map((platform) => (
              <li
                key={platform.id}
                onClick={() => onSelectedPlatform(platform)}
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
