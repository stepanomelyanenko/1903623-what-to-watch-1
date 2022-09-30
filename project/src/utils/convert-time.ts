function convertTime(timeInMinutes: number): string {
  const hours = parseInt(String((timeInMinutes) / 60), 10);
  const minutes = timeInMinutes - hours * 60;

  const diffHours = `${hours.toString()}h`;
  const diffMinutes = `${minutes.toString().padStart(2,'0')}m`;

  if (hours === 0) {
    return diffMinutes;
  }

  return `${diffHours} ${diffMinutes}`;
}

export default convertTime;
