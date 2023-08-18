import React from "react";
import "./styles.scss";
import Chart from "react-apexcharts";

interface ScoreData {
  title: string;
  scoreType: string;
  focusedText: string;
  normalText: string;
  value: number;
}

// Pulse Survey component
const ScoreComponent: React.FC<ScoreData> = ({
  title,
  scoreType,
  focusedText,
  normalText,
  value,
}) => {
	const series = [value];
	const options: any = {
		chart: {
			height: 100,
			type: "radialBar",
		},
		colors: ["#20E647"],
		plotOptions: {
			radialBar: {
				startAngle: -90,
				endAngle: 90,
				track: {
					background: '#DFDFDF',
					startAngle: -90,
					endAngle: 90,
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						fontSize: "20px",
						show: true,
						offsetY: -2,
						fontWeight: "600",
						formatter: function (val:any) {
							return '+' + val 
						}
					}
				}
			}
		},
		fill: {
			type: "solid",
			colors: ["#6ED29C"]
		},
		stroke: {
			lineCap: "butt"
		},
		labels: [`+${value}`]
	};
  return (
    <div className={`score-container ${value < 5 ? "bg-red" : ""}`}>
      <div className="score-title">{title}</div>
			{scoreType === "circlebar" && <div className="common-wrapper chart-wrapper">
				<Chart
					type="radialBar"
					series={series}
					options={options}
					width={200}
					height={200}
				/></div>}
			{scoreType === "number" && <div className="common-wrapper">
				<span className={`score-value ${value < 5 ? "text-red" : ""}`}>{value}</span>
				<span className="total-value">/10</span>
				</div>}
			{scoreType === "percentage" && <div className="common-wrapper">
				<span className="score-value">{value}</span>
				<span className="total-value">%</span>
				</div>}
      {value > 5 ? (
        <div className="bottom-text">
          {normalText} <strong>{focusedText}</strong>
        </div>
      ) : (
        <div className="bottom-text">
          <strong>{focusedText}</strong> {normalText}
        </div>
      )}
    </div>
  );
};

export default ScoreComponent;
