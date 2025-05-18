import { Box, Typography } from '@mui/material';

interface PageTemplateProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
} 