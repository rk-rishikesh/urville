import React from "react";
import { SyncLoader } from "react-spinners";

export const Loader = () => {
  const override = {
    position: "absolute",
    top: "50vh",
    left: "50vw",
  };
  return <SyncLoader cssOverride={override} color="black" />;
};
