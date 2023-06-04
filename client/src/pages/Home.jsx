import React from "react";
import Banner from "../components/home/Banner";
import CompanyRefresh from "../components/home/CompanyRefresh";
import Service from "../components/home/Service";
import RecentWorks from "../components/home/RecentWorks";
import TopClients from "../components/home/TopClients";

const Home = () => {
  return (
    <div>
      <Banner />
      <CompanyRefresh />
      <Service />
      <RecentWorks />
      <TopClients />
    </div>
  );
};

export default Home;
