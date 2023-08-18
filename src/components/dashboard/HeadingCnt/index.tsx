import React from "react";
import "./styles.scss";
import appleLogo from "../../../assets/Apple_logo_black.svg";

interface HeaderProps {
  title: string;
  greetingText: string;
  designationText: string;
}

// Header component
const HeadingCnt: React.FC<HeaderProps> = ({
  title,
  greetingText,
  designationText,
}) => {
  return (
    <div className="dashboard-heading-container">
      <div className="heading-container">
        <div className="apple-cnt">
          <img src={appleLogo} alt="apple-logo" />
        </div>
        <div className="heading-text">{title}</div>
      </div>
      <div className="greeting-cnt">
        <div className="first-text">{greetingText}</div>
        <div className="designation-text">{designationText}</div>
      </div>
    </div>
  );
};

export default HeadingCnt;
