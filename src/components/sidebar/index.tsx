import React from "react";
import "./index.scss";
import instillLogo from '../../assets/instill_logo.svg';
import frameLogo from '../../assets/frameLogo.svg';
import sidebarIcon1 from '../../assets/sidebarIcon-1.svg';
import sidebarIcon2 from '../../assets/sidebarIcon-2.svg';
import sidebarIcon3 from '../../assets/sidebarIcon-3.svg';
import sidebarIcon4 from '../../assets/sidebarIcon-4.svg';
import sidebarIcon5 from '../../assets/sidebarIcon-5.svg';
import sidebarIcon6 from '../../assets/sidebarIcon-6.svg';
import sidebarIcon7 from '../../assets/sidebarIcon-7.svg';

// interface HeaderProps {
//   title: string;
// }

// Header component
const SideBar = () => {
  return <div className="sidebar-container">
		<div className="sidebar-wrapper">
			<div className="first-cnt common-cnt">
				<div className="instillLogo">
					<img src={instillLogo} alt="instillLogo" />
				</div>
				<div className="frameLogo">
					<img src={frameLogo} alt="frameLogo" />
				</div>
			</div>
			<div className="second-cnt common-cnt">
				<div className="icon1-cnt">
					<img src={sidebarIcon1} alt="icon1" />
				</div>
				<div className="icon2-cnt">
					<img src={sidebarIcon2} alt="icon2" />
				</div>
			</div>
			<div className="third-cnt common-cnt">
				<div className="icon3-cnt">
					<img src={sidebarIcon3} alt="icon3" />
				</div>
				<div className="icon4-cnt">
					<img src={sidebarIcon4} alt="icon4" />
				</div>
				<div className="icon5-cnt">
					<img src={sidebarIcon5} alt="icon5" />
				</div>
			</div>
			<div className="fourth-cnt common-cnt">
				<div className="icon6-cnt">
					<img src={sidebarIcon6} alt="icon6" />
				</div>
				<div className="icon7-cnt">
					<img src={sidebarIcon7} alt="icon7" />
				</div>
			</div>
		</div>
	</div>;
};

export default SideBar;
