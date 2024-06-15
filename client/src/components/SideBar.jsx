// src/components/SideBar.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiUser, HiOutlineLogout } from "react-icons/hi";

const SideBar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);

  return (
    <div className="h-screen w-full bg-gray-800 text-white">
      <Sidebar aria-label="Sidebar navigation">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item
                href="#"
                label={"User"}
                icon={HiUser}
                active={tab === "profile"}
              >
                Profile
              </Sidebar.Item>
            </Link>
            <Link to="/sign-in">
              <Sidebar.Item
                href="#"
                icon={HiOutlineLogout}
                active={tab === "sign-in"} className="curser-pointer"
              >
                Sign Out
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
