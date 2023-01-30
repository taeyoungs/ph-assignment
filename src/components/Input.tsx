import { cx, css } from '@emotion/css';
import { CombineElementProps } from 'quantumic-design';

import colors from 'colors';

type InputProps = CombineElementProps<'input'>;

function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cx(
        css`
          padding: 0px 16px;
          background: ${colors.white};
          border: 1px solid ${colors.gray300};
          border-radius: 6px;
          color: ${colors.black};
          height: 40px;
          outline: none;
          box-sizing: border-box;
          &:focus {
            border-color: ${colors.blue500};
          }
          &::placeholder {
            color: ${colors.gray600};
          }
        `,
        className
      )}
    />
  );
}

export default Input;
