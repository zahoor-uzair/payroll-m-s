import React from "react";
import { Box, useTheme } from "@mui/material";
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

  const chartBackgroundColor = theme.palette.primary.main; // Get primary color from the theme

  const axisColor = theme.palette.secondary.main; // Adjust axis color according to your theme

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 40, right: 30, left: 10, bottom: 20 }}
        style={{ backgroundColor: chartBackgroundColor, borderRadius: "5px" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: axisColor }} />
        <YAxis tick={{ fill: axisColor }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#cbcaa5" />
      </BarChart>
    </ResponsiveContainer>
  );
}
