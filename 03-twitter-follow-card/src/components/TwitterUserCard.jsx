export const TwitterUserCard = ({ name, username }) => {
  const image = `https://unavatar.io/twitter/${username}`;
  const alt = `Profile picture of ${name}`;
  const formattedUsername = `@${username}`;
  return (
    <article className=" w-full h-[66px] flex items-center py-4 px-3 hover:bg-twitter-gray transition-colors duration-300 cursor-pointer">
      <img className=" rounded-full w-10 h-10 " src={image} alt={alt} />
      <div className="flex w-[268px] h-[42px] justify-between items-center ml-2">
        <div>
          <h4 className=" text-twitter-lighter text-base hover:underline transition-all duration-300">
            {name}
          </h4>
          <p className=" text-twitter-light text-base">{formattedUsername}</p>
        </div>
        <button className=" bg-twitter-white rounded-full h-8 w-[78px] text-twitter-dark font-bold text-sm hover:bg-twitter-lighter transition-colors duration-300">
          <span>Follow</span>
        </button>
      </div>
    </article>
  );
};
