function DrawButton({ onDraw, disabled }) {
  return (
    <div className="text-center mb-8">

      <button
        onClick={onDraw}
        disabled={disabled}
        className="
          bg-blue-600 hover:bg-blue-700
          text-white font-semibold
          px-8 py-4 rounded-xl
          transition
          disabled:opacity-50
          disabled:cursor-not-allowed
          flex items-center justify-center gap-3
          mx-auto
          min-w-[180px]
        "
      >
        {disabled ? (
          <>
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            <span>Drawing</span>
          </>
        ) : (
          <>
            🎲 START DRAW
          </>
        )}
      </button>

    </div>
  );
}

export default DrawButton;