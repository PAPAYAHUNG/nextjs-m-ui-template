import { Box, Card, CardContent, Typography, Avatar, Chip } from '@mui/material';

export default function WelcomeCard() {
  return (
    <Card sx={{ 
      background: 'linear-gradient(90deg, #23283B 60%, #2065D1 100%)', 
      borderRadius: 3, 
      minHeight: 160, 
      display: 'flex', 
      alignItems: 'center', 
      px: 4, 
      width: '100%' 
    }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
          Welcome back 👋 Jaydon Frankie
        </Typography>
        <Typography variant="body2" sx={{ color: '#B0B8C1', mb: 2 }}>
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything.
        </Typography>
        <Chip label="Go now" color="success" sx={{ fontWeight: 700, fontSize: 14, height: 32 }} clickable />
      </CardContent>
      <Box sx={{ pr: 4 }}>
        <Avatar src="/avatar.png" sx={{ width: 80, height: 80 }} />
      </Box>
    </Card>
  );
} 