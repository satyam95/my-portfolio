import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#2222220d]" id="footercontact">
      <div className="container mx-auto">
        <div className="pt-16 pb-20 md:py-20 px-4 md:px-8">
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-2xl leading-[29px]">
              Thanks for looking around.
              <br />
              Stay in touch.
            </h3>
            <div className="flex flex-col gap-2.5">
              <Link href="https://x.com/satyamsagar30">
                <div className="flex items-center gap-8 cursor-pointer">
                  <div className="w-20">
                    <h4 className="text-[#8f8f8f] font-semibold text-base leading-[19px]">
                      x(twitter)
                    </h4>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base leading-[19px] flex items-center gap-2">
                      satyamsagar30
                      <ChevronRight
                        size={20}
                        strokeWidth={3}
                        className="font-semibold"
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="mailto:satyamsagar30@gmail.com">
                <div className="flex items-center gap-8 cursor-pointer">
                  <div className="w-20">
                    <h4 className="text-[#8f8f8f] font-semibold leading-[19px] text-base">
                      Email
                    </h4>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base leading-[19px] flex items-center gap-2">
                      satyamsagar30@gmail.com
                      <ChevronRight
                        size={20}
                        strokeWidth={3}
                        className="font-semibold"
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/satyamsagar95/">
                <div className="flex items-center gap-8 cursor-pointer">
                  <div className="w-20">
                    <h4 className="text-[#8f8f8f] font-semibold text-base leading-[19px]">
                      LinkedIn
                    </h4>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base leading-[19px] flex items-center gap-2">
                      satyamsagar95
                      <ChevronRight
                        size={20}
                        strokeWidth={3}
                        className="font-semibold"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
