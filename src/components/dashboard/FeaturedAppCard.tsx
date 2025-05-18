import { Card, CardContent, Typography } from "@mui/material";

export default function FeaturedAppCard() {
  return (
    <Card
      sx={{
        background: "linear-gradient(90deg, #23283B 60%, #6A82FB 100%)",
        borderRadius: 3,
        minHeight: 160,
        display: "flex",
        alignItems: "center",
        px: 4,
        width: "100%",
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography
          variant="caption"
          sx={{ color: "#00AB55", fontWeight: 700 }}
        >
          FEATURED APP
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#fff", fontWeight: 700, mt: 1 }}
        >
          The Rise of Remote Work: Benefits, Challenges, and Best Practices
        </Typography>
        <Typography variant="body2" sx={{ color: "#B0B8C1", mt: 1 }}>
          The aroma of freshly brewed coffee filled the air, awakening ...
        </Typography>
      </CardContent>
    </Card>
  );
}
