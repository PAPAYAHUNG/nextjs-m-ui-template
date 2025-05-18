import { Box, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Chip, Tabs, Tab } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

const mockApps = [
  { name: 'Microsoft office 365', status: 'Free', downloads: '9.91k', size: '9.68 Mb', stars: '9.91k' },
  { name: 'Opera', status: 'Free', downloads: '1.95k', size: '1.9 Mb', stars: '1.95k' },
  { name: 'Adobe acrobat reader DC', status: '$68.71', downloads: '9.12k', size: '8.91 Mb', stars: '9.12k' },
  { name: 'Joplin', status: 'Free', downloads: '6.98k', size: '6.82 Mb', stars: '6.98k' },
  { name: 'Topaz photo AI', status: '$52.17', downloads: '8.49k', size: '8.29 Mb', stars: '8.49k' },
];

export default function RelatedApps() {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Related applications</Typography>
      <Tabs value={0} sx={{ mb: 1 }}>
        <Tab label="Top 7 days" />
        <Tab label="Top 30 days" />
        <Tab label="All times" />
      </Tabs>
      <List>
        {mockApps.map((app) => (
          <ListItem key={app.name} sx={{ px: 0 }}>
            <ListItemAvatar>
              <Avatar>
                <AppsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={app.name}
              secondary={
                <>
                  <span style={{ marginRight: 8 }}>⬇️ {app.downloads}</span>
                  <span style={{ marginRight: 8 }}>💾 {app.size}</span>
                  <span>⭐ {app.stars}</span>
                </>
              }
            />
            <Chip label={app.status} color={app.status === 'Free' ? 'default' : 'success'} size="small" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
} 