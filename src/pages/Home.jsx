import { useEffect, useState } from "react";

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

  const [timeLeft, setTimeLeft] = useState("");
  const [drawOpen, setDrawOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const drawTime = new Date();

      // 🔥 Official draw opens at 7:10 PM
      drawTime.setHours(19);
      drawTime.setMinutes(10);
      drawTime.setSeconds(0);

      const difference = drawTime - now;

      if (difference <= 0) {
        setDrawOpen(true);
        setTimeLeft("LIVE");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(difference / 1000 / 60 / 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleDraw() {
    if (!drawOpen || hasDrawn || isDrawing) return;

    setIsDrawing(true);

    let count = 0;

    const interval = setInterval(() => {
      setResult((prev) =>
        shuffle(prev.length ? [...prev] : [...participants])
      );

      count++;

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

      <div className="bg-white rounded-xl shadow p-6 my-6 text-center">
        <h2 className="text-2xl font-bold">
          Official Live Draw
        </h2>

        {!drawOpen && (
          <>
            <p className="text-slate-500 mt-3">
              Draw opens at <strong>7:10 PM</strong>
            </p>

            <p className="text-5xl font-bold text-blue-600 mt-4">
              {timeLeft}
            </p>
          </>
        )}

        {drawOpen && !hasDrawn && (
          <p className="text-green-600 font-semibold mt-4">
            🟢 Live Draw is Now Open
          </p>
        )}

        {hasDrawn && (
          <p className="text-green-700 font-bold mt-4">
            ✅ Official Draw Completed
          </p>
        )}
      </div>

      <DrawButton
        onDraw={handleDraw}
        disabled={!drawOpen || hasDrawn || isDrawing}
        isDrawing={isDrawing}
        drawOpen={drawOpen}
        hasDrawn={hasDrawn}
      />

      <DrawResult
        result={result}
        hasDrawn={hasDrawn}
        isDrawing={isDrawing}
      />

      <Footer />
    </div>
  );
}

export default Home;