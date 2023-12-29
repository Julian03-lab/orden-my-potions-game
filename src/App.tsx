import { useEffect, useState } from "react";
import { GameState } from "./logic.ts";
import UniverseA from "./components/UniverseA.tsx";
import UniverseB from "./components/UniverseB.tsx";
import GameFinished from "./components/GameFinished.tsx";

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
    <div className="flex flex-col bg-slate-600 items-center min-h-screen justify-between">
      {actualUniverse === 0 ? (
        <UniverseA game={game.universe[0]} />
      ) : (
        <UniverseB game={game.universe[1]} />
      )}
      {game.gameFinished && <GameFinished />}
    </div>
  );
}

export default App;
