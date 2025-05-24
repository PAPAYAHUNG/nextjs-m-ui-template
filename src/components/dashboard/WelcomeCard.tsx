import { Box, Card, CardContent, Typography, Avatar, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function WelcomeCard() {
  const { t } = useTranslation('common');
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
          {t('welcome')} 👋 Jaydon Frankie
        </Typography>
        <Typography variant="body2" sx={{ color: '#B0B8C1', mb: 2 }}>
          {t('welcome_subtitle', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything.')}
        </Typography>
        <Chip label={t('go_now', 'Go now')} color="success" sx={{ fontWeight: 700, fontSize: 14, height: 32 }} clickable />
      </CardContent>
      <Box sx={{ pr: 4 }}>
        <Avatar src="/avatar.png" sx={{ width: 80, height: 80 }} />
      </Box>
    </Card>
  );
} 