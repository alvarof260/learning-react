function App() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <section className="bg-twitter-blue w-[348px] h-[302px] rounded-2xl">
          <header className="px-3 py-2">
            <h3 className=" text-twitter-lighter font-bold text-2xl">
              Who follow
            </h3>
          </header>

          <footer className="h-[54px] px-3 py-2 flex justify-start items-center">
            <a href="#" className="text-twitter-blueLight text-sm">
              Show More
            </a>
          </footer>
        </section>
      </main>
    </>
  );
}

export default App;
