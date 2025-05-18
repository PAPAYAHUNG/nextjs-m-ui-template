import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';

const newsItems = [
  {
    category: 'Marketing',
    timeAgo: '2d',
    title: 'New Features: Enhanced Dashboard Analytics Released',
    author: 'Jane Cooper',
    image: '/news-1.jpg',
    avatar: '/avatar-1.jpg'
  },
  {
    category: 'Community',
    timeAgo: '3d',
    title: 'User Spotlight: How Company X Achieved 150% Growth',
    author: 'Wade Warren',
    image: '/news-2.jpg',
    avatar: '/avatar-2.jpg'
  },
  {
    category: 'Development',
    timeAgo: '5d',
    title: 'Product Update: Mobile App Version 2.4.0 Available',
    author: 'Esther Howard',
    image: '/news-3.jpg',
    avatar: '/avatar-3.jpg'
  }
];

export default function NewsCard() {
  return (
    <Card sx={{ background: '#23283B', borderRadius: 3, boxShadow: 'none', minHeight: 240, width: '100%' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
          Latest News
        </Typography>
        {newsItems.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', gap: 2, py: 1.5, borderBottom: index < newsItems.length - 1 ? '1px solid #2F3444' : 'none' }}>
            <Box sx={{ width: 60, height: 60, borderRadius: 1, overflow: 'hidden', flexShrink: 0 }}>
              <Box component="img" src={item.image} alt={`News ${index + 1}`} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="caption" sx={{ color: '#B0B8C1' }}>
                {item.category} • {item.timeAgo} ago
              </Typography>
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500, my: 0.5, lineHeight: 1.4 }}>
                {item.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ width: 20, height: 20 }} src={item.avatar} />
                <Typography variant="caption" sx={{ color: '#B0B8C1' }}>
                  {item.author}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
} 