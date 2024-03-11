import responseJSON from "./mocks/response.json";
import noResponse from "./mocks/error-response.json";

import { Movies } from "./components/Movies";

function App() {
  return (
    <>
      <header className="flex flex-col justify-center items-center py-4 gap-3 border border-solid border-b-slate-700 border-opacity-10">
        <h1 className=" text-4xl font-bold text-viking-600">Movie Search</h1>
        <form className="flex justify-center items-center gap-6">
          <input
            className=" bg-slate-50 border-2 border-solid border-viking-600 rounded-md px-2 py-1 placeholder:text-viking-600 text-viking-800 active:border-viking-800 focus:border-viking-800 focus:outline-none transition-all duration-300 ease-in-out"
            type="text"
            placeholder="Avengers, Flash, Matrix..."
          />
          <button className="bg-viking-600 px-4 py-1 rounded-md text-viking-50 hover:bg-viking-800 transition-colors duration-300 ease-in">
            Search
          </button>
        </form>
      </header>
      <main>
        <Movies response={responseJSON} />
      </main>
    </>
  );
}

export default App;
