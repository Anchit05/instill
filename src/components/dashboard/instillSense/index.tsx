import React from "react";
import RadialChartComponent from "../../ui/radialChart";
import "./styles.scss";
import instillIcon from "../../../assets/instill-icon.svg";
import safeIcon from "../../../assets/safe-icon.svg";

// Instill Sense component
const InstillSenseComponent = () => {
  const meetingsArr = [
    {
      id: 1,
      value: 62,
      showType: false,
      text: "Positive",
      color: "#6ED29C",
    },
    {
      id: 2,
      value: 30,
      showType: false,
      text: "Neutral",
      color: "#FBBF24",
    },
    {
      id: 3,
      value: 8,
      showType: false,
      text: "Negative",
      color: "#FF3B6B",
    },
  ];
  return (
    <div className="instill-sense-container">
      <div className="heading-container">
        <div className="left-side">
          <div className="icon-cnt">
            <img src={instillIcon} alt="instillIcon" />
          </div>
          <div className="instill-text">Instill Sense</div>
        </div>
        <div className="right-side">
          <div className="safe-cnt">
            <img src={safeIcon} alt={"safeIcon"} />
            <span className="safe-text">Safe and secure</span>
          </div>
        </div>
      </div>
			<div className="meetings-summaries-cnt">
				<div className="meetings-cnt">
					<div className="common-text">Upcoming Meetings</div>
					<div className="number-text">12</div>
				</div>
				<div className="summaries-cnt">
				<div className="common-text">New Summaries</div>
				<div className="number-text">03</div>
				</div>
			</div>
			<div className="sentiments-cnt">
				<div className="common-text">Meetings Sentiments</div>
				<div className="progress-bar-cnt">
					{meetingsArr.map((obj: any) => (
						<div className="chart-cnt" key={obj.id}>
							<RadialChartComponent
								value={obj.value}
								type={obj.type}
								showType={obj.showType}
								text={obj.text}
								color={obj.color}
								width={"140px"}
								height={"140px"}
							/>
						</div>
					))}
				</div>
			</div>
    </div>
  );
};

export default InstillSenseComponent;
