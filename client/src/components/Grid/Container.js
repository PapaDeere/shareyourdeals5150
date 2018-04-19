import React from "react";

export const Container = ({ children }) => ( 
// export const Container = ({ fluid, children }) => (
  // <div className={`container${fluid ? "-fluid" : ""}`}>
  <div className={'container'}>
    {children}
  </div>
);
