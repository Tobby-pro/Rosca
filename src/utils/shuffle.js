function shuffle(array) {
  const arr = [...array]; // NEVER mutate input

  for (let i = arr.length - 1; i > 0; i--) {
    // crypto-safe randomness if available
    const rand =
      typeof crypto !== "undefined" && crypto.getRandomValues
        ? crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32
        : Math.random();

    const j = Math.floor(rand * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

export default shuffle;