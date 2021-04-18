import React from "react";
import Loader from "react-loader-spinner";

export const LoaderLarge = () => {
  return (
    <div className="spinner">
      <div style={{}}>
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        <p>please wait we are processing...</p>
      </div>
    </div>
  );
};

export const LoaderSmall = () => {
  return (
    <div className="spinner">
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
  );
};
