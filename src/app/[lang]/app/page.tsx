'use client';

import { Box, Grid } from '@mui/material';
import StatCard from '@/components/dashboard/StatCard';
import WelcomeCard from '@/components/dashboard/WelcomeCard';
import FeaturedAppCard from '@/components/dashboard/FeaturedAppCard';
import DonutChartCard from '@/components/dashboard/DonutChartCard';
import BarChartCard from '@/components/dashboard/BarChartCard';
import NewsCard from '@/components/dashboard/NewsCard';
import TrafficSourcesCard from '@/components/dashboard/TrafficSourcesCard';
import InvoiceTable from '@/components/dashboard/InvoiceTable';
import RelatedApps from '@/components/dashboard/RelatedApps';
import TopCountries from '@/components/dashboard/TopCountries';
import TopAuthors from '@/components/dashboard/TopAuthors';
import PeopleIcon from '@mui/icons-material/People';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function DashboardPage() {
  return (
    <Box sx={{ p: 0 }}>
      <Grid container spacing={3}>
        {/* Welcome Card */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 8' } }}>
          <WelcomeCard />
        </Grid>
        {/* Featured App Card */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <FeaturedAppCard />
        </Grid>
        {/* Stat Cards */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <StatCard
            icon={<PeopleIcon sx={{ color: '#00AB55', fontSize: 32 }} />}
            value="18,765"
            label="Total active users"
            trend="+2.6% last 7 days"
            trendColor="success"
          />
        </Grid>
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <StatCard
            icon={<CheckCircleIcon sx={{ color: '#2065D1', fontSize: 32 }} />}
            value="4,876"
            label="Total installed"
            trend="+0.2% last 7 days"
            trendColor="success"
          />
        </Grid>
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <StatCard
            icon={<DownloadIcon sx={{ color: '#FF5630', fontSize: 32 }} />}
            value="678"
            label="Total downloads"
            trend="-0.1% last 7 days"
            trendColor="error"
          />
        </Grid>
        {/* Donut Chart Card */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <DonutChartCard />
        </Grid>
        {/* Bar Chart Card */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 8' } }}>
          <BarChartCard />
        </Grid>
        {/* Invoice Table */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 8' } }}>
          <InvoiceTable />
        </Grid>
        {/* Related Applications */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <RelatedApps />
        </Grid>
        {/* Top Countries */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <TopCountries />
        </Grid>
        {/* Top Authors */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <TopAuthors />
        </Grid>
        {/* Conversion and Applications Stats (Placeholder) */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Box
            sx={{ bgcolor: '#1de9b6', borderRadius: 2, p: 3, color: '#fff', textAlign: 'center' }}
          >
            <Box sx={{ fontSize: 32, fontWeight: 700 }}>48%</Box>
            <Box>38,566 Conversion</Box>
          </Box>
        </Grid>
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Box
            sx={{ bgcolor: '#2979ff', borderRadius: 2, p: 3, color: '#fff', textAlign: 'center' }}
          >
            <Box sx={{ fontSize: 32, fontWeight: 700 }}>75%</Box>
            <Box>55,566 Applications</Box>
          </Box>
        </Grid>
        {/* News Card */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <NewsCard />
        </Grid>
        {/* Traffic Sources Card */}
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <TrafficSourcesCard />
        </Grid>
      </Grid>
    </Box>
  );
}
