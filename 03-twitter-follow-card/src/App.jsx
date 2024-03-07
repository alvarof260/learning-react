import { TwitterTitleCard } from "./components/TwitterTitleCard";
import { TwitterUserCard } from "./components/TwitterUserCard";
import { TwitterButtonCard } from "./components/TwitterButtonCard";

function App() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <section className="bg-twitter-blue w-[348px] h-[302px] rounded-2xl">
          <TwitterTitleCard>Who to follow</TwitterTitleCard>
          <TwitterUserCard />
          <TwitterUserCard />
          <TwitterUserCard />
          <TwitterButtonCard>show more</TwitterButtonCard>
        </section>
      </main>
    </>
  );
}

export default App;
