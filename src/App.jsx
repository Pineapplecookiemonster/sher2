import { useState } from "react";
import QuizPage from "./pages/whoami.jsx";
import ParisAdventure from "./pages/parisadventure";


export default function App() {
  const [page, setPage] = useState("home");
  const [playerName, setPlayerName] = useState("");

  return (
    <>
      {page === "home" && (
        <main>
          <h1>Who Am I</h1>
          <p>Choose where to begin.</p>

          <button onClick={() => setPage("quiz")}>
            Start Quiz
          </button>

          <button onClick={() => setPage("paris")}>
            Paris Food Adventure
          </button>
        </main>
      )}

      {page === "quiz" && (
        <QuizPage
          playerName={playerName}
          setPlayerName={setPlayerName}
          setPage={setPage}
        />
      )}

      {page === "paris" && (
        <ParisAdventure
          playerName={playerName}
          setPage={setPage}
        />
      )}
    </>
  );
}