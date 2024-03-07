export const TwitterButtonCard = ({ children }) => {
  return (
    <footer className="h-full px-3 py-2 flex justify-start items-center hover:bg-twitter-gray transition-colors duration-300 rounded-b-xl cursor-pointer">
      <a href="#" className="text-twitter-blueLight text-base">
        {children}
      </a>
    </footer>
  );
};
