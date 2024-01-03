import { useEffect, useState } from "react";
import { GameState } from "./logic.ts";
import UniverseA from "./components/UniverseA.tsx";
import UniverseB from "./components/UniverseB.tsx";
import GameFinished from "./components/GameFinished.tsx";
import Character from "./components/Character.tsx";

function App() {
  const [game, setGame] = useState<GameState>();
  const [actualUniverse, setActualUniverse] = useState<number>();

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
      {actualUniverse === 0 ? (
        <UniverseA game={game.universe[0]}>
          <Character dialog={game.dialog} />
        </UniverseA>
      ) : (
        <UniverseB game={game.universe[1]}>
          <Character dialog={game.dialog} />
        </UniverseB>
      )}
      {game.gameFinished && <GameFinished />}
    </div>
  );
}

export default App;
