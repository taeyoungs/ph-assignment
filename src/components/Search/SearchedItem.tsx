import { Flex, Stack, Text } from 'quantumic-design';
import { Endpoints } from '@octokit/types';
import { css } from '@emotion/css';

import Button from 'components/Button';
import colors from 'colors';

type Repository = Endpoints['GET /search/repositories']['response']['data']['items'][0];

interface SearchedItemProps {
  repository: Repository;
  isEnrolled?: boolean;
  enrolledRepositories: Repository[];
  updateEnrolledRepositories: (repositories: Repository[]) => void;
}

function SearchedItem({ repository, isEnrolled, enrolledRepositories, updateEnrolledRepositories }: SearchedItemProps) {
  const { full_name, stargazers_count, language, updated_at, description, html_url, id } = repository;

  const handleEnrollRepository: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (enrolledRepositories.length === 4) {
      alert('등록할 수 있는 Repository의 최대 개수는 4개입니다.');
      return;
    }

    const newEnrolledRepositories = [...enrolledRepositories, repository];
    updateEnrolledRepositories(newEnrolledRepositories);
  };

  const handleDeleteRepository: React.MouseEventHandler<HTMLButtonElement> = () => {
    const newEnrolledRepositories = enrolledRepositories.filter((repo) => repo.id !== id);
    updateEnrolledRepositories(newEnrolledRepositories);
  };

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
          <Text
            size={13}
            className={css`
              max-width: 800px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            `}
          >
            {description}
          </Text>
          <Stack
            gap={10}
            className={css`
              font-size: 13px;
              color: ${colors.gray800};
            `}
          >
            <Text>☆ {stargazers_count}</Text>
            <Text>{language}</Text>
            <Text>Updated on {getFormattedDate(updated_at)}</Text>
          </Stack>
        </Stack>
        <Button
          type="button"
          onClick={isEnrolled ? handleDeleteRepository : handleEnrollRepository}
          className={css`
            width: 60px;
            background-color: ${isEnrolled ? colors.red600 : colors.blue600};
            border-color: ${isEnrolled ? colors.red600 : colors.blue600};
          `}
        >
          {isEnrolled ? '삭제' : '등록'}
        </Button>
      </Flex>
    </li>
  );
}

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function getFormattedDate(date: string) {
  const d = new Date(date);

  return `${DAYS_OF_WEEK[d.getDay()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export default SearchedItem;
