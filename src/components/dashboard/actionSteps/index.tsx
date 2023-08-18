import React from "react";
import "./styles.scss";
import attentionIcon from "../../../assets/attention-icon.svg";

// Action Steps component
const ActionStepsComponent = () => {
  const actionStepsArr = [
    {
      id: 1,
      title: "Psychological Safety Alert on Sales Team",
      desc: "Share something vulnerable in your next team meeting.",
      btnText: "Take action",
    },
    {
      id: 2,
      title: "You Have a Burnout Alert",
      desc: "Implement 25 minute meetings for a 5 minute break between calls. ",
      btnText: "Take action",
    },
    {
      id: 3,
      title: "Inclusion Scores are Trending Down with New Teammates",
      desc: "Ask their opinion in next meeting.",
      btnText: "Take action",
    },
  ];
  return (
    <div className="action-steps-container">
      <div className="sub-heading-container">
        <div className="sub-heading-text">Advance your culture with</div>
				<div className="main-text-cnt">
        	<div className="main-text">Action Steps</div>
					<div className="attention-cnt">
						<img src={attentionIcon} alt="attention icon" />
						<span className="attention-text">Needs attention</span>
					</div>
				</div>
      </div>
      <div className="steps-cnt">
        {actionStepsArr.map((obj: any) => (
          <div className="steps-wrapper" key={obj.id}>
            <div className="info-side">
							<div className="img-cnt"></div>
							<div className="action-info-cnt">
								<div className="info-title">{obj.title}</div>
								<div className="info-desc">{obj.desc}</div>
							</div>
						</div>
						<div className="button-side">
							<span className="btn-text">{obj.btnText}</span>
						</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionStepsComponent;
