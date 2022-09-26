function ConvertDate(date: string, isShortForm: boolean): string {
  const dateFormat = new Date(date);

  if (isShortForm) {
    return `${dateFormat.getFullYear()}-${dateFormat.getMonth().toString().padStart(2, '0')}-${dateFormat.getDate().toString().padStart(2, '0')}`;
  }
  return `${dateFormat.toLocaleString('eng', { month: 'long' })} ${dateFormat.getDate()}, ${dateFormat.getFullYear()}`;
}

export default ConvertDate;
