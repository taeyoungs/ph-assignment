import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { css } from '@emotion/css';

import colors from 'colors';

interface PaginationItemProps {
  page: number;
  current: boolean;
}

function PaginationItem({ page, current }: PaginationItemProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  const newParams = getNewPageParams(searchParams, page);
  const to = pathname + '?' + newParams;

  const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    setSearchParams(newParams);
    window.scrollTo(0, 0);
  };

  return (
    <Link
      to={to}
      onClick={handleLinkClick}
      className={css`
        color: ${current ? colors.black : colors.gray600};
        &:hover {
          text-decoration: underline;
        }
      `}
    >
      {page}
    </Link>
  );
}

function getNewPageParams(searchParams: URLSearchParams, page: number) {
  if (!searchParams.has('p')) {
    return searchParams.toString() + `&p=${page}`;
  }

  return Array.from(searchParams.entries())
    .map(([key, value]) => (key === 'p' ? `p=${page}` : `${key}=${value}`))
    .join('&');
}

export default PaginationItem;
