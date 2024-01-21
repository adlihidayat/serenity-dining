import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <div>
      <div className="flex space-x-2 items-center mb-2">
        <a
          href="https://www.gmail.com"
          aria-label="go to serenity official gmail"
        >
          <Image
            src={"/socialMedia/gmail.svg"}
            alt=""
            width={100}
            height={100}
            className="w-8 h-8 "
          />
        </a>
        <a
          href="https://www.whatsapp.com"
          aria-label="go to serenity official whatsapp"
        >
          <Image
            src={"/socialMedia/whatsapp.svg"}
            alt=""
            width={100}
            height={100}
            className="w-7 h-7 "
          />
        </a>
        <a
          href="https://www.instagram.com"
          aria-label="go to serenity official instagram"
        >
          <Image
            src={"/socialMedia/instagram.svg"}
            alt=""
            width={100}
            height={100}
            className="w-7 h-7 "
          />
        </a>
        <a
          href="https://www.youtube.com"
          aria-label="go to serenity official youtube"
        >
          <Image
            src={"/socialMedia/youtube.svg"}
            alt=""
            width={100}
            height={100}
            className="w-8 h-8 "
          />
        </a>
      </div>
      <span className={`${poppins.className} text-sm  font-light`}>
        © 2023 · Serenity Dining Co. LLC
      </span>
    </div>
  );
};

export default Footer;
