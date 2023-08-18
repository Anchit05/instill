import React from "react";
import Header from "../../components/header";
import SideBar from "../../components/sidebar";
import Dashboard from "../../components/dashboard";

// interface HeaderProps {
//   title: string;
// }

// Home component
const Home = () => {
  return (
    <div className="">
      <Header />
			<SideBar />
			<Dashboard />
    </div>
  );
};

export default Home;
