import React from "react";
import { Box, useTheme } from "@mui/material";
import { Card as MuiCard } from "@mui/material";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

export const data = [
  {
    name: " A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: " B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: " C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: " D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: " E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: " F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function Areachart() {
  const theme = useTheme();

  const chartBackgroundColor = theme.palette.secondary.main; // Get primary color from the theme

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
        <AreaChart
          data={data}
          margin={{ top: 40, right: 30, left: 10, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0f0c29" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0f0c29" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#cbcaa5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#cbcaa5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{ fill: axisColor }} />
          <YAxis tick={{ fill: axisColor }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#0f0c29"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#cbcaa5"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </MuiCard>
  );
}
