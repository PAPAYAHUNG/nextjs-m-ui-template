import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Paper } from '@mui/material';

const mockInvoices = [
  { id: 'INV-1990', category: 'Android', price: '$83.74', status: 'Paid' },
  { id: 'INV-1991', category: 'Mac', price: '$97.14', status: 'Out of date' },
  { id: 'INV-1992', category: 'Windows', price: '$68.71', status: 'Progress' },
  { id: 'INV-1993', category: 'Android', price: '$85.21', status: 'Paid' },
  { id: 'INV-1994', category: 'Mac', price: '$52.17', status: 'Paid' },
];

const statusColor: Record<string, 'success' | 'error' | 'warning'> = {
  'Paid': 'success',
  'Out of date': 'error',
  'Progress': 'warning',
};

export default function InvoiceTable() {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>New invoice</Typography>
      <TableContainer component={Paper} sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invoice ID</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockInvoices.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <Chip label={row.status} color={statusColor[row.status]} size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ textAlign: 'right', mt: 1 }}>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>View all &rarr;</Typography>
      </Box>
    </Box>
  );
} 