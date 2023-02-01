import { Octokit } from '@octokit/core';

const BaseOctokit = Octokit.defaults({
  auth: process.env['AUTH_TOKEN'],
});

export const octokit = new BaseOctokit();
