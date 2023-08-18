import React from "react";
import RadialChartComponent from "../../ui/radialChart";
import "./styles.scss";

// Cultural component
const CulturalVitalComponent = () => {
  const vitalsArr = [
    {
      id: 1,
      title: "Inclusion",
      value: 25,
      type: "dec",
      showType: true,
      text: "",
      color: "#333",
    },
    {
      id: 2,
      title: "Trust",
      value: 85,
      type: "inc",
      showType: true,
      text: "",
      color: "#333",
    },
    {
      id: 3,
      title: "Psychological Safety",
      value: 60,
      type: "dec",
      showType: true,
      text: "",
      color: "#333",
    },
    {
      id: 4,
      title: "Innovation",
      value: 72,
      type: "inc",
      showType: true,
      text: "",
      color: "#333",
    },
    {
      id: 5,
      title: "Burnout",
      value: 38,
      type: "dec",
      showType: true,
      text: "",
      color: "#333",
    },
  ];
  return (
    <div className="cultural-vital-container">
      <div className="sub-heading-container">
        <div className="sub-heading-text">THIS MONTH</div>
        <div className="main-text">Culture Vital Signs</div>
      </div>
      <div className="progress-bar-cnt">
        {vitalsArr.map((obj: any) => (
          <div className="chart-cnt" key={obj.id}>
            <RadialChartComponent
              title={obj.title}
              value={obj.value}
              type={obj.type}
              showType={obj.showType}
              text={obj.text}
              color={obj.color}
							width={"170px"}
							height={"170px"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalVitalComponent;
