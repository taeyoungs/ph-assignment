import { Skeleton, Stack } from 'quantumic-design';
import { css } from '@emotion/css';

import colors from 'colors';

function SearchSkeletonItem() {
  return (
    <div
      className={css`
        border-top: 1px solid ${colors.gray300};
        padding: 16px 0;
      `}
    >
      <Stack gap={10} direction="column">
        <Skeleton width={180} height={20} />
        <Skeleton width={400} height={16} />
        <Skeleton width={360} height={16} />
      </Stack>
    </div>
  );
}

function SearchSkeleton() {
  return (
    <section
      className={css`
        padding: 24px;
        background-color: ${colors.white};
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.03);
        border-radius: 8px;
        margin: 0 0 24px;
      `}
    >
      <div
        className={css`
          margin: 0 0 24px;
        `}
      >
        <Skeleton width={140} height={25} />
      </div>
      {Array.from({ length: 3 }).map((_, index) => (
        <SearchSkeletonItem key={index} />
      ))}
    </section>
  );
}

export default SearchSkeleton;
