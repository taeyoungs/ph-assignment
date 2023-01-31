import { useState } from 'react';
import { Flex, Stack, Text } from 'quantumic-design';
import { Endpoints } from '@octokit/types';
import { css } from '@emotion/css';

import Button from 'components/Button';
import { LOCAL_STORAGE_KEY } from 'constant';
import colors from 'colors';

type Repository = Endpoints['GET /search/repositories']['response']['data']['items'][0];

interface SearchedItemProps {
  repository: Repository;
  isEnrolled?: boolean;
}

function SearchedItem({ repository, isEnrolled: initialIsEnrolled = false }: SearchedItemProps) {
  const { full_name, stargazers_count, language, updated_at, description, html_url, id } = repository;
  const [isEnrolled, setIsEnrolled] = useState(initialIsEnrolled);

  const handleEnrollRepository: React.MouseEventHandler<HTMLButtonElement> = () => {
    const enrolledRepositories = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY.REPOSITORIES) ?? '[]'
    ) as Repository[];

    if (enrolledRepositories.length === 4) {
      alert('등록할 수 있는 레포지토리의 최대 개수는 4개입니다.');
      return;
    }

    setIsEnrolled(true);
    const newEnrolledRepositories = [...enrolledRepositories, repository];
    localStorage.setItem(LOCAL_STORAGE_KEY.REPOSITORIES, JSON.stringify(newEnrolledRepositories));
  };

  const handleDeleteRepository: React.MouseEventHandler<HTMLButtonElement> = () => {
    const enrolledRepositories = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY.REPOSITORIES) ?? '[]'
    ) as Repository[];

    setIsEnrolled(false);
    const newEnrolledRepositories = enrolledRepositories.filter((repo) => repo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY.REPOSITORIES, JSON.stringify(newEnrolledRepositories));
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
            <Text>Updated on {updated_at}</Text>
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

export default SearchedItem;
