import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@mui/material';

const mockAuthors = [
  { name: 'Jayvion Simon', likes: '9.91k', color: 'success' },
  { name: 'Deja Brady', likes: '9.12k', color: 'info' },
  { name: 'Lucian Obrien', likes: '1.95k', color: 'error' },
];

export default function TopAuthors() {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Top authors
      </Typography>
      <List>
        {mockAuthors.map(author => (
          <ListItem key={author.name}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: `${author.color}.main` }}>{author.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={author.name} secondary={`❤️ ${author.likes}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
