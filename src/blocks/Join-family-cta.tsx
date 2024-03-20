import { Button } from "../components/ui/button";

export default function JoinFamily() {
  return (
    <div className="w-full flex flex-col  mt-11 items-center gap-6 px-4 justify-center max-w-7xl mb-11 ">
      <div className="w-full  mx-auto  rounded-lg md:w-3/2  bg-hero ">
        <div className="w-full flex flex-col items-center justify-center gap-8 backdrop-blur-lg px-4 py-6">
          <h2 className="text-2xl md:text-5xl font-bold dark:text-white">
            Join the Miles Capital Family
          </h2>
          <p className="max-w-2xl text-base md:text-xl mt-8 bac text-neutral-200">
            Partner with Miles Capital and embark on a journey towards financial
            success. With our unwavering commitment to integrity, transparency,
            and excellence, we aim to build long-lasting relationships with our
            clients, helping them achieve their financial dreams
          </p>

          <Button className="w-40 h-12">Create Account</Button>
        </div>
      </div>
    </div>
  );
}
