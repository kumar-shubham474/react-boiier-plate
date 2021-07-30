import { screen, render } from '@testing-library/react';
import moment from 'moment';
import React from 'react';

import Date from '../Date';

describe('Date', () => {
  test('renders Date Component', () => {
    render(<Date />);

    let today = moment().format('ddd, MMM DD');

    const date = screen.getByText(today);

    expect(date).toBeInTheDocument();
  });
});
