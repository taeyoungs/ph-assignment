import { css } from '@emotion/css';
import { NavLink } from 'react-router-dom';
import { Stack } from 'quantumic-design';

import colors from 'colors';

function Header() {
  return (
    <header
      className={css`
        background-color: ${colors.white};
        height: 56px;
      `}
    >
      <nav
        className={css`
          height: 100%;
          max-width: 1000px;
          margin: 0 auto;
        `}
      >
        <Stack
          gap={16}
          align="center"
          className={css`
            height: 100%;
          `}
        >
          <NavLink
            to="/"
            className={({ isActive }) => css`
              font-size: 15px;
              font-weight: ${isActive ? 700 : 400};
              color: ${isActive ? colors.black : colors.gray700};
            `}
          >
            검색
          </NavLink>
          <NavLink
            to="/repositories"
            className={({ isActive }) => css`
              font-size: 15px;
              font-weight: ${isActive ? 700 : 400};
              color: ${isActive ? colors.black : colors.gray700};
            `}
          >
            저장한 Repository
          </NavLink>
        </Stack>
      </nav>
    </header>
  );
}

export default Header;
