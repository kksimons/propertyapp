'use client'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type BookingData = {
  date: string;
  count: number;
};

type ChartPropsType = {
  data: BookingData[];
};

const Chart = ({ data }: ChartPropsType) => {
  // Process data to group by month
  const monthlyData = data.reduce((acc, booking) => {
    const month = booking.date; // Use the pre-formatted date string
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += booking.count;
    return acc;
  }, {} as Record<string, number>);

  const chartData = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        label: 'Monthly Bookings',
        data: Object.values(monthlyData),
        backgroundColor: '#F97215',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Bookings',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
        ticks: {
          maxTicksLimit: 6,
        },
        offset: true, // added padding so it didn't look weird
      },
      y: {
        title: {
          display: true,
          text: 'Bookings',
        },
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 3, // Set to 3 so doesn't look weird with only one month of data
        ticks: {
          stepSize: 1, // can't have partial bookings so let's only display integers
          callback: function(tickValue: string | number) {
            const value = Number(tickValue);
            if (Number.isInteger(value)) {
              return value;
            }
            return null;
          },
        },
      },
    },
  };

  return (
    <Card className="mt-24">
      <CardHeader>
        <CardTitle className="text-4xl font-semibold text-center">Monthly Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-96">
          <Bar data={chartData} options={options} />
        </div>
      </CardContent>
    </Card>
  )
}

export default Chart