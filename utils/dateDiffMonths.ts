const dateDiffMonths = (a: Date, b: Date): number => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  const diffDays = Math.floor((utc2 - utc1) / _MS_PER_DAY);

  return Math.floor(diffDays / 31);
}

export default dateDiffMonths; 