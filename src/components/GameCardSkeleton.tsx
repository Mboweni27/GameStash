import React from "react";

const GameCardSkeleton = () => {
  return (
    <div className="card bg-base-200 shadow-md rounded-box overflow-hidden border border-base-700 animate-pulse">
      <figure>
        <div className="block w-200 h-48 bg-base-300 rounded-t-md"></div>
      </figure>

      <div className="card-body space-y-3">
        <div className="h-6 bg-base-300 rounded w-3/4"></div>
        <div className="flex space-x-2">
          <div className="h-6 w-6 rounded-full bg-base-300"></div>
          <div className="h-6 w-6 rounded-full bg-base-300"></div>
          <div className="h-6 w-6 rounded-full bg-base-300"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
