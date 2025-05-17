'use client';

import { Grid as MuiGrid, Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import {
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  AttachMoney as AttachMoneyIcon,
} from '@mui/icons-material';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          sx={{
            backgroundColor: `${color}15`,
            borderRadius: 1,
            p: 1,
            mr: 2,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" component="div">
        {value}
      </Typography>
    </CardContent>
  </Card>
);

export default function AnalyticsPage() {
  const stats = [
    {
      title: 'Total Sales',
      value: '$2,845,000',
      icon: <AttachMoneyIcon sx={{ color: '#2065D1' }} />,
      color: '#2065D1',
    },
    {
      title: 'Total Users',
      value: '1,234',
      icon: <PeopleIcon sx={{ color: '#00AB55' }} />,
      color: '#00AB55',
    },
    {
      title: 'Total Orders',
      value: '456',
      icon: <ShoppingCartIcon sx={{ color: '#FFC107' }} />,
      color: '#FFC107',
    },
    {
      title: 'Growth',
      value: '+23%',
      icon: <TrendingUpIcon sx={{ color: '#FF4842' }} />,
      color: '#FF4842',
    },
  ];

  const chartData = {
    xAxis: [
      { 
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        scaleType: 'band' as const,
      },
    ],
    series: [
      {
        data: [4000, 3000, 2000, 2780, 1890, 2390],
        area: true,
      },
    ],
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Analytics Dashboard
      </Typography>

      <MuiGrid container spacing={3}>
        {stats.map((stat) => (
          <MuiGrid item xs={12} sm={6} md={3} key={stat.title}>
            <StatCard {...stat} />
          </MuiGrid>
        ))}

        <MuiGrid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Sales Overview
              </Typography>
              <Box sx={{ height: 400 }}>
                <LineChart
                  {...chartData}
                  height={350}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                />
              </Box>
            </CardContent>
          </Card>
        </MuiGrid>
      </MuiGrid>
    </Box>
  );
} 