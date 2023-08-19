import React from "react";
import "./styles.scss";
import HeadingCnt from "./HeadingCnt";
import CulturalVitalComponent from "./cultureVital";
import InstillSenseComponent from "./instillSense";
import PulseSurveyComponent from "./pulseSurvey";
import ActionStepsComponent from "./actionSteps";

// Header component
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <HeadingCnt title="Apple Culture Dashboard" greetingText="Hi, Tim" designationText="CEO,Apple Inc"/>
			<CulturalVitalComponent />
			<div className="instill-pulse-cnt">
				<InstillSenseComponent />
				<PulseSurveyComponent />
			</div>
			<ActionStepsComponent />
    </div>
  );
};

export default Dashboard;
