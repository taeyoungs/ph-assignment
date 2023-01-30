import { Flex, Stack, Text } from 'quantumic-design';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

import Button from 'components/Button';
import Input from 'components/Input';

import colors from 'colors';

function Search() {
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
      <div
        className={css`
          padding: 24px;
          background-color: ${colors.white};
          box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.03);
          border-radius: 8px;
          margin: 0 0 24px;
        `}
      >
        <form>
          <Stack gap={10}>
            <Input
              placeholder="원하시는 Repository명을 입력해주세요."
              className={css`
                width: 100%;
              `}
            />
            <Button
              className={css`
                width: 80px;
              `}
            >
              검색
            </Button>
          </Stack>
        </form>
      </div>
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
          검색 결과: 240
        </h2>
        <ul>
          <li
            className={css`
              border-top: 1px solid ${colors.gray300};
              padding: 16px 0;
            `}
          >
            <Flex justify="space-between" align="center">
              <Stack gap={10} direction="column">
                <Link
                  to="#"
                  className={css`
                    :hover {
                      text-decoration: underline;
                    }
                  `}
                >
                  dtrupenn/Tetris
                </Link>
                <Text size={13}>A C implementation of Tetris using Pennsim through LC4</Text>
                <Stack
                  gap={10}
                  className={css`
                    font-size: 13px;
                    color: ${colors.gray800};
                  `}
                >
                  <Text>☆ 320</Text>
                  <Text>TypeScript</Text>
                  <Text>Updated on Jul 26, 2021</Text>
                </Stack>
              </Stack>
              <Button
                className={css`
                  width: 60px;
                `}
              >
                등록
              </Button>
            </Flex>
          </li>
          <li
            className={css`
              border-top: 1px solid ${colors.gray300};
              padding: 16px 0;
            `}
          >
            <Flex justify="space-between" align="center">
              <Stack gap={10} direction="column">
                <Link
                  to="#"
                  className={css`
                    :hover {
                      text-decoration: underline;
                    }
                  `}
                >
                  dtrupenn/Tetris
                </Link>
                <Text size={13}>A C implementation of Tetris using Pennsim through LC4</Text>
                <Stack
                  gap={10}
                  className={css`
                    font-size: 13px;
                    color: ${colors.gray800};
                  `}
                >
                  <Text>☆ 320</Text>
                  <Text>TypeScript</Text>
                  <Text>Updated on Jul 26, 2021</Text>
                </Stack>
              </Stack>
              <Button
                className={css`
                  width: 60px;
                `}
              >
                등록
              </Button>
            </Flex>
          </li>
        </ul>
      </section>
      <Stack gap={16} align="center" justify="center">
        <Button>이전</Button>
        <Stack gap={6}>
          <Link to="#">1</Link>
          <Link to="#">2</Link>
          <Link to="#">3</Link>
        </Stack>
        <Button>다음</Button>
      </Stack>
    </section>
  );
}

export default Search;
