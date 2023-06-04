import React from "react";
import { BsWhatsapp } from "react-icons/bs";
const WhatsApp = () => {
  return (
    <a
      className="whats-app fs-4 nav-link bg-secondary text-primary"
      href="https://wa.me/201005550942"
      target="_blank"
    >
      <BsWhatsapp />
    </a>
  );
};

export default WhatsApp;
