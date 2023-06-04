import React from "react";
import SectionMainHeader from "../components/SectionMainHeader";
import ClientList from "../components/top-clients/ClientList";

const TopClients = () => {
  return (
    <section className="popular bg-secondary">
      <SectionMainHeader title="clients" header="manage top clients images" />
      <div className="container">
        <ClientList />
      </div>
    </section>
  );
};

export default TopClients;
