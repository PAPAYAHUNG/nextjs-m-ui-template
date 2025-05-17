import { Card, CardContent, Box, Typography, Chip } from '@mui/material';
import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  trend?: string;
  trendColor?: 'success' | 'error' | 'warning' | 'info';
  chart?: ReactNode;
}

export default function StatCard({ icon, value, label, trend, trendColor = 'success', chart }: StatCardProps) {
  return (
    <Card sx={{ background: '#23283B', borderRadius: 3, boxShadow: 'none', minHeight: 120 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box sx={{ mr: 2 }}>{icon}</Box>
          <Box>
            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700 }}>{value}</Typography>
            <Typography variant="body2" sx={{ color: '#B0B8C1' }}>{label}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {trend && (
            <Chip
              label={trend}
              size="small"
              color={trendColor}
              sx={{ fontWeight: 700, fontSize: 12, height: 22 }}
            />
          )}
          {chart && <Box sx={{ flex: 1 }}>{chart}</Box>}
        </Box>
      </CardContent>
    </Card>
  );
} 