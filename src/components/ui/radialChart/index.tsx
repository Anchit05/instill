import React from "react";
import Chart from "react-apexcharts";
import downArrow from "../../../assets/down-arrow.svg";
import upArrow from "../../../assets/up-arrow.svg";
import "./styles.scss";

interface ChartData {
	title?: string;
	value: number;
	type?: string;
	showType: boolean,
	text?: string;
	color: string;
	width: string;
	height: string;
}

// Radial Chart component
const RadialChartComponent: React.FC<ChartData> = ({title="", value, type="", showType, text="", color, width, height }) => {
  const series = [value];
  const options: any = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
        },
        track: {
          background: "#DFDFDF",
          strokeWidth: "67%",
          margin: 0,
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: 5,
            show: true,
            color: "#333",
            fontSize: "16px",
            fontWeight: "600",
          },
          value: {
            show: false,
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: [color],
    },

    labels: [`${value}%`],
    stroke: {
      lineCap: "round",
    },
  };
  return (
    <div className="radial-chart-container">
      {title && <div className="chart-heading">{title}</div>}
      <div className="chart-part">
				<Chart
					type="radialBar"
					series={series}
					options={options}
					width={width}
					height={height}
				/>
			</div>
			{ showType && 
				<div className="drop-text" style={{color: type === "dec" ? "#FF3B6B" : "#6ED29C"}}>
					{ type === "dec" ? (
						<img src={downArrow} />
					) : (
						<img src={upArrow} />
					)
					}
						{value}%
				</div>
			}
			{ text && <div className="chart-text">{text}</div>}
    </div>
  );
};

export default RadialChartComponent;
