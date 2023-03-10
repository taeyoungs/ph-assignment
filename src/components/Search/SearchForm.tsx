import { useState } from 'react';
import { Form, useSearchParams } from 'react-router-dom';
import { Stack } from 'quantumic-design';
import { css } from '@emotion/css';

import Button from 'components/Button';
import Input from 'components/Input';

import useNavigationStatus from 'hooks/useNavigationStatus';
import colors from 'colors';

function SearchForm() {
  const { isLoading } = useNavigationStatus();
  const [searchParams] = useSearchParams();
  const [term, setTerm] = useState(searchParams.get('q') ?? '');

  const handleTerm: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div
      className={css`
        padding: 24px;
        background-color: ${colors.white};
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.03);
        border-radius: 8px;
        margin: 0 0 24px;
      `}
    >
      <Form method="get" action="/">
        <Stack gap={10}>
          <Input
            type="text"
            placeholder="원하시는 Repository명을 입력해주세요."
            name="q"
            value={term}
            onChange={handleTerm}
            className={css`
              width: 100%;
            `}
          />
          <Button
            type="submit"
            isLoading={isLoading}
            className={css`
              width: 80px;
            `}
          >
            검색
          </Button>
        </Stack>
      </Form>
    </div>
  );
}

export default SearchForm;
