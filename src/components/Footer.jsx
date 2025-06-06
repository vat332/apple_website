import React from "react";
import { footerLinks } from "../constants/index";
const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="">
          <p className="font-semibold text-gray-50 text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue-50">Find an Apple Store </span>
            or <span className="underline text-blue-50">
              other retailer
            </span>{" "}
            near you.
          </p>
          <p className="font-semibold text-gray-50 text-xs">
            Or call 345-345-345
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray-50 text-xs">
            Copright @ 2025 Apple inc. All rights reserved.
          </p>
          <div className="flex">
            {" "}
            {footerLinks.map((link, index) => (
              <p key={link} className="font-semibold text-gray-50 text-xs">
                {link}{" "}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
