import { useState } from 'react';
import { Stack, Text } from 'quantumic-design';
import { Endpoints } from '@octokit/types';
import { css } from '@emotion/css';

import Tab from 'components/Issues/Tab';

import { usePersistedState } from 'hooks/usePersistedState';
import { LOCAL_STORAGE_KEY } from 'constant';
import colors from 'colors';

type Repositories = Endpoints['GET /search/repositories']['response']['data']['items'];
type Repository = Endpoints['GET /search/repositories']['response']['data']['items'][0];

function Issues() {
  const [enrolledRepositories] = usePersistedState<Repositories>([], LOCAL_STORAGE_KEY.REPOSITORIES);
  const [selectedRepository, setSelectedRepository] = useState(enrolledRepositories[0] ?? null);

  const updateSelectedRepository = (repo: Repository) => {
    setSelectedRepository(repo);
  };

  if (!selectedRepository) {
    return null;
  }

  return (
    <section
      className={css`
        max-width: 1000px;
        margin: 0 auto;
      `}
    >
      <h1
        className={css`
          margin: 24px 0;
          color: ${colors.blue800};
          font-size: 18px;
          font-weight: 500;
        `}
      >
        Issues
      </h1>
      <Stack as="ul" gap={25}>
        {enrolledRepositories.map((repo) => (
          <Tab
            repository={repo}
            selectedRepository={selectedRepository}
            updateSelectedRepository={updateSelectedRepository}
          />
        ))}
      </Stack>
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
        <ul>
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
                href="Apple"
                target="_blank"
                rel="noreferrer"
                className={css`
                  :hover {
                    text-decoration: underline;
                  }
                `}
              >
                Title
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
                Body
              </Text>
              <Stack
                gap={10}
                className={css`
                  font-size: 13px;
                  color: ${colors.gray800};
                `}
              >
                <Text>Repository</Text>
                <Text>Avatar and Name</Text>
                <Text>Updated on -</Text>
              </Stack>
            </Stack>
          </li>
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
                href="Apple"
                target="_blank"
                rel="noreferrer"
                className={css`
                  :hover {
                    text-decoration: underline;
                  }
                `}
              >
                Title
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
                Body
              </Text>
              <Stack
                gap={10}
                className={css`
                  font-size: 13px;
                  color: ${colors.gray800};
                `}
              >
                <Text>Repository</Text>
                <Text>Avatar and Name</Text>
                <Text>Updated on -</Text>
              </Stack>
            </Stack>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Issues;
