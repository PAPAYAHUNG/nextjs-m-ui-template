import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const mockCountries = [
  { flag: '🇩🇪', name: 'Germany', android: '9.91k', windows: '1.95k' },
  { flag: '🇬🇧', name: 'England', android: '1.95k', windows: '9.12k' },
  { flag: '🇫🇷', name: 'France', android: '9.12k', windows: '6.98k' },
  { flag: '🇰🇷', name: 'Korean', android: '6.98k', windows: '8.49k' },
  { flag: '🇺🇸', name: 'USA', android: '8.49k', windows: '2.03k' },
];

export default function TopCountries() {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Top installed countries</Typography>
      <TableContainer component={Paper} sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Table size="small">
          <TableBody>
            {mockCountries.map((row) => (
              <TableRow key={row.name}>
                <TableCell width={40}><span style={{ fontSize: 24 }}>{row.flag}</span></TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>⬇️ {row.android}</TableCell>
                <TableCell>💻 {row.windows}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
} 