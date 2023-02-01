const issueKeys = {
  base: [{ scope: 'issue' }] as const,
  allByPage: (repo: string, page: string) => [{ ...issueKeys.base[0], entity: 'allByPage', repo, page }] as const,
};

export { issueKeys };
