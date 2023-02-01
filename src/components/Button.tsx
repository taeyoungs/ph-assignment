import { CSSProperties, ReactNode } from 'react';
import { css, cx } from '@emotion/css';
import { CombineElementProps, Flex, Stack, Text } from 'quantumic-design';

import Spinner from './Spinner';
import colors from 'colors';

type ButtonProps = CombineElementProps<
  'button',
  {
    isLoading?: boolean;
    isDisabled?: boolean;
    prefix?: ReactNode;
    fontSize?: number;
    fontColor?: string;
    justify?: CSSProperties['justifyContent'];
  }
>;

const buttonColors = {
  default: {
    background: colors.blue600,
    border: colors.blue600,
    text: colors.white,
  },
  disabled: {
    background: colors.gray100,
    border: colors.gray100,
    text: colors.gray500,
  },
};

const Button = ({
  prefix,
  className,
  children,
  isDisabled = false,
  isLoading = false,
  fontSize = 13,
  justify,
  ...props
}: ButtonProps) => {
  const buttonColor = buttonColors[isDisabled ? 'disabled' : 'default'];
  const defaultJustify = prefix ? 'space-between' : 'center';

  const backgroundColor = buttonColor.background;
  const borderColor = buttonColor.border;
  const fontColor = buttonColor.text;

  const notAllowedClick = isDisabled || isLoading;
  const cursor = notAllowedClick ? 'not-allowed' : 'pointer';
  const opacity = isLoading ? 0.4 : 1;

  const hasPrefix = isLoading === true || prefix != null;

  return (
    <button
      className={cx(
        css`
          border-radius: 4px;
          cursor: ${cursor};
          transition: background-color, color, opacity 0.3s ease-in-out, transform 0.1s ease-in-out;
          opacity: ${opacity};
          background-color: ${backgroundColor};
          height: 40px;
          padding: 0 12px;
          border: 1px solid;
          border-color: ${borderColor};
          &:hover {
            opacity: ${notAllowedClick ? opacity : 0.75};
          }
          &:active {
            transform: scale(${notAllowedClick ? 1 : 0.98});
          }
        `,
        className
      )}
      disabled={isDisabled || isLoading}
      {...props}
    >
      <Stack align="center" gap={8} justify={justify ?? defaultJustify}>
        {hasPrefix ? (
          <Flex
            align="center"
            className={css`
              color: ${fontColor};
              svg {
                color: ${fontColor};
              }
            `}
          >
            {isLoading === true ? <Spinner width={fontSize} color={fontColor} /> : prefix}
          </Flex>
        ) : null}
        <Flex
          align="center"
          className={css`
            flex-wrap: nowrap;
            color: ${fontColor};
            width: 100%;
          `}
        >
          <Text
            className={css`
              width: 100%;
              white-space: nowrap;
            `}
            size={fontSize}
            weight={400}
            color={fontColor}
            lineHeight="20px"
            align="center"
          >
            {children}
          </Text>
        </Flex>
      </Stack>
    </button>
  );
};

export default Button;
