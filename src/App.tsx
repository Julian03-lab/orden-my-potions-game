import { useEffect, useState } from "react";
import { GameState } from "./logic.ts";
import UniverseA from "./components/UniverseA.tsx";
import UniverseB from "./components/UniverseB.tsx";
import Character from "./components/Character.tsx";
import StartScreen from "./components/StartScreen.tsx";
import FinalModal from "./components/FinalModal.tsx";
import ReactHowler from "react-howler";

function App() {
  const [game, setGame] = useState<GameState>();
  const [actualUniverse, setActualUniverse] = useState<number>();
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    Rune.initClient({
      onChange: ({ game, yourPlayerId }) => {
        setGame(game);
        if (!yourPlayerId) return;
        setActualUniverse(game.players[yourPlayerId].universe);
      },
    });
  }, []);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen justify-between">
      {game.votesToStart < 2 ? (
        <StartScreen votes={game.votesToStart} />
      ) : actualUniverse === 0 ? (
        <UniverseA game={game.universe[0]}>
          <Character dialog={game.dialog} color="#D795F5" />
        </UniverseA>
      ) : (
        <UniverseB game={game.universe[1]}>
          <Character dialog={game.dialog} color="#79E4C4" />
        </UniverseB>
      )}
      {game.gameFinished !== null && (
        <FinalModal
          result={game.gameFinished}
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
      <ReactHowler
        src="soundtrack.mp3"
        playing={true}
        loop={true}
        volume={0.5}
      />
    </div>
  );
}

export default App;
