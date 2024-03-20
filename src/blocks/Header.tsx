import { IconMenu2 } from "@tabler/icons-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

export default function Header() {
  return (
    <div className="w-full fixed z-50 h-20 border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md">
      <div className="max-w-7xl relative mx-auto px-4 container  flex items-center justify-between">
        <img src="./public/LogoMain.svg" alt="logo" className="h-8 md:h-12" />

        <ul className="hidden md:flex font-semibold text-md  gap-5 ">
          <li className="cursor-pointer">
            Home
            <a href="#"></a>
          </li>
          <li className="cursor-pointer">
            <a href="#">Services</a>
          </li>
          <li className="cursor-pointer">
            <a href="#">Platforms</a>
          </li>
          <li className="cursor-pointer">
            <a href="#">Accounts</a>
          </li>
          <li className="cursor-pointer">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="md:hidden flex justify-center items-center">
          <Sheet>
            <SheetTrigger>
              <IconMenu2 />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <img
                    src="./public/LogoMain.svg"
                    alt="logo"
                    className="h-12"
                  />
                </SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col justify-between items-center mt-8 font-semibold text-md  gap-5 ">
                    <li className="cursor-pointer w-full p-3 rounded-lg text-center active:border-[1px] active:border-card-border/20 bg-[#18181D]/60 my-2 bg-opacity-60 backdrop-filter backdrop-blur-md">
                      Home
                      <a href="#"></a>
                    </li>
                    <li className="cursor-pointer w-full p-3 rounded-lg text-center active:border-[1px] active:border-card-border/20 bg-[#18181D]/60 my-2 bg-opacity-60 backdrop-filter backdrop-blur-md">
                      <a href="#">Services</a>
                    </li>
                    <li className="cursor-pointer w-full p-3 rounded-lg text-center active:border-[1px] active:border-card-border/20 bg-[#18181D]/60 my-2 bg-opacity-60 backdrop-filter backdrop-blur-md">
                      <a href="#">Platforms</a>
                    </li>
                    <li className="cursor-pointer w-full p-3 rounded-lg text-center active:border-[1px] active:border-card-border/20 bg-[#18181D]/60 my-2 bg-opacity-60 backdrop-filter backdrop-blur-md">
                      <a href="#">Accounts</a>
                    </li>
                    <li className="cursor-pointer w-full p-3 rounded-lg text-center active:border-[1px] active:border-card-border/20 bg-[#18181D]/60 my-2 bg-opacity-60 backdrop-filter backdrop-blur-md">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
