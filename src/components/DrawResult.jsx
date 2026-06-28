function DrawResult({ result = [], hasDrawn, isDrawing }) {

  function getPosition(index) {
    switch (index) {
      case 0:
        return "🥇 First Collection";
      case 1:
        return "🥈 Second Collection";
      case 2:
        return "🥉 Third Collection";
      case 3:
        return "4th Collection";
      case 4:
        return "5th Collection";
      case 5:
        return "6th Collection";
      default:
        return "";
    }
  }

  return (
    <section className="bg-white rounded-xl shadow p-6 mb-8">

      <h2 className="text-2xl font-semibold mb-2">
        Official Result
      </h2>

      {!hasDrawn && !isDrawing && (
        <div className="mb-6 bg-yellow-50 border border-yellow-300 rounded-lg p-4">
          <p className="font-semibold text-yellow-700">
            ⏳ Waiting for the official draw to begin...
          </p>

          <p className="text-sm text-slate-600 mt-1">
            The collection order will be generated automatically once today's draw starts.
          </p>
        </div>
      )}

      {isDrawing && (
        <div className="mb-6 bg-red-50 border border-red-300 rounded-lg p-4 animate-pulse">

          <p className="font-bold text-red-700">
            🔴 LIVE DRAW IN PROGRESS
          </p>

          <p className="text-sm text-slate-600 mt-1">
            Randomizing collection order...
          </p>

        </div>
      )}

      {hasDrawn && (
        <div className="mb-6 bg-green-50 border border-green-300 rounded-lg p-4">

          <p className="font-bold text-green-700">
            ✅ OFFICIAL DRAW COMPLETED
          </p>

          <p className="text-sm text-slate-600 mt-1">
            The collection order has been finalized.
          </p>

        </div>
      )}

      <div className="space-y-3">

        {result.map((person, index) => (

          <div
            key={index}
            className={`
              flex justify-between items-center
              border rounded-lg
              px-4 py-3
              transition-all duration-300

              ${hasDrawn && index === 0 ? "bg-green-50 border-green-400" : ""}
            `}
          >

            <span className="font-semibold">
              {index + 1}. {person}
            </span>

            <span
              className={`
                font-semibold

                ${
                  hasDrawn
                    ? "text-green-700"
                    : "text-slate-500"
                }
              `}
            >
              {hasDrawn ? getPosition(index) : "Pending"}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default DrawResult;