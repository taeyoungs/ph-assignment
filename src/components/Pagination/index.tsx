import { useSearchParams } from 'react-router-dom';
import { Stack } from 'quantumic-design';
import { css } from '@emotion/css';

import Button from 'components/Button';
import PaginationItem from './PaginationItem';
import usePagination from './usePagination';

const PER_PAGE = 10;
const INITIAL_PAGE = 1;

interface PaginationProps {
  totalCount: number;
}

function Pagination({ totalCount }: PaginationProps) {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('p') ?? INITIAL_PAGE);
  const totalPages = Math.ceil(totalCount / PER_PAGE);
  const { items } = usePagination({ total: totalPages, page: currentPage });

  const hasPreviousPage = currentPage > INITIAL_PAGE;
  const hasNextPage = currentPage < totalPages;

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
        {items.map((item) =>
          item === 'front-ellipsis' || item === 'back-ellipsis' ? (
            <div key={item}>...</div>
          ) : (
            <PaginationItem key={item} page={item as number} current={currentPage === (item as number)} />
          )
        )}
      </Stack>
      <Button isDisabled={!hasNextPage}>다음</Button>
    </Stack>
  );
}

export default Pagination;
