import { useSearchParams } from 'react-router-dom';
import { Stack } from 'quantumic-design';
import { css } from '@emotion/css';

import Button from 'components/Button';
import PaginationItem from './PaginationItem';

const PER_PAGE = 10;
const INITIAL_PAGE = 1;
const NUM_OF_ELLIPSIS = 6;

interface PaginationProps {
  totalCount: number;
}

function Pagination({ totalCount }: PaginationProps) {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('p') ?? INITIAL_PAGE);

  const totalPages = Math.ceil(totalCount / PER_PAGE);

  const hasPreviousPage = currentPage > INITIAL_PAGE;
  const hasNextPage = currentPage < totalPages;

  const hasPreviousEllipsis = currentPage > NUM_OF_ELLIPSIS;
  const hasNextEllipsis = currentPage <= totalPages - NUM_OF_ELLIPSIS;
  const hasEllipsis = hasPreviousEllipsis && hasNextEllipsis;

  return (
    <Stack
      gap={16}
      align="center"
      justify="center"
      className={css`
        margin: 0 0 24px;
      `}
    >
      <Button isDisabled={!hasPreviousPage}>이전</Button>
      <Stack gap={10} align="center">
        {hasPreviousEllipsis ? (
          <>
            {Array.from({ length: 2 }).map((_, idx) => (
              <PaginationItem key={idx} page={idx + 1} current={currentPage === idx + 1} />
            ))}
            <div>...</div>
          </>
        ) : (
          Array.from({ length: currentPage <= 3 ? 5 : currentPage + 2 }).map((_, idx) => (
            <PaginationItem key={idx} page={idx + 1} current={currentPage === idx + 1} />
          ))
        )}
        {hasEllipsis &&
          Array.from({ length: 5 }).map((_, idx) => (
            <PaginationItem
              key={idx}
              page={currentPage - 2 + (idx + 1)}
              current={currentPage === currentPage - 2 + (idx + 1)}
            />
          ))}
        {hasNextEllipsis ? (
          <>
            <div>...</div>
            {Array.from({ length: 2 }).map((_, idx) => (
              <PaginationItem
                key={idx}
                page={totalPages - 2 + (idx + 1)}
                current={currentPage === totalPages - 2 + (idx + 1)}
              />
            ))}
          </>
        ) : (
          Array.from({ length: currentPage >= totalPages - 2 ? 5 : totalPages - currentPage + 3 }).map((_, idx) => (
            <PaginationItem
              key={idx}
              page={currentPage >= totalPages - 2 ? totalPages - 5 + (idx + 1) : currentPage - 2 + (idx + 1)}
              current={
                currentPage ===
                (currentPage >= totalPages - 2 ? totalPages - 5 + (idx + 1) : currentPage - 2 + (idx + 1))
              }
            />
          ))
        )}
      </Stack>
      <Button isDisabled={!hasNextPage}>다음</Button>
    </Stack>
  );
}

export default Pagination;
