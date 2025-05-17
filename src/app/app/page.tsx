'use client';

import { Box, Card, CardContent, Typography, Avatar, Chip, Grid } from '@mui/material';
import StatCard from '@/components/dashboard/StatCard';
import PeopleIcon from '@mui/icons-material/People';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, Legend } from 'recharts';

const donutData = [
  { name: 'Mac', value: 40000, color: '#00AB55' },
  { name: 'Window', value: 30000, color: '#2065D1' },
  { name: 'iOS', value: 20000, color: '#FF5630' },
  { name: 'Android', value: 18000, color: '#FFC107' },
];

const barData = [
  { month: 'Jan', Asia: 20, Europe: 40, Americas: 10 },
  { month: 'Feb', Asia: 30, Europe: 35, Americas: 15 },
  { month: 'Mar', Asia: 40, Europe: 50, Americas: 20 },
  { month: 'Apr', Asia: 50, Europe: 60, Americas: 25 },
  { month: 'May', Asia: 60, Europe: 70, Americas: 30 },
  { month: 'Jun', Asia: 70, Europe: 80, Americas: 35 },
  { month: 'Jul', Asia: 80, Europe: 90, Americas: 40 },
  { month: 'Aug', Asia: 60, Europe: 70, Americas: 30 },
  { month: 'Sep', Asia: 50, Europe: 60, Americas: 25 },
  { month: 'Oct', Asia: 40, Europe: 50, Americas: 20 },
  { month: 'Nov', Asia: 30, Europe: 35, Americas: 15 },
  { month: 'Dec', Asia: 20, Europe: 40, Americas: 10 },
];

export default function DashboardPage() {
  return (
    <Box sx={{ p: 0 }}>
      <Grid container spacing={3}>
        {/* Welcome Card */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ background: 'linear-gradient(90deg, #23283B 60%, #2065D1 100%)', borderRadius: 3, minHeight: 160, display: 'flex', alignItems: 'center', px: 4, width: '100%' }}>
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
        </Grid>
        {/* Featured App Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ background: 'linear-gradient(90deg, #23283B 60%, #6A82FB 100%)', borderRadius: 3, minHeight: 160, display: 'flex', alignItems: 'center', px: 4, width: '100%' }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="caption" sx={{ color: '#00AB55', fontWeight: 700 }}>
                FEATURED APP
              </Typography>
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: 700, mt: 1 }}>
                The Rise of Remote Work: Benefits, Challenges, and Best Practices
              </Typography>
              <Typography variant="body2" sx={{ color: '#B0B8C1', mt: 1 }}>
                The aroma of freshly brewed coffee filled the air, awakening ...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Stat Cards */}
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard icon={<PeopleIcon sx={{ color: '#00AB55', fontSize: 32 }} />} value="18,765" label="Total active users" trend="+2.6% last 7 days" trendColor="success" />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard icon={<CheckCircleIcon sx={{ color: '#2065D1', fontSize: 32 }} />} value="4,876" label="Total installed" trend="+0.2% last 7 days" trendColor="success" />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard icon={<DownloadIcon sx={{ color: '#FF5630', fontSize: 32 }} />} value="678" label="Total downloads" trend="-0.1% last 7 days" trendColor="error" />
        </Grid>
        {/* Donut Chart Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ background: '#23283B', borderRadius: 3, boxShadow: 'none', minHeight: 240, width: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
                Current download
              </Typography>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie data={donutData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={70}>
                    {donutData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                {donutData.map((entry) => (
                  <Box key={entry.name} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: entry.color }} />
                    <Typography variant="caption" sx={{ color: '#B0B8C1' }}>{entry.name}</Typography>
                  </Box>
                ))}
              </Box>
              <Typography variant="h6" sx={{ color: '#fff', textAlign: 'center', mt: 2 }}>
                Total 188,245
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Bar Chart Card */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ background: '#23283B', borderRadius: 3, boxShadow: 'none', minHeight: 240, width: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
                Area installed <span style={{ color: '#B0B8C1', fontWeight: 400 }}>(+43% than last year)</span>
              </Typography>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={barData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <XAxis dataKey="month" stroke="#B0B8C1" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#B0B8C1" fontSize={12} tickLine={false} axisLine={false} />
                  <RechartsTooltip />
                  <Legend />
                  <Bar dataKey="Asia" stackId="a" fill="#00AB55" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Europe" stackId="a" fill="#2065D1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Americas" stackId="a" fill="#FF5630" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
                <Typography variant="caption" sx={{ color: '#00AB55' }}>Asia 1.23k</Typography>
                <Typography variant="caption" sx={{ color: '#2065D1' }}>Europe 6.79k</Typography>
                <Typography variant="caption" sx={{ color: '#FF5630' }}>Americas 1.01k</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* News Card */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ background: '#23283B', borderRadius: 3, boxShadow: 'none', minHeight: 240, width: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
                Latest News
              </Typography>
              {[1, 2, 3].map((item) => (
                <Box key={item} sx={{ display: 'flex', gap: 2, py: 1.5, borderBottom: item < 3 ? '1px solid #2F3444' : 'none' }}>
                  <Box sx={{ width: 60, height: 60, borderRadius: 1, overflow: 'hidden', flexShrink: 0 }}>
                    <Box component="img" src={`/news-${item}.jpg`} alt={`News ${item}`} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" sx={{ color: '#B0B8C1' }}>
                      {['Marketing', 'Community', 'Development'][item-1]} • {['2d', '3d', '5d'][item-1]} ago
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500, my: 0.5, lineHeight: 1.4 }}>
                      {[
                        'New Features: Enhanced Dashboard Analytics Released',
                        'User Spotlight: How Company X Achieved 150% Growth',
                        'Product Update: Mobile App Version 2.4.0 Available'
                      ][item-1]}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ width: 20, height: 20 }} src={`/avatar-${item}.jpg`} />
                      <Typography variant="caption" sx={{ color: '#B0B8C1' }}>
                        {['Jane Cooper', 'Wade Warren', 'Esther Howard'][item-1]}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
        
        {/* Traffic Sources Card */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ background: '#23283B', borderRadius: 3, boxShadow: 'none', minHeight: 240, width: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
                Traffic Sources
              </Typography>
              {[
                { source: 'Google', visits: '3.9k', growth: '+8.2%', color: '#00AB55' },
                { source: 'Direct', visits: '5.2k', growth: '+3.1%', color: '#2065D1' },
                { source: 'Social', visits: '2.7k', growth: '+5.7%', color: '#FFC107' },
                { source: 'Referral', visits: '1.8k', growth: '+2.2%', color: '#FF5630' },
                { source: 'Email', visits: '990', growth: '+1.2%', color: '#6A82FB' }
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1.5, borderBottom: index < 4 ? '1px solid #2F3444' : 'none' }}>
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
                        '& .MuiChip-label': { px: 1, py: 0.3, fontSize: 12 }
                      }} 
                    />
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
} 