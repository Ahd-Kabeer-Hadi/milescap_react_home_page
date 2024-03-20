export default function AppDownload() {
  return (
    <div className="max-w-7xl relative mx-auto py-20 px-4 w-full   items-center justify-between left-0 top-0 mb-11">
      <div className="w-full max-w-6xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <img src={"/static/app.png"} alt="app" className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold dark:text-white">
            Master Mobile Trading on the <br /> go with Our Powerful App
          </h2>
          <div className="w-full flex gap-4 items-center mt-8">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={"/static/playstore.svg"}
                alt="playstore"
                className="rounded-lg ring-1 ring-white mr-4"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={"/static/apple.svg"}
                alt="playstore"
                className="rounded-lg ring-1 ring-white"
              />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="rounded-xl flex flex-col md:flex-row gap-5 items-center  justify-around border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
        
         <div className="w-full flex  text-center">
          <h2 className="text-2xl md:text-5xl font-bold dark:text-white">
            Why choose us?
          </h2>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            because we are The Only Broker Stands for your Profits. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
       
      </div> */}
    </div>
  );
}
