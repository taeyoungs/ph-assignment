import { Text } from 'quantumic-design';
import { Endpoints } from '@octokit/types';
import { css } from '@emotion/css';

import colors from 'colors';

type Repository = Endpoints['GET /search/repositories']['response']['data']['items'][0];

interface TabProps {
  repository: Repository;
  updateSelectedRepository: (repo: Repository) => void;
  selectedRepository: Repository;
}

function Tab({ repository, updateSelectedRepository, selectedRepository }: TabProps) {
  const { full_name: fullName } = repository;
  const { full_name: selectedRepositoryFullName } = selectedRepository;
  const isSelected = fullName === selectedRepositoryFullName;

  const handleTab: React.MouseEventHandler<HTMLLIElement> = () => {
    updateSelectedRepository(repository);
  };

  return (
    <li
      onClick={handleTab}
      className={css`
        background-color: ${isSelected ? colors.blue600 : colors.white};
        width: 200px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.03);
        padding: 10px;
        text-align: center;
        cursor: pointer;
      `}
    >
      <Text size={14} color={isSelected ? colors.white : colors.black} weight={isSelected ? 500 : 400}>
        {fullName}
      </Text>
    </li>
  );
}

export default Tab;
