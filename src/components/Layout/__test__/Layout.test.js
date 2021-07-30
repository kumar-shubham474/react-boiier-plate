import { screen, render } from '@testing-library/react';
import React from 'react';
import Layout from '../Layout';
import axios from '../../../others/axios';

jest.mock('../../../others/axios');

describe('Layout', () => {
  test('testing number of Event components rendered rendered', async () => {
    const events = [
      {
        title: 'A',
        start: '0945',
        end: '1715',
      },
      {
        title: 'B',
        start: '1000',
        end: '1100',
      },
      {
        title: 'C',
        start: '1030',
        end: '1130',
      },
    ];

    axios.get.mockImplementationOnce(() => {
      Promise.resolve({ data: events });
    });

    render(<Layout />);

    const ev = await screen.findAllByTestId('calendar-event');

    expect(ev).toHaveLength(3);
  });
});
