import { useState } from "react";

import Header from "../components/Header";
import Participants from "../components/Participants";
import DrawButton from "../components/DrawButton";
import DrawResult from "../components/DrawResult";
import Footer from "../components/Footer";

import participants from "../data/participants";
import shuffle from "../utils/shuffle";

function Home() {
  const [result, setResult] = useState(participants);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

function handleDraw() {
  setIsDrawing(true);

  let count = 0;

  const interval = setInterval(() => {
    setResult(prev => shuffle(prev.length ? prev : participants));

    count++;

    // smoother 5-second controlled draw
    if (count > 33) {
      clearInterval(interval);
      setIsDrawing(false);
      setHasDrawn(true);
    }
  }, 150 + Math.random() * 40);
}

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <Header />

      <div className="mt-6">
        <Participants />
      </div>

      <div className="my-6">
        <DrawButton
          onDraw={handleDraw}
          disabled={isDrawing || hasDrawn}
        />
      </div>

      <DrawResult result={result} hasDrawn={hasDrawn} />

      <Footer />
    </div>
  );
}

export default Home;