import React from 'react';
import { render, screen } from '@testing-library/react';

import Time from '../Time';

describe('Time', () => {
  test('renders Time component', () => {
    render(<Time />);

    const time = screen.getAllByText(/(AM|PM)/);

    expect(time.length).toBe(13);
  });
});
