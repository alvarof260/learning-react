export const TwitterButtonCard = ({ children }) => {
  return (
    <footer className="h-[54px] px-3 py-2 flex justify-start items-center">
      <a href="#" className="text-twitter-blueLight text-sm">
        {children}
      </a>
    </footer>
  );
};
