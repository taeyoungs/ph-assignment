function getNewPageParams(searchParams: URLSearchParams, page: number) {
  if (!searchParams.has('p')) {
    return searchParams.toString() + `&p=${page}`;
  }

  return Array.from(searchParams.entries())
    .map(([key, value]) => (key === 'p' ? `p=${page}` : `${key}=${value}`))
    .join('&');
}

export { getNewPageParams };
