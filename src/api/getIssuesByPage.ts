import { Endpoints } from '@octokit/types';
import { QueryFunctionContext } from '@tanstack/react-query';

import { issueKeys } from 'lib/react-query/factory';
import { octokit } from 'api';

type SearchIssuesResponseData = Endpoints['GET /search/issues']['response']['data'];

const getIssuesByPage = async ({ queryKey }: QueryFunctionContext<ReturnType<typeof issueKeys['allByPage']>>) => {
  const [{ repo, page }] = queryKey;

  const queryString = 'q=' + encodeURIComponent(`repo:${repo} is:issue state:open`);
  const response = await octokit.request(`GET /search/issues?${queryString}&per_page=10&page=${page}`);

  return response.data as SearchIssuesResponseData;
};

export default getIssuesByPage;
