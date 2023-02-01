import { defer, LoaderFunctionArgs } from 'react-router-dom';

import { octokit } from 'api';

const PER_PAGE = 10;

function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('q');
  const page = url.searchParams.get('p') ?? 1;

  if (!searchTerm) {
    return defer({
      repositories: Promise.resolve({
        data: {
          total_count: 0,
          items: [],
        },
      }),
    });
  }

  return defer({
    repositories: octokit.request(`GET /search/repositories?q=${searchTerm}&per_page=${PER_PAGE}&page=${page}`, {}),
  });
}

export { loader };
