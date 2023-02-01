import { Stack, Text } from 'quantumic-design';
import { Endpoints } from '@octokit/types';
import { css } from '@emotion/css';

import { getFormattedDate } from 'utils';
import colors from 'colors';

type Issue = Endpoints['GET /search/issues']['response']['data']['items'][0];

interface IssueItemProps {
  issue: Issue;
  repositoryName: string;
}

function IssueItem({ issue, repositoryName }: IssueItemProps) {
  const { title, body, user, updated_at, html_url } = issue;

  return (
    <li
      className={css`
        &:not(:last-child) {
          border-bottom: 1px solid ${colors.gray300};
        }
        padding: 16px 0;
      `}
    >
      <Stack gap={10} direction="column">
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className={css`
            :hover {
              text-decoration: underline;
            }
          `}
        >
          {title}
        </a>
        <Text
          size={13}
          className={css`
            max-width: 800px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `}
        >
          {body}
        </Text>
        <Stack
          gap={10}
          className={css`
            font-size: 13px;
            color: ${colors.gray800};
          `}
        >
          <Text>{repositoryName}</Text>
          {user && <Text>{user.login}</Text>}
          <Text>Updated on {getFormattedDate(updated_at)}</Text>
        </Stack>
      </Stack>
    </li>
  );
}

export default IssueItem;
