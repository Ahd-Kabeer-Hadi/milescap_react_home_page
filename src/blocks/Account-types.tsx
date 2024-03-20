import { IconChecks } from "@tabler/icons-react";
import { Separator } from "../components/ui/separator";
import { Tabs } from "../components/ui/tabs";

export default function AccountTypes() {
  return (
    <div className="max-w-7xl relative mx-auto py-20 px-4 w-full   items-center justify-between left-0 top-0 mb-11">
      <div className="mx-auto flex  items-center w-full p-1 justify-between  top-5">
        <h2 className="text-2xl md:text-7xl font-bold dark:text-white ">
          Range of Forex Trading <br /> Accounts Suited For All <br />
          Experience Levels
        </h2>
      </div>

      <div className="h-[40rem] md:h-[20rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full  items-start justify-start mt-20 mb-40">
        <Tabs tabs={tabs} tabClassName="w-full" />
      </div>
    </div>
  );
}

const tabs = [
  {
    title: "Classic",
    value: "Classic",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl text-white border-[1px] border-card-border/20 bg-gradient-to-tr from-transparent to-blue-950 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
        <p className="text-3xl font-bold mb-4">Classic</p>
        <div className="w-full flex flex-col justify-between items-center md:flex-row gap-4">
          <div className="flex flex-col gap-4 justify-center mt-5">
            <p className="text-md font-medium font-mono text-white max-w-sm flex items-center gap-2">
              <IconChecks
                size={20}
                color="#18181D"
                className="rounded-full bg-white h-8 w-8 p-2"
              />{" "}
              Low Spreads
            </p>
            <p className="text-md font-medium font-mono text-white max-w-sm flex items-center gap-2">
              <IconChecks
                size={20}
                color="#18181D"
                className="rounded-full bg-white h-8 w-8 p-2"
              />{" "}
              1:500
            </p>
            <p className="text-md font-medium font-mono text-white max-w-sm flex items-center gap-2">
              <IconChecks
                size={20}
                color="#18181D"
                className="rounded-full bg-white h-8 w-8 p-2"
              />{" "}
              Zero Commissions
            </p>
          </div>
          <Separator className="mr-4" orientation="vertical" />
          <p className="text-sm font-mono mt-5 text-[#A1A1AA] max-w-md">
            Take your trading to the next level with our most advanced swap-free
            account. Get ultra-low spreads, up to 1:500 leverage and no hidden
            commissions. Best suited for experienced traders looking to unlock
            greater profits and optimise their trading strategies under ideal
            market conditions.
          </p>
          <Separator className="mr-4 bg-[#A1A1AA]" orientation="vertical" />
        </div>
      </div>
    ),
  },
  {
    title: "Executive",
    value: "Executive",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl text-white border-[1px] border-card-border/20 bg-gradient-to-tr from-transparent to-indigo-950 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
        <p className="text-3xl font-bold mb-4">Executive</p>
        <div className="w-full flex flex-col justify-between items-center md:flex-row gap-4">
          <div className="flex flex-col gap-4 justify-center mt-5">
            <p className="text-md font-medium font-mono text-white max-w-sm flex items-center gap-2">
              <IconChecks
                size={20}
                color="#18181D"
                className="rounded-full bg-white h-8 w-8 p-2"
              />{" "}
              Low Spreads
            </p>
            <p className="text-md font-medium font-mono text-white max-w-sm flex items-center gap-2">
              <IconChecks
                size={20}
                color="#18181D"
                className="rounded-full bg-white h-8 w-8 p-2"
              />{" "}
              1:500
            </p>
            <p className="text-md font-medium font-mono text-white max-w-sm flex items-center gap-2">
              <IconChecks
                size={20}
                color="#18181D"
                className="rounded-full bg-white h-8 w-8 p-2"
              />{" "}
              Zero Commissions
            </p>
          </div>
          <Separator className="mr-4" orientation="vertical" />
          <p className="text-sm font-mono mt-5 text-[#A1A1AA] max-w-md">
            Take your trading to the next level with our most advanced swap-free
            account. Get ultra-low spreads, up to 1:500 leverage and no hidden
            commissions. Best suited for experienced traders looking to unlock
            greater profits and optimise their trading strategies under ideal
            market conditions.
          </p>
          <Separator className="mr-4 bg-[#A1A1AA]" orientation="vertical" />
        </div>
      </div>
    ),
  },
  {
    title: "Premium ",
    value: "Premium ",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl text-white border-[1px] border-card-border/20 bg-gradient-to-tr from-transparent to-purple-950 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
        <p className="text-3xl font-bold mb-4">Premium</p>
        <div className="w-full flex flex-col justify-between items-center md:flex-row gap-4">
          <div className="flex flex-col gap-4 justify-center mt-5">
            <p className="text-md font-medium font-mono text-white max-w-sm flex items-center gap-2">
              <IconChecks
                size={20}
                color="#18181D"
                className="rounded-full bg-white h-8 w-8 p-2"
              />{" "}
              Low Spreads
            </p>
            <p className="text-md font-medium font-mono text-white max-w-sm flex items-center gap-2">
              <IconChecks
                size={20}
                color="#18181D"
                className="rounded-full bg-white h-8 w-8 p-2"
              />{" "}
              1:500
            </p>
            <p className="text-md font-medium font-mono text-white max-w-sm flex items-center gap-2">
              <IconChecks
                size={20}
                color="#18181D"
                className="rounded-full bg-white h-8 w-8 p-2"
              />{" "}
              Zero Commissions
            </p>
          </div>
          <Separator className="mr-4" orientation="vertical" />
          <p className="text-sm font-mono mt-5 text-[#A1A1AA] max-w-md">
            Take your trading to the next level with our most advanced swap-free
            account. Get ultra-low spreads, up to 1:500 leverage and no hidden
            commissions. Best suited for experienced traders looking to unlock
            greater profits and optimise their trading strategies under ideal
            market conditions.
          </p>
          <Separator className="mr-4 bg-[#A1A1AA]" orientation="vertical" />
        </div>
      </div>
    ),
  },
];
