import { Flex, Stack, Text } from 'quantumic-design';
import { css } from '@emotion/css';
import { Endpoints } from '@octokit/types';

import Button from 'components/Button';
import colors from 'colors';

type Repository = Endpoints['GET /search/repositories']['response']['data']['items'][0];

function SearchedItem({ full_name, stargazers_count, language, updated_at, description, html_url }: Repository) {
  return (
    <li
      className={css`
        border-top: 1px solid ${colors.gray300};
        padding: 16px 0;
      `}
    >
      <Flex justify="space-between" align="center">
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
            {full_name}
          </a>
          <Text size={13}>{description}</Text>
          <Stack
            gap={10}
            className={css`
              font-size: 13px;
              color: ${colors.gray800};
            `}
          >
            <Text>☆ {stargazers_count}</Text>
            <Text>{language}</Text>
            <Text>Updated on {updated_at}</Text>
          </Stack>
        </Stack>
        <Button
          type="button"
          className={css`
            width: 60px;
          `}
        >
          등록
        </Button>
      </Flex>
    </li>
  );
}

export default SearchedItem;
