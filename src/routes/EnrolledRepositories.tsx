import { Endpoints } from '@octokit/types';
import { css } from '@emotion/css';

import { SearchedItem } from 'components/Search';

import { usePersistedState } from 'hooks/usePersistedState';
import { LOCAL_STORAGE_KEY } from 'constant';
import colors from 'colors';

type Repositories = Endpoints['GET /search/repositories']['response']['data']['items'];

function EnrolledRepositories() {
  const [enrolledRepositories, setEnrolledRepositories] = usePersistedState<Repositories>(
    [],
    LOCAL_STORAGE_KEY.REPOSITORIES
  );

  const updateEnrolledRepositories = (repos: Repositories) => {
    setEnrolledRepositories(repos);
  };

  return (
    <section
      className={css`
        max-width: 1000px;
        margin: 0 auto;
      `}
    >
      <section
        className={css`
          padding: 24px;
          background-color: ${colors.white};
          box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.03);
          border-radius: 8px;
          margin: 24px 0;
        `}
      >
        <h1
          className={css`
            margin: 12px 0 24px;
            font-size: 18px;
            font-weight: 500;
          `}
        >
          Repository 목록
        </h1>
        {enrolledRepositories.length > 0 ? (
          <ul>
            {enrolledRepositories.map((repository) => (
              <SearchedItem
                key={repository.id}
                repository={repository}
                isEnrolled
                enrolledRepositories={enrolledRepositories}
                updateEnrolledRepositories={updateEnrolledRepositories}
              />
            ))}
          </ul>
        ) : (
          <section>
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
        )}
      </section>
    </section>
  );
}

export default EnrolledRepositories;
