import { Fragment } from 'react';
import { useAsyncValue } from 'react-router-dom';
import { Endpoints } from '@octokit/types';
import { css } from '@emotion/css';

import Pagination from 'components/Pagination';
import SearchedItem from './SearchedItem';

import { usePersistedState } from 'hooks/usePersistedState';
import { LOCAL_STORAGE_KEY } from 'constant';
import colors from 'colors';

type SearchRepositoriesResponse = Endpoints['GET /search/repositories']['response'];
type Repositories = SearchRepositoriesResponse['data']['items'];

function SearchedList() {
  const {
    data: { items: repositories, total_count },
  } = useAsyncValue() as SearchRepositoriesResponse;
  const [enrolledRepositories, setEnrolledRepositories] = usePersistedState<Repositories>(
    [],
    LOCAL_STORAGE_KEY.REPOSITORIES
  );
  const enrolledRepositoryIds = enrolledRepositories.map((repo) => repo.id);

  const updateEnrolledRepositories = (repos: Repositories) => {
    setEnrolledRepositories(repos);
  };

  return (
    <Fragment>
      <section
        className={css`
          padding: 24px;
          background-color: ${colors.white};
          box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.03);
          border-radius: 8px;
          margin: 0 0 24px;
        `}
      >
        <h2
          className={css`
            font-weight: 500;
            margin: 0 0 24px;
            font-size: 18px;
          `}
        >
          검색 결과: {total_count ?? 0}
        </h2>
        <ul>
          {repositories.map((repository) => (
            <SearchedItem
              key={repository.id}
              repository={repository}
              enrolledRepositories={enrolledRepositories}
              updateEnrolledRepositories={updateEnrolledRepositories}
              isEnrolled={enrolledRepositoryIds.includes(repository.id)}
            />
          ))}
        </ul>
      </section>
      <Pagination totalCount={total_count} />
    </Fragment>
  );
}

export default SearchedList;
