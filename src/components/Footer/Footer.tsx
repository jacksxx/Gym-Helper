import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="fixed w-full flex flex-col z-0 bottom-0 font-semibold text-center gap-3 bg-slate-100 rounded-sm">        
        <p>Gym Helper App ©{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
