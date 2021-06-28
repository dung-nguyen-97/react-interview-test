export function getActivityValue(day) {
  const t = new Date();
  while (true) {
    const now = new Date();
    if (now.getTime() - t.getTime() > 10) {
      break;
    }
  }

  return Math.random();
}
