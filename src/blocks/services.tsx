import { cn } from "../lib/utils";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconCoinBitcoin,
  IconShip,
  IconSignature,
  IconStack,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function OurServices() {
  return (
    <div className="flex flex-col  mt-11 items-center gap-6 px-4 justify-center max-w-7xl mb-11">
      <div className="w-full">
        <h2 className="text-2xl md:text-5xl font-bold dark:text-white">
          Our Products
        </h2>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Unlock a world of investment opportunities with Miles Capital.Lorem
          ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div>
        <BentoGrid className="container max-w-6xl mt-8 mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Forex",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </span>
    ),
    header: (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <img
          src=".././public/forex.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="h-full w-full rounded-xl"
        />
      </motion.div>
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Metals",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </span>
    ),
    header: (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <img
          src=".././public/metal.jpg"
          alt="avatar"
          height="100"
          width="100"
          className=" w-full rounded-xl"
        />
      </motion.div>
    ),
    className: "md:col-span-1",
    icon: <IconStack className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Commodities",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </span>
    ),
    header: (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <img
          src=".././public/commodities.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="h-full w-full rounded-xl"
        />
      </motion.div>
    ),
    className: "md:col-span-1",
    icon: <IconShip className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Indices",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </span>
    ),
    header: (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <img
          src=".././public/shares.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="h-full w-full rounded-xl"
        />
      </motion.div>
    ),
    className: "md:col-span-2",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Crypto Currency",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </span>
    ),
    header: (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <img
          src="./public/bitcoin.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="h-full w-full rounded-xl"
        />
      </motion.div>
    ),
    className: "md:col-span-1",
    icon: <IconCoinBitcoin className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Shares",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </span>
    ),
    header: (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <img
          src=".././public/trade.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="h-full w-full rounded-xl"
        />
      </motion.div>
    ),
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "bonds",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </span>
    ),
    header: (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <img
          src=".././public/bond.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="h-full w-full rounded-xl"
        />
      </motion.div>
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
