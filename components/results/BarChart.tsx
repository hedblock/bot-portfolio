import React from 'react'

import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

import theme from '../../styles/theme';

interface Props {
  data: number[];
  labels: string[];
}

const BarChart : React.FC<Props> = ({ data, labels }) => {

  return (
    <Bar
      data={{
        labels,
        datasets: [{
            label: 'Allocation',
            data,
            backgroundColor: theme.palette.primary.main,
        }]
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => `Allocation: ${context.parsed.y}%`
            }
          }
        },
        scales: {
          y: {
            ticks: {
              color: theme.palette.text.secondary,
              callback: (value) => `${value}%`
            }
          },
          x: {
            ticks: {
              color: theme.palette.text.secondary,
            }
          }
        }
      }}
    />
  )
}

export default BarChart