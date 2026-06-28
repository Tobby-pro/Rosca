function DrawButton({
  onDraw,
  disabled,
  isDrawing,
  drawOpen,
  hasDrawn,
}) {
  let buttonText = "🎲 START OFFICIAL DRAW";

  if (!drawOpen) {
    buttonText = "🔒 DRAW OPENS AT 7:10 PM";
  }

  if (isDrawing) {
    buttonText = "Drawing Official Order...";
  }

  if (hasDrawn) {
    buttonText = "✅ DRAW COMPLETED";
  }

  return (
    <div className="text-center mb-8">
      <button
        onClick={onDraw}
        disabled={disabled}
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          px-8
          py-4
          rounded-xl
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          flex
          items-center
          justify-center
          gap-3
          mx-auto
          min-w-[260px]
        "
      >
        {isDrawing && (
          <span
            className="
              w-5
              h-5
              border-2
              border-white
              border-t-transparent
              rounded-full
              animate-spin
            "
          />
        )}

        <span>{buttonText}</span>
      </button>
    </div>
  );
}

export default DrawButton;