import { Box, Card, CardContent, Typography } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const donutData = [
  { name: 'Mac', value: 40000, color: '#00AB55' },
  { name: 'Window', value: 30000, color: '#2065D1' },
  { name: 'iOS', value: 20000, color: '#FF5630' },
  { name: 'Android', value: 18000, color: '#FFC107' },
];

export default function DonutChartCard() {
  return (
    <Card
      sx={{
        background: '#23283B',
        borderRadius: 3,
        boxShadow: 'none',
        minHeight: 240,
        width: '100%',
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
          Current download
        </Typography>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={donutData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
            >
              {donutData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          {donutData.map(entry => (
            <Box key={entry.name} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: entry.color }} />
              <Typography variant="caption" sx={{ color: '#B0B8C1' }}>
                {entry.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="h6" sx={{ color: '#fff', textAlign: 'center', mt: 2 }}>
          Total 188,245
        </Typography>
      </CardContent>
    </Card>
  );
}
