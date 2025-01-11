import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-neutral text-neutral-content items-center p-5 rounded">
        <aside className="grid-flow-col items-center">
          <p className="text-lg font-medium">
            Copyright © {new Date().getFullYear()} - Admission Traveler BD
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
