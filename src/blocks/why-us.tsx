import {
  Icon360View,
  IconCashBanknote,
  IconUserBolt,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function Features() {
  return (
    <div className="w-full flex flex-col  mt-11 items-center gap-6 px-4 justify-center max-w-7xl mb-11">
      <div className="w-full">
        <h2 className="text-2xl md:text-5xl font-bold dark:text-white">
          Why choose us?
        </h2>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          because we are The Only Broker Stands for your Profits. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="w-full max-w-6xl mt-8 flex flex-col gap-8 md:flex-row justify-between items-center">
        <div className="w-full lg:min-w-[500px]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-0">
              <AccordionTrigger>Enhanced Trading Experience:</AccordionTrigger>
              <AccordionContent className="w-full flex-col flex gap-4 justify-center">
                <p className="text-base">- Advance Trading Platform.</p>
                <p className="text-base">
                  - Free Demo Account to Practice Risk-Free Trading.
                </p>
                <p className="text-base">
                  - Best spreads in the Market, keeping more of your profits.
                </p>
                <p className="text-base">- Zero Commission Accounts.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger>Trade with Confidence:</AccordionTrigger>
              <AccordionContent className="w-full flex-col flex gap-4 justify-center">
                <p className="text-base">
                  - Operating 100% with Bank and Liquidity Provider. No
                  Slippage.
                </p>
                <p className="text-base">Lightning Fast Executions.</p>
                <p className="text-base">
                  Transparent Trading with no hidden Fees.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Exceptional Support:</AccordionTrigger>
              <AccordionContent className="w-full flex-col flex gap-4 justify-center">
                <p className="text-base">- 24/7 Customer Support.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Regulatory Assurance:</AccordionTrigger>
              <AccordionContent className="w-full flex-col flex gap-4 justify-center">
                <p className="text-base">
                  - Licensed under The Financial Services Commission (FSC) of
                  Mauritius.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full max-w-7xl h-full p-10 flex flex-1 flex-col lg:flex-row items-center justify-center mx-auto gap-4 ">
          <div className="flex flex-col justify-center items-center rounded-full ring-card-border ring-2 h-52 w-52 hover:shadow-sm hover:shadow-blue-300 backdrop:bg-blue-800 hover:bg-gradient-to-br from-transparent to-blue-900 hover:ring-0">
            <IconUserBolt className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-bold">5k+</h3>
            <p className="text-base">Active Users</p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-full ring-card-border ring-2 h-52 w-52 backdrop:bg-blue-800 hover:bg-gradient-to-br from-transparent to-blue-900 hover:ring-0">
            <IconCashBanknote className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-bold">1B+</h3>
            <p className="text-base">Daily Trades</p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-full ring-card-border ring-2 h-52 w-52 backdrop:bg-blue-800 hover:bg-gradient-to-br from-transparent to-blue-900 hover:ring-0">
            <Icon360View className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="text-base">Active Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
