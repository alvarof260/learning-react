export const TwitterUserCard = () => {
  return (
    <article className=" w-full h-[66px] flex items-center py-2 px-3 hover:bg-twitter-gray transition-colors duration-300">
      <img
        className=" rounded-full w-10 h-10 "
        src="https://unavatar.io/twitter/SebasTiianMC_"
        alt=""
      />
      <div className="flex w-[268px] h-[42px] justify-between items-center ml-2">
        <div>
          <h4 className=" text-twitter-lighter text-xl">𓆰 𓆪</h4>
          <p className=" text-twitter-light text-base">@SebasTiianMC_</p>
        </div>
        <button className=" bg-twitter-white rounded-full h-8 w-[78px] text-twitter-dark font-bold text-sm hover:bg-twitter-lighter transition-colors duration-300">
          <span>Follow</span>
        </button>
      </div>
    </article>
  );
};
