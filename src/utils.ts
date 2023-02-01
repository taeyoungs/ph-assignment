function getNewPageParams(searchParams: URLSearchParams, page: number) {
  if (!searchParams.has('p')) {
    return searchParams.toString() + `&p=${page}`;
  }

  return Array.from(searchParams.entries())
    .map(([key, value]) => (key === 'p' ? `p=${page}` : `${key}=${value}`))
    .join('&');
}

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function getFormattedDate(date: string) {
  const d = new Date(date);

  return `${DAYS_OF_WEEK[d.getDay()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export { getNewPageParams, getFormattedDate };
