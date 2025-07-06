import React from "react";
import usePlatforms from "../hooks/usePlatforms";

export const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <>
      <details className="dropdown">
        <summary className="btn btn-primary m-1 w-40 h-12">
          Filter By Platform
        </summary>
        <ul className="menu dropdown-content bg-primary text-primary-content rounded-box z-10 w-52 p-2 shadow-sm">
          {data.map((platform) => (
            <li key={platform.id}>
              <a className="hover:bg-blue-700 w-40 h-12">{platform.name}</a>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
};
