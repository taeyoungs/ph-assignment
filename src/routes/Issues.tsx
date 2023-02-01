import { Stack, Text } from 'quantumic-design';
import { css } from '@emotion/css';

import colors from 'colors';

function Issues() {
  return (
    <section
      className={css`
        max-width: 1000px;
        margin: 0 auto;
      `}
    >
      <h1
        className={css`
          margin: 24px 0;
          color: ${colors.blue800};
          font-size: 18px;
          font-weight: 500;
        `}
      >
        Issues
      </h1>
      <Stack as="ul" gap={25} justify="space-between">
        <li
          className={css`
            background-color: ${colors.white};
            width: 200px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.03);
            padding: 10px;
            text-align: center;
          `}
        >
          <Text size={14}>Apple</Text>
        </li>
        <li
          className={css`
            background-color: ${colors.blue600};
            width: 200px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.03);
            padding: 10px;
            text-align: center;
          `}
        >
          <Text size={14} color={colors.white} weight={500}>
            Selected Apple
          </Text>
        </li>
        <li
          className={css`
            background-color: ${colors.white};
            width: 200px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.03);
            padding: 10px;
            text-align: center;
          `}
        >
          <Text size={14}>Apple</Text>
        </li>
        <li
          className={css`
            background-color: ${colors.white};
            width: 200px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.03);
            padding: 10px;
            text-align: center;
          `}
        >
          <Text size={14}>Apple</Text>
        </li>
      </Stack>
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
        <ul>
          <li
            className={css`
              &:not(:last-child) {
                border-bottom: 1px solid ${colors.gray300};
              }
              padding: 16px 0;
            `}
          >
            <Stack gap={10} direction="column">
              <a
                href="Apple"
                target="_blank"
                rel="noreferrer"
                className={css`
                  :hover {
                    text-decoration: underline;
                  }
                `}
              >
                Title
              </a>
              <Text
                size={13}
                className={css`
                  max-width: 800px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                `}
              >
                Body
              </Text>
              <Stack
                gap={10}
                className={css`
                  font-size: 13px;
                  color: ${colors.gray800};
                `}
              >
                <Text>Repository</Text>
                <Text>Avatar and Name</Text>
                <Text>Updated on -</Text>
              </Stack>
            </Stack>
          </li>
          <li
            className={css`
              &:not(:last-child) {
                border-bottom: 1px solid ${colors.gray300};
              }
              padding: 16px 0;
            `}
          >
            <Stack gap={10} direction="column">
              <a
                href="Apple"
                target="_blank"
                rel="noreferrer"
                className={css`
                  :hover {
                    text-decoration: underline;
                  }
                `}
              >
                Title
              </a>
              <Text
                size={13}
                className={css`
                  max-width: 800px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                `}
              >
                Body
              </Text>
              <Stack
                gap={10}
                className={css`
                  font-size: 13px;
                  color: ${colors.gray800};
                `}
              >
                <Text>Repository</Text>
                <Text>Avatar and Name</Text>
                <Text>Updated on -</Text>
              </Stack>
            </Stack>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Issues;
