import { Skeleton, Stack } from 'quantumic-design';
import { css } from '@emotion/css';

import colors from 'colors';

function IssueSkeletonItem() {
  return (
    <div
      className={css`
        &:not(:last-child) {
          border-bottom: 1px solid ${colors.gray300};
        }
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

function IssueSkeleton() {
  return (
    <section
      className={css`
        padding: 24px;
        background-color: ${colors.white};
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.03);
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        margin: 0 0 24px;
        border-top: 2px solid ${colors.blue600};
      `}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <IssueSkeletonItem key={index} />
      ))}
    </section>
  );
}

export default IssueSkeleton;
