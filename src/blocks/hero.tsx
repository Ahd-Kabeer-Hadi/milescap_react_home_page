// import { Button } from "../components/ui/button";

// export default function Hero() {
//   return (
//     <section className="w-full flex items-center min-h-screen overflow-x-clip sm:min-h-screen">
//       <div className="  mx-auto mt-8 flex flex-col  max-w-7xl items-center w-full px-4 gap-9 top-5 backdrop-blur-sm rounded-lg">
//         <h1 className="text-2xl md:text-3xl lg:text-5xl tracking-wide font-bold font-title text-center text-balance ">
//           Accelerate Your Financial Growth <br />
//           with Miles Capital limited
//         </h1>
//         <p className="md:text-2xl font-body font-light">
//           Welcome to Miles Capital Limited, your trusted partner in smart
//           trading.
//         </p>

//         <div className="flex gap-4 items-center justify-around">
//           <Button className="w-40 h-12 bg-purple-500 text-white hover:bg-white hover:text-purple-500">
//             Create Account
//           </Button>
//           <Button
//             variant="outline"
//             className="w-40 h-12 hover:bg-purple-500/35 border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md"
//           >
//             Open a demo Account
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Button } from "../components/ui/button";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[100vh] md:h-[150vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 px-4 w-full flex  items-center justify-between left-0 top-0">
      <div className="mx-auto flex  items-center w-full p-1 justify-between  top-5">
        <div className="w-full min-w-[300px] lg:max-w-5xl">
          <h1 className="text-2xl md:text-7xl font-bold dark:text-white ">
            Accelerate Your <br /> Financial Growth <br /> with us
          </h1>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            Unlock a world of investment opportunities with Miles Capital. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem
            modi, a facere consectetur eligendi itaque, quasi magnam soluta ad
            optio eum blanditiis, praesentium in ipsum? Nesciunt saepe minima
            animi?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-8">
            <Button className="w-40 h-12 bg-white">Create Account</Button>
            <Button
              variant="outline"
              className="w-40 h-12 border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md"
            >
              Open a demo Account
            </Button>
          </div>
        </div>
        <div className="w-full max-w-[400px] backdrop-blur-lg hidden lg:flex">
          <iframe
            className="rounded-md border-none"
            src="https://fxpricing.com/fx-widget/market-currency-rates-widget.php?id=1,2,3,5,14,20,25,24&pair_weight=normal&click_target=blank&theme=dark&tm-cr=212529&hr-cr=FFFFFF13&by-cr=28A745&sl-cr=DC3545&flags=circle&value_alignment=center&column=price,bid,chg_per&lang=en&font=Arial, sans-serif"
            width="100%"
            height="290"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      {/* <link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      > */}
      <img
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
      {/* </link> */}
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
