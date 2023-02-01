interface UsePaginationProps {
  total: number;
  page: number;
  boundary?: number;
  sibling?: number;
}

function usePagination({ page, total, boundary = 2, sibling = 1 }: UsePaginationProps) {
  const startPages = range(1, Math.min(boundary, total));
  const endPages = range(Math.max(total - boundary, boundary + 1), total);

  const siblingStart = Math.max(Math.min(page - sibling, total - boundary - sibling * 2 - 1), boundary + 1);
  const siblingEnd = Math.min(
    Math.max(page + sibling, boundary + sibling * 2 + 2),
    endPages.length > 0 ? endPages[0]! - 1 : total - 1
  );

  const items = [
    ...startPages,
    ...(siblingStart > boundary + 2 ? ['front-ellipsis'] : []),
    ...range(siblingStart, siblingEnd),
    ...(siblingEnd < total - boundary - 1 ? ['back-ellipsis'] : []),
    ...endPages,
  ];

  return { items };
}

// https://dev.to/namirsab/comment/2050
const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

export default usePagination;
