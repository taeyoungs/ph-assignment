import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { css } from '@emotion/css';

import { getNewPageParams } from 'utils';
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

export default PaginationItem;
