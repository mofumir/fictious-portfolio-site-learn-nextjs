import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark dark:text-light mxl:p-24 mlg:p-16 mmd:p-12 msm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
