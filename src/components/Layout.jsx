import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-biruAltera -z-40">
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
