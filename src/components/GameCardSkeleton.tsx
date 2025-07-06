import React from "react";

const GameCardSkeleton = () => {
  //might need to change the height in the future h-69
  return (
    <div>
      <figure>
        <div className="block w-200 h-69 bg-base-300 rounded-t-md"></div>
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
