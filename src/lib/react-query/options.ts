import getIssuesByPage from 'api/getIssuesByPage';
import { issueKeys } from './factory';

const issuesByPageQueryOption = (repo: string, page: string) => ({
  queryKey: issueKeys.allByPage(repo, page),
  queryFn: getIssuesByPage,
});

export { issuesByPageQueryOption };
