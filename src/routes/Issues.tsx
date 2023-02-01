import { Suspense, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Stack } from 'quantumic-design';
import { Endpoints } from '@octokit/types';
import { css } from '@emotion/css';

import IssueList from 'components/Issues/IssueList';
import IssueSkeleton from 'components/Issues/IssueSkeleton';
import Tab from 'components/Issues/Tab';

import { usePersistedState } from 'hooks/usePersistedState';
import { LOCAL_STORAGE_KEY } from 'constant';
import colors from 'colors';

type Repositories = Endpoints['GET /search/repositories']['response']['data']['items'];
type Repository = Endpoints['GET /search/repositories']['response']['data']['items'][0];

function Issues() {
  const [enrolledRepositories] = usePersistedState<Repositories>([], LOCAL_STORAGE_KEY.REPOSITORIES);
  const [selectedRepository, setSelectedRepository] = useState(enrolledRepositories[0] ?? null);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSelectedRepository = (repo: Repository) => {
    setSelectedRepository(repo);

    searchParams.set('p', '1');
    setSearchParams(searchParams);
  };

  if (!selectedRepository) {
    return (
      <section
        className={css`
          max-width: 1000px;
          margin: 0 auto;
        `}
      >
        <h1
          className={css`
            margin: 24px 0 12px;
            color: ${colors.blue800};
            font-size: 18px;
            font-weight: 500;
          `}
        >
          Issues
        </h1>
        <section
          className={css`
            padding: 24px;
            background-color: ${colors.white};
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.03);
            border-radius: 8px;
            margin: 24px 0;
          `}
        >
          <h2
            className={css`
              font-size: 15px;
              font-weight: 500;
              color: ${colors.blue600};
              margin: 0 0 8px;
            `}
          >
            등록된 Repository가 없습니다.
          </h2>
          <p
            className={css`
              font-size: 13px;
              color: ${colors.gray800};
            `}
          >
            Repository를 검색하여 관심있는 Repository를 등록해보세요!
          </p>
        </section>
      </section>
    );
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
            key={repo.id}
            repository={repo}
            selectedRepository={selectedRepository}
            updateSelectedRepository={updateSelectedRepository}
          />
        ))}
      </Stack>
      <Suspense fallback={<IssueSkeleton />}>
        <IssueList repository={selectedRepository} />
      </Suspense>
    </section>
  );
}

export default Issues;
