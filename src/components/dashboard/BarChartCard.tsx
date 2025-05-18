import { Box, Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';

const barData = [
  { month: 'Jan', Asia: 20, Europe: 40, Americas: 10 },
  { month: 'Feb', Asia: 30, Europe: 35, Americas: 15 },
  { month: 'Mar', Asia: 40, Europe: 50, Americas: 20 },
  { month: 'Apr', Asia: 50, Europe: 60, Americas: 25 },
  { month: 'May', Asia: 60, Europe: 70, Americas: 30 },
  { month: 'Jun', Asia: 70, Europe: 80, Americas: 35 },
  { month: 'Jul', Asia: 80, Europe: 90, Americas: 40 },
  { month: 'Aug', Asia: 60, Europe: 70, Americas: 30 },
  { month: 'Sep', Asia: 50, Europe: 60, Americas: 25 },
  { month: 'Oct', Asia: 40, Europe: 50, Americas: 20 },
  { month: 'Nov', Asia: 30, Europe: 35, Americas: 15 },
  { month: 'Dec', Asia: 20, Europe: 40, Americas: 10 },
];

export default function BarChartCard() {
  return (
    <Card sx={{ background: '#23283B', borderRadius: 3, boxShadow: 'none', minHeight: 240, width: '100%' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
          Area installed <span style={{ color: '#B0B8C1', fontWeight: 400 }}>(+43% than last year)</span>
        </Typography>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={barData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis dataKey="month" stroke="#B0B8C1" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#B0B8C1" fontSize={12} tickLine={false} axisLine={false} />
            <RechartsTooltip />
            <Legend />
            <Bar dataKey="Asia" stackId="a" fill="#00AB55" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Europe" stackId="a" fill="#2065D1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Americas" stackId="a" fill="#FF5630" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
          <Typography variant="caption" sx={{ color: '#00AB55' }}>Asia 1.23k</Typography>
          <Typography variant="caption" sx={{ color: '#2065D1' }}>Europe 6.79k</Typography>
          <Typography variant="caption" sx={{ color: '#FF5630' }}>Americas 1.01k</Typography>
        </Box>
      </CardContent>
    </Card>
  );
} 