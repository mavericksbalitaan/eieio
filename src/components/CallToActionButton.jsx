export function CallToActionButton() {
  return (
    <div
      className="py-24 gap-16 inline-flex flex-col items-center text-center w-screen bg-[rgba(245,243,239,1)] text-[rgba(28,79,73,1)]"
    >
      <div className="px-8 gap-8 flex flex-col items-center w-[1280px]">
        <div
          className="w-full gap-12 flex flex-col items-center self-stretch"
        >
          <div
            className="gap-6 flex flex-col justify-center items-center w-[1024px]"
          >
            <h2
              className={`w-full text-4xl font-semibold m-0 font-['Space_Grotesk'] tracking-[-0.32px] leading-[56px]`}
            >
              We will also offer a range of products, including soil sensors, drones, and automated machinery, to help farmers optimize their operations and minimize waste.
            </h2>
            <p
              className={`text-xl font-normal m-0 w-[768px] font-['Inter'] leading-[30px]`}
            >
              As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work.
            </p>
            <div
              className="flex justify-center items-center rounded-lg w-[170px] h-[60px] text-[rgba(224,227,222,1)]"
            >
              <div
                className="[box-shadow:0px_0px_0px_1px_rgba(28,_79,_73,_1)_inset] [box-shadow-width:1px] flex justify-center items-center rounded-lg w-[170px] h-[60px] drop-shadow-lg bg-[rgba(28,79,73,1)] overflow-clip"
              >
                <p className="text-lg leading-7 m-0 h-7 w-[114px]">
                  Call to action
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
