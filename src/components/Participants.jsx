import participants from "../data/participants";

function Participants() {
  return (
    <section className="bg-white rounded-xl shadow p-6 mb-8">

      <h2 className="text-2xl font-semibold mb-5">
        Participants
      </h2>

      <div className="space-y-3">

        {participants.map((person, index) => (
          <div
            key={index}
            className="flex justify-between items-center border rounded-lg px-4 py-3"
          >
            <span className="font-medium text-slate-800">
              {person}
            </span>

            <span className="text-green-600 font-semibold">
              Ready ✓
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Participants;