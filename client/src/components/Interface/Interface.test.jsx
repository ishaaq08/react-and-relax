import React from 'react';
import { render } from '@testing-library/react';
import { Button1 } from '.';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

test('Button1 displays the provided text', () => {
  const buttonText = 'test'; 
  const { getByText } = render(
    <div>
      <Button1 text={buttonText} />
    </div>
  );

  const button = getByText(buttonText);
  expect(button).toBeInTheDocument();
});

