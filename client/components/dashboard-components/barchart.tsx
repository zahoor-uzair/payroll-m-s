import React from "react";
import { Card as MuiCard, useTheme } from "@mui/material";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { data } from "./areachart";

export default function Barchart() {
  const theme = useTheme();

  const axisColor = theme.palette.primary.main; // Adjust axis color according to your theme

  return (
    <MuiCard
      sx={{
        width: "100%",
        height: 350,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 40, right: 30, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: axisColor }} />
          <YAxis tick={{ fill: axisColor }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#0f0c29" />
          <Bar dataKey="uv" fill="#cbcaa5" />
        </BarChart>
      </ResponsiveContainer>
    </MuiCard>
  );
}
