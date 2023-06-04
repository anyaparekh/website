import React from "react";
import headshot from "./headshot.png";
import aspekta from "./fonts/Aspekta-550.woff2";
import poppins from "./fonts/Poppins-Light.woff2";
import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Aspekta",
  src: aspekta,
});

Font.register({
  family: "Poppins",
  src: poppins,
});

export default function App() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center self-center md:w-5/6 w-full h-full bg-[#ffe4e4]/[0.8]">
        <div className="mt-7 w-[44px] h-[29px] bg-[url('../public/logo.svg')]" />
        <div className="md:pt-5 w-full overflow-hidden">
          <div className="flex flex-row mt-3 md:h-[360px] h-[380px] bg-[#E9D5CE]/[0.41] z-10 rounded-2xl">
            <div className="flex-1 flex flex-col relative">
              <div className="md:ml-16 ml-8 mr-5 flex-2">
                <p className="md:mt-12 mt-8 font-Aspekta font-medium text-3xl text-[#473931]">
                  Hey, I'm Anya!
                </p>
                <p className="mb-5 mt-8 font-Poppins text-base text-[#473931]/[0.6]">
                  I am studying Computer Science at UIUC and love to make cool
                  things. I'm mainly interested in AI/ML and full-stack
                  development. <br />
                  <br />
                  Currently, I am an Application Developer intern at{" "}
                  <a
                    href="https://viget.com/"
                    className="text-[#473931] font-semibold"
                  >
                    Viget
                  </a>{" "}
                  and am writing software at{" "}
                  <a
                    href="https://uiuc.hack4impact.org/"
                    className="text-[#473931] font-semibold"
                  >
                    Hack4Impact
                  </a>
                  .
                </p>
              </div>
              <div className="md:ml-16 ml-8 mb-10 flex-1">
                <div className="w-[22px] h-[22px] absolute bottom-[41px] bg-[url('../public/mail.svg')]" />
                <a
                  href="mailto:aparekh6@illinois.edu"
                  className="font-sans absolute bottom-11 ml-8 text-sm text-[#977A71]"
                >
                  aparekh6@illinois.edu
                </a>
                <a
                  href="https://www.linkedin.com/in/anya-parekh/"
                  className="mt-10 w-[24px] h-[24px] absolute bottom-10 right-6 bg-[url('../public/linkedin.svg')]"
                />
                <a
                  href="https://github.com/anyaparekh/"
                  className="mt-10 w-[24px] h-[24px] absolute bottom-10 right-16 bg-[url('../public/github.svg')]"
                />
              </div>
            </div>
            <div className="hidden mt-10 md:flex-1 md:flex items-center justify-center">
              <img src={headshot} alt={"headshot"} width={380} />
            </div>
          </div>
        </div>
        <div className="mt-10 w-full h-[380px] bg-[#E9D5CE]/[0.41] z-10 rounded-2xl mb-10"></div>
      </div>
    </div>
  );
}
