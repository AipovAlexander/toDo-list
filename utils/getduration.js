export function getDurationText(hours, minutes, seconds) {
  const hoursText =
    hours > 0 ? `${hours} час${getNounForm(hours, "а", "", "ов")}` : "";
  const minutesText =
    minutes > 0 ? `${minutes} минут${getNounForm(minutes, "а", "ы", "")}` : "";
  const secondsText =
    seconds > 0 ? `${seconds} секунд${getNounForm(seconds, "а", "ы", "")}` : "";

  const resultText = [hoursText, minutesText, secondsText]
    .filter(Boolean)
    .join(", ");

  return `Выполнено за: ${resultText}`;
}

export function getNounForm(
  number,
  nominative,
  genitiveSingular,
  genitivePlural
) {
  number = Math.abs(number);
  const mod10 = number % 10;
  const mod100 = number % 100;

  if (mod100 >= 5 && mod100 <= 20) {
    return genitivePlural;
  }

  if (mod10 === 1) {
    return nominative;
  }

  if (mod10 >= 2 && mod10 <= 4) {
    return genitiveSingular;
  }

  return genitivePlural;
}

