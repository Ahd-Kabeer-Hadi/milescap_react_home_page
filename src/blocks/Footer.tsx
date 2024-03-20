import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import { Separator } from "../components/ui/separator";

export default function Footer() {
  return (
    <footer className="relative mt-16  pb-28 md:pb-12">
      <Separator className="mb-12" />
      <div className="max-w-7xl mx-auto flex px-4 items-start flex-col md:flex-row">
        <div className="w-full flex flex-col p-5">
          <img
            height={30}
            width={250}
            alt="logo"
            src="./public/LogoMain.svg"
          ></img>

          <p className="text-sm font-mono mt-5 text-[#A1A1AA] max-w-md">
            Premier Business Centre, 10th Floor, Sterling Tower, 14 Poudriere
            Street, Port-Louis, Mauritius Registration Number - 194281
          </p>
          <p className="text-sm font-mono mt-5 text-[#A1A1AA] ">
            <IconMail className="w-4 h-4" /> info@milescap.com
          </p>

          <p className="text-sm font-mono mt-5 text-[#A1A1AA] ">
            <IconPhoneCall className="w-4 h-4" /> 00971 4252 3475
          </p>
        </div>
        <div className="w-full flex ">
          <div className="w-full flex flex-col   p-5 gap-5">
            <div className="text-lg font-inter font-medium">Quick Links</div>
            <Separator className="mb-2 px-2" />
            <ul className="flex flex-col gap-5 ">
              <li>
                Home
                <a href="#"></a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Platforms</a>
              </li>
              <li>
                <a href="#">Accounts</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col p-5 gap-5">
            <div className="text-lg font-inter font-medium mr-5">Elsewhere</div>
            <Separator className="mb-2 px-2" />
            <ul className="flex flex-col gap-5 ">
              <li>
                <a href="#" rel="noreferrer noopener">
                  <div className="group flex items-center gap-2 text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white transition-colors duration-150">
                    Facebook
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="-translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" rel="noreferrer noopener">
                  <div className="group flex items-center gap-2 text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white transition-colors duration-150">
                    Twitter
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="-translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" rel="noreferrer noopener">
                  <div className="group flex items-center gap-2 text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white transition-colors duration-150">
                    LinkedIn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="-translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" rel="noreferrer noopener">
                  <div className="group flex items-center gap-2 text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white transition-colors duration-150">
                    Instagram
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="-translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="px-4 container max-w-7xl ">
        <Separator className="mb-12 mt-10" />
        <div className="w-full flex flex-col md:flex-row  gap-4 items-center justify-between">
          <a href="#" className="text-md font-semibold text-[#A1A1AA]  ">
            Risk Warning
          </a>
          <a href="#" className="text-md font-semibold text-[#A1A1AA] ">
            Privacy Policy
          </a>
          <a href="#" className="text-md font-semibold text-[#A1A1AA]  ">
            IT Disaster Policy
          </a>
          <a href="#" className="text-md font-semibold text-[#A1A1AA] ">
            AML Policy
          </a>
          <a href="#" className="text-md font-semibold text-[#A1A1AA]  ">
            Risk Management Policy
          </a>
          <a href="#" className="text-md font-semibold text-[#A1A1AA] ">
            Withdrawal Policy
          </a>
          <a href="#" className="text-md font-semibold text-[#A1A1AA]  ">
            Website Disclaimer
          </a>
        </div>
      </section>
      <section className="px-4 container max-w-7xl ">
        <div className="w-full flex flex-col mt-8  justify-between">
          <p className="text-sm font-mono text-[#A1A1AA]  ">
            Miles Capital Limited is regulated under The Financial Services
            Commission (FSC) of Mauritius. License number : GB22201008 and our
            company number is 194281.
          </p>
          <p className="text-sm font-mono text-[#A1A1AA]  ">
            <span className="font-bold"> Risk statement:</span> An investment in
            derivatives may mean investors may lose an amount even greater than
            their original investment. Anyone wishing to invest in any of the
            products mentioned in milescap.com should seek their own financial
            or professional advice. Trading of securities, forex, stock market,
            commodities, options and futures may not be suitable for everyone
            and involves the risk of losing part or all of your money. Trading
            in the financial markets has large potential rewards, but also large
            potential risk. You must be aware of the risks and be willing to
            accept them in order to invest in the markets. Don't invest and
            trade with money which you can't afford to lose. Forex Trading are
            not allowed in some countries, before investing your money, make
            sure whether your country is allowing this or not.
          </p>
          <p className="text-sm font-mono text-[#A1A1AA]  ">
            You are strongly advised to obtain independent financial, legal and
            tax advice before proceeding with any currency or spot metals trade.
            Nothing in this site should be read or construed as constituting
            advice on the part of Miles Capital Limited or any of its
            affiliates, directors, officers or employees. Information on this
            site is not directed at residents in any country or jurisdiction
            where such distribution or use would be contrary to local law or
            regulation.
          </p>
          <p className="text-sm font-mono text-[#A1A1AA]  ">
            <span className="font-bold">Restricted Regions:</span> Miles Capital
            Limited does not provide services for citizens/residents of the
            United States, Cuba, Iraq, Myanmar, North Korea, Sudan, Iran,
            Somalia, Syrian Arab Republic, Yemen, Republic of Congo. The
            services of Miles Capital Limited are not intended for distribution
            to, or use by, any person in any country or jurisdiction where such
            distribution or use would be contrary to local law or regulation.
          </p>
          <p className="text-sm font-mono text-[#A1A1AA] ">
            All Rights Reserved.
          </p>
        </div>
      </section>
      <section className="px-4 container max-w-7xl ">
        <Separator className="mb-12 mt-10" />
        <div className="w-full flex   items-center justify-between">
          <p className="text-sm font-mono text-[#A1A1AA]  ">
            © 2024 Miles Capital.
          </p>
          <p className="text-sm font-mono text-[#A1A1AA] ">
            All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
