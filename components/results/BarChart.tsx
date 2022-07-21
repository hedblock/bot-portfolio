import React from 'react'

import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

import { useColorModeValue, useTheme } from "@chakra-ui/react";

interface Props {
  data: number[];
  labels: string[];
}

const BarChart : React.FC<Props> = ({ data, labels }) => {

  const { colors } = useTheme();

  const barColor = useColorModeValue(colors.brand[600], colors.brand[300]);
  const gridLineColor = useColorModeValue(colors.gray[200], colors.gray[700]);
  const tickColor = useColorModeValue(colors.gray[700], colors.gray[200]);

  return (
    <Bar
      data={{
        labels,
        datasets: [{
            label: 'Allocation',
            data,
            backgroundColor: barColor,
            borderRadius: 8,
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
            grid: {
              color: gridLineColor,
            },
            ticks: {
              color: tickColor,
              callback: (value) => `${value}%`,
            }
          },
          x: {
            grid: {
              color: gridLineColor,
            },
            ticks: {
              color: tickColor,
            }
          }
        }
      }}
    />
  )
}

export default BarChart