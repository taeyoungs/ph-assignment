import { Suspense } from 'react';
import { Text } from 'quantumic-design';
import { Await, useLoaderData, useSearchParams } from 'react-router-dom';
import { Endpoints } from '@octokit/types';
import { css } from '@emotion/css';

import { SearchedList, SearchForm, SearchSkeleton } from 'components/Search';

import { loader } from './options';
import colors from 'colors';

interface DefferedData {
  repositories: Endpoints['GET /search/repositories']['response'];
}

function Search() {
  const { repositories } = useLoaderData() as DefferedData;

  const [searchParams] = useSearchParams();
  const currentSearchTerm = searchParams.get('q');

  if (!currentSearchTerm) {
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
          Repository 검색
        </h1>
        <SearchForm />
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
              margin: 0 0 12px;
              font-size: 16px;
            `}
          >
            입력된 검색어가 없습니다.
          </h2>
          <Text size={14} color={colors.gray800}>
            상단의 검색창으로 원하시는 Repository를 검색해보세요!
          </Text>
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
          margin: 24px 0 12px;
          color: ${colors.blue800};
          font-size: 18px;
          font-weight: 500;
        `}
      >
        Repository 검색
      </h1>
      <SearchForm />
      <Suspense fallback={<SearchSkeleton />}>
        <Await resolve={repositories}>
          <SearchedList />
        </Await>
      </Suspense>
    </section>
  );
}

Search.loader = loader;

export default Search;
