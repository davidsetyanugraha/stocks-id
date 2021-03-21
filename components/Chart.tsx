import React from 'react'
import { Line } from 'react-chartjs-2';
import { ChartData } from '../interfaces';

interface IProps {
  chartData: ChartData
}

const Chart = ( { chartData }: IProps ) => (
    <div>
      <Line
        data={chartData}
        width={400}
        height={400}
      />
    </div>
)

export default Chart