import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { Accounts } from '../../types/account.types';

ChartJS.register(ArcElement, Tooltip, Legend);

type WalletPieChartProps = {
  wallet: Accounts;
};

const PieChart: React.FC<WalletPieChartProps> = ({ wallet }) => {
  if (!wallet?.data?.length) return null;

  const labels = wallet.data.map((acc) => acc.currency.code);
  const data = wallet.data.map((acc) => parseFloat(acc.balance.amount));
  const backgroundColor = wallet.data.map(
    (acc) => acc.currency.color || '#999'
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Balance',
        data,
        backgroundColor,
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;