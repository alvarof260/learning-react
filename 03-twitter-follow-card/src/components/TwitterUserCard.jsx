import { useState } from "react";
import { clsx } from "clsx";

export const TwitterUserCard = ({ name, username, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isHover, setIsHover] = useState(false);
  const image = `https://unavatar.io/twitter/${username}`;
  const alt = `Profile picture of ${name}`;
  const formattedUsername = `@${username}`;
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

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
        <button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={clsx(
            "rounded-full h-8 px-4 font-bold text-sm transition-colors duration-300",
            isFollowing
              ? isHover
                ? " bg-red-500/45 text-white border border-solid border-red-500"
                : "bg-transparent border border-solid border-twitter-white text-twitter-white"
              : "bg-twitter-white text-twitter-dark hover:bg-twitter-lighter"
          )}
        >
          <span>
            {isFollowing ? (isHover ? "Unfollow" : "Following") : "Follow"}
          </span>
        </button>
      </div>
    </article>
  );
};
