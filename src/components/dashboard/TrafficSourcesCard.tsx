import { Box, Card, CardContent, Typography, Chip } from '@mui/material';

const trafficData = [
  { source: 'Google', visits: '3.9k', growth: '+8.2%', color: '#00AB55' },
  { source: 'Direct', visits: '5.2k', growth: '+3.1%', color: '#2065D1' },
  { source: 'Social', visits: '2.7k', growth: '+5.7%', color: '#FFC107' },
  { source: 'Referral', visits: '1.8k', growth: '+2.2%', color: '#FF5630' },
  { source: 'Email', visits: '990', growth: '+1.2%', color: '#6A82FB' },
];

export default function TrafficSourcesCard() {
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
          Traffic Sources
        </Typography>
        {trafficData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1.5,
              borderBottom: index < trafficData.length - 1 ? '1px solid #2F3444' : 'none',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ width: 8, height: 24, borderRadius: 4, background: item.color }} />
              <Typography variant="body2" sx={{ color: '#fff' }}>
                {item.source}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
                {item.visits}
              </Typography>
              <Chip
                label={item.growth}
                size="small"
                sx={{
                  height: 22,
                  borderRadius: 1,
                  backgroundColor: 'rgba(0, 171, 85, 0.1)',
                  color: '#00AB55',
                  '& .MuiChip-label': { px: 1, py: 0.3, fontSize: 12 },
                }}
              />
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
