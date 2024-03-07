import { TwitterTitleCard } from "./components/TwitterTitleCard";
import { TwitterUserCard } from "./components/TwitterUserCard";
import { TwitterButtonCard } from "./components/TwitterButtonCard";

function App() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <section className="flex flex-col bg-twitter-blue w-[348px] h-[302px] rounded-2xl">
          <TwitterTitleCard>Who to follow</TwitterTitleCard>
          <TwitterUserCard
            name={"𓆰 𓆪"}
            username={"SebasTiianMC_"}
            initialIsFollowing
          />
          <TwitterUserCard
            name={"La Juanita⭐⭐⭐"}
            username={"so_ferrari_CARP"}
            initialIsFollowing={false}
          />
          <TwitterUserCard
            name={"KRÜ ATARAX1A"}
            username={"atarax1a_a"}
            initialIsFollowing={false}
          />
          <TwitterButtonCard>Show more</TwitterButtonCard>
        </section>
      </main>
    </>
  );
}

export default App;
