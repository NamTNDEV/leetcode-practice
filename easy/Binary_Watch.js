function readBinaryWatch(turnedOn) {
  const result = [];

  function backtrack(ledIndex, ledsOnCount, hours, minutes) {
    if (hours > 11 || minutes > 59) return; // Hours [0; 11] && Minutes [0; 59]
    if (ledsOnCount === turnedOn) {
      result.push(`${hours}:${minutes.toString().padStart(2, '0')}`);
      return;
    }
    for (let i = ledIndex; i < 10; i++) {
      if (i < 4) {
        backtrack(i + 1, ledsOnCount + 1, hours + (1 << i), minutes);
      } else {
        backtrack(i + 1, ledsOnCount + 1, hours, minutes + (1 << (i - 4)));
      }
    }
  }

  backtrack(0, 0, 0, 0);
  return result;
}
