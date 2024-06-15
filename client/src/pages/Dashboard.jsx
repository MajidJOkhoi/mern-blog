import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import Profile from "../components/Profile";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <SideBar/>
     
      </div>

        {tab === 'profile' && <Profile />}
     
    </div>
  );
};

export default Dashboard;
