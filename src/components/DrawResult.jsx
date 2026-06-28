function DrawResult({ result = [], hasDrawn }) {
  return (
    <section className="bg-white rounded-xl shadow p-6 mb-8">

      <h2 className="text-2xl font-semibold mb-5">
        Official Result
      </h2>

      <div className="space-y-3">

        {result.map((person, index) => (
          <div
            key={index}
            className={`
              flex justify-between items-center border rounded-lg px-4 py-3
              transition-all duration-300
              ${hasDrawn && index === 0 ? "bg-green-50 border-green-400" : ""}
            `}
          >
            <span className="font-semibold">
              {index + 1}. {person}
            </span>

            <span className="text-green-600 font-bold">
              {hasDrawn ? "✔ Locked" : "⏳ Pending"}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default DrawResult;