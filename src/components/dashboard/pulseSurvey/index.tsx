import React from "react";
import "./styles.scss";
import ScoreComponent from "../../ui/scoreCnt";

// Pulse Survey component
const PulseSurveyComponent = () => {
  const surveyDataArr = [
    {
      id: 1,
      title: "eNPS Score",
      scoreType: "circlebar",
      focusedText: "Excellent",
      normalText: "Score is",
      value: 54,
    },
    {
      id: 2,
      title: "Support from Manager",
      scoreType: "number",
      focusedText: "Good one",
      normalText: "Score > 7 is a",
      value: 7.5,
    },
    {
      id: 3,
      title: "Mission & Values Alignment",
      scoreType: "percentage",
      focusedText: "Average",
      normalText: "Score is",
      value: 60,
    },
    {
      id: 4,
      title: "Performance Feedback",
      scoreType: "number",
      focusedText: "Need focus",
      normalText: "on this",
      value: 4.5,
    },
  ];
  return (
    <div className="pulse-survey-container">
      <div className="sub-heading-container">
        <div className="sub-heading-text">THIS MONTH</div>
        <div className="main-text">Pulse Survey</div>
      </div>
      <div className="score-cnt">
        {surveyDataArr.map((obj: any) => (
          <div className="score-wrapper" key={obj.id}>
            <ScoreComponent
              title={obj.title}
              scoreType={obj.scoreType}
              focusedText={obj.focusedText}
              normalText={obj.normalText}
              value={obj.value}
            />
          </div>
        ))}
      </div>
			<div className="info-cnt">
				<span className="info-text">900 Employees</span>
				<ul className="combined">
					<li className="info-text">675 Responses</li>
					<li className="info-text">3 days remaining</li>
				</ul>
			</div>
    </div>
  );
};

export default PulseSurveyComponent;
