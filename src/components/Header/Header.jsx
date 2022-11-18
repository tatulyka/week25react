import React from 'react';
import { Chart } from "react-google-charts";
export const data = [
    ["Task", "Hours per Day"],
    ["Eat and drink", 1],
    ["Sleep", 12],
    ["Play", 2],
    ["Asking for any food", 2],
    ["bark at everyone", 2],
    ["guard the house", 3],
    ["run after cats", 2],
  ];
  
  export const options = {
    title: "My Dog's day",
    is3D: true,
  };

export function Header() {
    return (
        <div>
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
            />
        </div>
    );
}
