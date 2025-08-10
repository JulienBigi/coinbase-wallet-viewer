import { render, screen } from '@testing-library/react';
import PieChart from './PieChart';
import type { Accounts } from '../../types/account.types';

jest.mock('react-chartjs-2', () => ({
  Pie: (props: any) => {
    return <div data-testid="mock-pie-chart">{JSON.stringify(props.data)}</div>;
  }
}));

describe('PieChart', () => {
  const mockWallet: Accounts = {
    data: [
      {
        id: '1',
        name: 'Bitcoin Wallet',
        primary: true,
        type: 'wallet',
        balance: { amount: '1.5', currency: 'BTC' },
        created_at: new Date(),
        updated_at: new Date(),
        resource: 'wallet',
        resource_path: '/wallet/1',
        currency: {
          asset_id: 'btc',
          code: 'BTC',
          color: '#f7931a',
          exponent: 8,
          name: 'Bitcoin',
          slug: 'bitcoin',
          type: 'crypto',
          rewards: null
        },
        allow_deposits: true,
        allow_withdrawals: true,
        portfolio_id: 'p1'
      },
      {
        id: '2',
        name: 'Ethereum Wallet',
        primary: false,
        type: 'wallet',
        balance: { amount: '10', currency: 'ETH' },
        created_at: new Date(),
        updated_at: new Date(),
        resource: 'wallet',
        resource_path: '/wallet/2',
        currency: {
          asset_id: 'eth',
          code: 'ETH',
          color: '#3c3c3d',
          exponent: 18,
          name: 'Ethereum',
          slug: 'ethereum',
          type: 'crypto',
          rewards: null
        },
        allow_deposits: true,
        allow_withdrawals: true,
        portfolio_id: 'p1'
      }
    ],
    pagination: {
      ending_before: null,
      limit: 25,
      next_starting_after: '',
      next_uri: '',
      order: 'asc',
      previous_ending_before: null,
      previous_uri: null,
      starting_after: null
    }
  };

  it('renders nothing when wallet is empty', () => {
    const { container } = render(<PieChart wallet={{ data: [], pagination: mockWallet.pagination }} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders Pie chart with correct data', () => {
    render(<PieChart wallet={mockWallet} />);
    const pieElement = screen.getByTestId('mock-pie-chart');
    const chartData = JSON.parse(pieElement.textContent || '{}');

    expect(chartData.labels).toEqual(['BTC', 'ETH']);
    expect(chartData.datasets[0].data).toEqual([1.5, 10]);
    expect(chartData.datasets[0].backgroundColor).toEqual(['#f7931a', '#3c3c3d']);
  });
});
