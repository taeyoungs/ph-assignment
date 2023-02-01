import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Endpoints } from '@octokit/types';
import { css } from '@emotion/css';

import Pagination from 'components/Pagination';
import IssueSkeleton from './IssueSkeleton';
import IssueItem from './IssueItem';

import { issuesByPageQueryOption } from 'lib/react-query/options';
import colors from 'colors';

type Repository = Endpoints['GET /search/repositories']['response']['data']['items'][0];

interface IssueListProps {
  repository: Repository;
}

function IssueList({ repository }: IssueListProps) {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useQuery({
    ...issuesByPageQueryOption(repository.full_name, searchParams.get('p') ?? '1'),
    suspense: true,
  });

  if (!data || isLoading) {
    return <IssueSkeleton />;
  }

  if (data.items.length === 0) {
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
        <h2
          className={css`
            font-size: 15px;
            font-weight: 500;
            color: ${colors.blue600};
            margin: 0 0 8px;
          `}
        >
          현재 Repository에 오픈된 Issue가 없습니다.
        </h2>
        <p
          className={css`
            font-size: 13px;
            color: ${colors.gray800};
          `}
        >
          Repository를 변경하여 다른 Repository의 Issue를 확인해보는건 어떨까요?
        </p>
      </section>
    );
  }

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
      <ul
        className={css`
          margin: 0 0 24px;
        `}
      >
        {data.items.map((issue) => (
          <IssueItem key={issue.id} issue={issue} repositoryName={repository.full_name} />
        ))}
      </ul>
      <Pagination totalCount={data.total_count} />
    </section>
  );
}

export default IssueList;
